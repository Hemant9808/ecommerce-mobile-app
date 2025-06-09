import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Search, Heart } from 'lucide-react-native';
import ProductGrid from '@/components/products/ProductGrid';
import SectionHeader from '@/components/common/SectionHeader';
import { useAppContext } from '@/context/AppContext';

export default function WishlistScreen() {
  const { wishlistItems, searchQuery, setSearchQuery, isSmallDevice } = useAppContext();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#777" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search wishlist"
              placeholderTextColor="#777"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {wishlistItems.length > 0 ? (
          <View style={styles.section}>
            <SectionHeader title="My Wishlist" actionLabel={`${wishlistItems.length} items`} />
            <ProductGrid products={wishlistItems} />
          </View>
        ) : (
          <View style={styles.emptyWishlist}>
            <Heart size={64} color="#CCCCCC" style={styles.emptyIcon} />
            <Text style={styles.emptyText}>Your wishlist is empty</Text>
            <Text style={styles.emptySubtext}>
              Items added to your wishlist will appear here
            </Text>
          </View>
        )}
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
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#333',
  },
  section: {
    marginBottom: 24,
  },
  emptyWishlist: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});