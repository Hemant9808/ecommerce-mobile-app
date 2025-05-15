import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Heart } from 'lucide-react-native';
import SectionHeader from '@/components/common/SectionHeader';
import { flashSaleProducts } from '@/data/products';

export default function FlashSellSection() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (productId: string) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  // Calculate remaining time for flash sale
  const hours = 14;
  const minutes = 25;
  const seconds = 37;

  return (
    <View style={styles.container}>
      <SectionHeader title="Flash Sell" actionLabel="See all" />

      <View style={styles.timerContainer}>
        <Text style={styles.timerLabel}>Ends in</Text>
        <View style={styles.timerBoxesContainer}>
          <View style={styles.timerBox}>
            <Text style={styles.timerValue}>{hours}</Text>
          </View>
          <Text style={styles.timerSeparator}>:</Text>
          <View style={styles.timerBox}>
            <Text style={styles.timerValue}>{minutes}</Text>
          </View>
          <Text style={styles.timerSeparator}>:</Text>
          <View style={styles.timerBox}>
            <Text style={styles.timerValue}>{seconds}</Text>
          </View>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productsScroll}
      >
        {flashSaleProducts.map(product => (
          <TouchableOpacity key={product.id} style={styles.productCard}>
            <View style={styles.productImageContainer}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <TouchableOpacity 
                style={styles.favoriteButton}
                onPress={() => toggleFavorite(product.id)}
              >
                <Heart 
                  size={18} 
                  color={favorites.includes(product.id) ? '#FF4D67' : '#666'} 
                  fill={favorites.includes(product.id) ? '#FF4D67' : 'transparent'} 
                />
              </TouchableOpacity>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.productPrice}>${product.price}</Text>
                <Text style={styles.productPriceUnit}>USD</Text>
              </View>
              <View style={styles.badgeRow}>
                <Text style={styles.soldBadge}>{product.sold} sold</Text>
                {product.onStock && (
                  <Text style={styles.stockBadge}>On stock: {product.onStock}</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    paddingLeft: 16,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  timerLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#666',
    marginRight: 12,
  },
  timerBoxesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerBox: {
    backgroundColor: '#333',
    borderRadius: 4,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFF',
  },
  timerSeparator: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#333',
    marginHorizontal: 4,
  },
  productsScroll: {
    paddingRight: 16,
  },
  productCard: {
    width: 160,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  productImageContainer: {
    position: 'relative',
    height: 160,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  productPrice: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#333',
    marginRight: 4,
  },
  productPriceUnit: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666',
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  soldBadge: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#666',
    backgroundColor: '#F5F5F7',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 6,
  },
  stockBadge: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#666',
    backgroundColor: '#F5F5F7',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
});