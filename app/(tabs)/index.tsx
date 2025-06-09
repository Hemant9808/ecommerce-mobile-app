import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Search, ShoppingBag } from 'lucide-react-native';
import BannerCarousel from '@/components/home/BannerCarousel';
import CategorySection from '@/components/home/CategorySection';
import FlashSellSection from '@/components/home/FlashSellSection';
import { useAppContext } from '@/context/AppContext';
import { router } from 'expo-router';

export default function HomeScreen() {
  const { searchQuery, setSearchQuery, cartItems, isSmallDevice, isMediumDevice, isLargeDevice } = useAppContext();

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim().length > 0) {
      router.push('/(tabs)/products');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Search and Cart */}
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <View style={[
              styles.searchBar,
              isSmallDevice && styles.searchBarSmall
            ]}>
              <Search size={isSmallDevice ? 16 : 20} color="#777" />
              <TextInput
                style={[
                  styles.searchInput,
                  isSmallDevice && styles.searchInputSmall
                ]}
                placeholder="Search products"
                placeholderTextColor="#777"
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => router.push('/(tabs)/cart')}
          >
            <ShoppingBag size={isSmallDevice ? 20 : 24} color="#333" />
            {cartItems.length > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Banner Carousel */}
        <BannerCarousel />

        {/* Popular Categories */}
        <CategorySection />

        {/* Flash Sell */}
        <FlashSellSection />
      </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchContainer: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchBarSmall: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#333',
  },
  searchInputSmall: {
    fontSize: 12,
  },
  cartButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF4D67',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  cartBadgeText: {
    color: '#FFF',
    fontFamily: 'Inter-Bold',
    fontSize: 10,
  },
});