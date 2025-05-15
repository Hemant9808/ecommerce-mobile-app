import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';
import ProductGrid from '@/components/products/ProductGrid';
import SectionHeader from '@/components/common/SectionHeader';
import { wishlistProducts } from '@/data/products';

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#777" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search product"
              placeholderTextColor="#777"
            />
          </View>
        </View>

        {/* Recently Viewed */}
        <View style={styles.section}>
          <SectionHeader title="Recently visited" actionLabel="See all" />
          <ProductGrid products={wishlistProducts} />
        </View>
      </ScrollView>
    </View>
  );
}

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
});