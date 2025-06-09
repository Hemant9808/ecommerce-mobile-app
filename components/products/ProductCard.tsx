import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Heart } from 'lucide-react-native';
import { Product } from '@/types/product';
import { router } from 'expo-router';
import { useAppContext } from '@/context/AppContext';

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist, isSmallDevice } = useAppContext();
  const isFavorite = isInWishlist(product.id);

  const toggleFavorite = (e: any) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push(`/product/${product.id}`);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSmallDevice && styles.containerSmall
      ]}
      onPress={handlePress}
    >
      <View style={[styles.imageContainer, isSmallDevice && styles.imageContainerSmall]}>
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
        <Text style={[styles.name, isSmallDevice && styles.nameSmall]} numberOfLines={2}>{product.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>
          <Text style={styles.currency}>USD</Text>
        </View>
        <Text style={styles.soldText}>{product.sold} sold</Text>
      </View>
    </TouchableOpacity>
  );
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 16px padding on each side, 16px gap between cards

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    width: cardWidth,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  containerSmall: {
    width: (width - 40) / 2, // Smaller devices need less padding
  },
  imageContainer: {
    position: 'relative',
    height: 150,
  },
  imageContainerSmall: {
    height: 120,
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
    zIndex: 1,
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
  nameSmall: {
    fontSize: 12,
    height: 36,
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