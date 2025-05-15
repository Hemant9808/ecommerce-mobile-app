import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react-native';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorite}
        >
          <Heart
            size={18}
            color={isFavorite ? '#FF4D67' : '#666'}
            fill={isFavorite ? '#FF4D67' : 'transparent'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>
          <Text style={styles.currency}>USD</Text>
        </View>
        <Text style={styles.soldText}>{product.sold} sold</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    padding: 12,
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    height: 40,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  price: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#333',
    marginRight: 4,
  },
  currency: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666',
  },
  soldText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666',
  },
});