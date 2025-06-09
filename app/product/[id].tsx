import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import { Heart, Star, ChevronLeft, ShoppingCart, Plus, Minus } from 'lucide-react-native';
import { useAppContext } from '@/context/AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const { getProductById, addToCart, isInWishlist, addToWishlist, removeFromWishlist } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  
  const product = getProductById(id as string);
  
  if (!product) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Product not found</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const isFavorite = isInWishlist(product.id);
  
  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const increaseQuantity = () => setQuantity(quantity + 1);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <>
      <StatusBar style="light" />
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Product Image */}
          <View style={styles.imageContainer}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <LinearGradient
              colors={['rgba(0,0,0,0.7)', 'transparent']}
              style={styles.gradient}
            />
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => router.back()}
            >
              <ChevronLeft size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.favoriteButton}
              onPress={handleToggleFavorite}
            >
              <Heart
                size={24}
                color={isFavorite ? '#FF4D67' : '#FFF'}
                fill={isFavorite ? '#FF4D67' : 'transparent'}
              />
            </TouchableOpacity>
          </View>
          
          {/* Product Info */}
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{product.name}</Text>
            
            <View style={styles.ratingContainer}>
              <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    color="#FFB800"
                    fill={star <= Math.floor(product.rating || 0) ? '#FFB800' : 'transparent'}
                  />
                ))}
              </View>
              <Text style={styles.ratingText}>
                {product.rating} ({product.reviews} reviews)
              </Text>
            </View>
            
            <View style={styles.priceContainer}>
              <Text style={styles.price}>${product.price.toFixed(2)}</Text>
              <Text style={styles.soldText}>{product.sold} sold</Text>
            </View>
            
            <View style={styles.divider} />
            
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>
              {product.description || 'No description available for this product.'}
            </Text>
            
            <View style={styles.divider} />
            
            {/* Quantity Selector */}
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityTitle}>Quantity</Text>
              <View style={styles.quantityControls}>
                <TouchableOpacity 
                  style={styles.quantityButton} 
                  onPress={decreaseQuantity}
                >
                  <Minus size={20} color="#333" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity 
                  style={styles.quantityButton} 
                  onPress={increaseQuantity}
                >
                  <Plus size={20} color="#333" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        
        {/* Bottom Action Bar */}
        <View style={styles.actionBar}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total Price</Text>
            <Text style={styles.totalPrice}>
              ${(product.price * quantity).toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity 
            style={styles.addToCartButton}
            onPress={handleAddToCart}
          >
            <ShoppingCart size={20} color="#FFF" />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  notFoundText: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
  },
  imageContainer: {
    width: '100%',
    height: width * 0.8,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButton: {
    position: 'absolute',
    top: 50,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#333',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#333',
  },
  soldText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: 16,
  },
  descriptionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#333',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#333',
    marginHorizontal: 16,
  },
  actionBar: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
  },
  totalContainer: {
    flex: 1,
    marginRight: 16,
  },
  totalLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666',
  },
  totalPrice: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#333',
  },
  addToCartButton: {
    flexDirection: 'row',
    backgroundColor: '#4B7BF5',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFF',
    marginLeft: 8,
  },
  backButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#4B7BF5',
  },
});
