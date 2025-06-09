import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Trash2, ShoppingBag } from 'lucide-react-native';
import CartItem from '@/components/cart/CartItem';
import { useAppContext } from '@/context/AppContext';
import { router } from 'expo-router';

export default function CartScreen() {
  const { cartItems, cartTotal, isSmallDevice, isMediumDevice } = useAppContext();

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const handleShopNow = () => {
    router.push('/(tabs)/products');
  };

  // Calculate shipping cost
  const shippingCost = 5.00;
  const totalAmount = cartTotal + shippingCost;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
      </View>

      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CartItem item={item} />}
            contentContainerStyle={[
              styles.cartList,
              isSmallDevice && styles.cartListSmall
            ]}
          />

          <View style={styles.footer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Subtotal</Text>
              <Text style={styles.totalAmount}>${cartTotal.toFixed(2)}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Shipping</Text>
              <Text style={styles.totalAmount}>${shippingCost.toFixed(2)}</Text>
            </View>
            <View style={[styles.totalRow, styles.finalRow]}>
              <Text style={styles.grandTotalLabel}>Total</Text>
              <Text style={styles.grandTotalAmount}>${totalAmount.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}
            >
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCart}>
          <ShoppingBag size={64} color="#CCCCCC" style={styles.emptyCartIcon} />
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <TouchableOpacity
            style={styles.shopNowButton}
            onPress={handleShopNow}
          >
            <Text style={styles.shopNowButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  header: {
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  cartList: {
    padding: 16,
  },
  cartListSmall: {
    padding: 8,
  },
  footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
  },
  totalAmount: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#333',
  },
  finalRow: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
    marginBottom: 16,
  },
  grandTotalLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#333',
  },
  grandTotalAmount: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#4B7BF5',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  checkoutButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFF',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyCartIcon: {
    marginBottom: 16,
  },
  emptyCartText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  shopNowButton: {
    backgroundColor: '#4B7BF5',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  shopNowButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFF',
  },
});