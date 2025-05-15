import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Search } from 'lucide-react-native';
import BannerCarousel from '@/components/home/BannerCarousel';
import CategorySection from '@/components/home/CategorySection';
import FlashSellSection from '@/components/home/FlashSellSection';

export default function HomeScreen() {
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
});