import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Minus, Plus, Trash2 } from 'lucide-react-native';
import { CartItem as CartItemType } from '@/types/cart';
import { useAppContext } from '@/context/AppContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateCartItemQuantity, removeFromCart, isSmallDevice } = useAppContext();

  const increaseQuantity = () => {
    updateCartItemQuantity(item.id, item.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateCartItemQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <View style={[
      styles.container,
      isSmallDevice && styles.containerSmall
    ]}>
      <Image
        source={{ uri: item.image }}
        style={[
          styles.image,
          isSmallDevice && styles.imageSmall
        ]}
      />

      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.name,
              isSmallDevice && styles.nameSmall
            ]}
            numberOfLines={2}
          >
            {item.name}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <Text style={styles.unitPrice}>USD</Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={decreaseQuantity}
            >
              <Minus size={16} color="#666" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={increaseQuantity}
            >
              <Plus size={16} color="#666" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.removeButton}
            onPress={handleRemove}
          >
            <Trash2 size={18} color="#999" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  containerSmall: {
    padding: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  imageSmall: {
    width: 60,
    height: 60,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  nameSmall: {
    fontSize: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#333',
    marginRight: 4,
  },
  unitPrice: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    borderRadius: 8,
    paddingVertical: 4,
  },
  quantityButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#333',
    minWidth: 24,
    textAlign: 'center',
  },
  removeButton: {
    width: 36,
    height: 36,
    backgroundColor: '#F5F5F7',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});