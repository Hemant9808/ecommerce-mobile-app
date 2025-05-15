import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Minus, Plus, Trash2 } from 'lucide-react-native';
import { CartItem as CartItemType } from '@/types/cart';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <Text style={styles.unitPrice}>USD</Text>
          </View>
        </View>
        
        <View style={styles.actionsContainer}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
              <Minus size={16} color="#666" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
              <Plus size={16} color="#666" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.removeButton}>
            <Trash2 size={18} color="#999" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
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