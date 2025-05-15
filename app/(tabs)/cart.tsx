import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Trash2 } from 'lucide-react-native';
import { cartItems } from '@/data/cart';
import CartItem from '@/components/cart/CartItem';

export default function CartScreen() {
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
            contentContainerStyle={styles.cartList}
          />

          <View style={styles.footer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Subtotal</Text>
              <Text style={styles.totalAmount}>$255.94</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Shipping</Text>
              <Text style={styles.totalAmount}>$5.00</Text>
            </View>
            <View style={[styles.totalRow, styles.finalRow]}>
              <Text style={styles.grandTotalLabel}>Total</Text>
              <Text style={styles.grandTotalAmount}>$260.94</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <TouchableOpacity style={styles.shopNowButton}>
            <Text style={styles.shopNowButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

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
  },
  shopNowButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFF',
  },
});