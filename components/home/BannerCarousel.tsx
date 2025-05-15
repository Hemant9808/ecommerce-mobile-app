import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width - 32;

export default function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const banners = [
    {
      id: '1',
      title: 'New Arrivals',
      subtitle: 'BIG SALE',
      discount: '70% OFF',
      note: 'ON ALL MODELS',
      ctaText: 'BUY NOW',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'
    },
    {
      id: '2',
      title: 'Summer',
      subtitle: 'FLASH SALE',
      discount: '50% OFF',
      note: 'LIMITED TIME ONLY',
      ctaText: 'SHOP NOW',
      image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg'
    },
    {
      id: '3',
      title: 'Special Offer',
      subtitle: 'CLEARANCE',
      discount: '60% OFF',
      note: 'WHILE SUPPLIES LAST',
      ctaText: 'GET DEALS',
      image: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg'
    }
  ];

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / ITEM_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={ITEM_WIDTH + 8}
        contentContainerStyle={styles.scrollContent}
      >
        {banners.map((banner, index) => (
          <View key={banner.id} style={styles.bannerItem}>
            <Image source={{ uri: banner.image }} style={styles.bannerImage} />
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>{banner.title}</Text>
              <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>
              <Text style={styles.discountText}>{banner.discount}</Text>
              <Text style={styles.noteText}>{banner.note}</Text>
              <TouchableOpacity style={styles.ctaButton}>
                <Text style={styles.ctaButtonText}>{banner.ctaText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.paginationContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex && styles.paginationDotActive
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  bannerItem: {
    width: ITEM_WIDTH,
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 8,
  },
  bannerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bannerContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  bannerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFF',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#FFF',
    marginBottom: 4,
  },
  discountText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#FFF',
    marginBottom: 2,
  },
  noteText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#FFF',
    marginBottom: 12,
  },
  ctaButton: {
    backgroundColor: '#FFDE00',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    alignSelf: 'flex-start',
  },
  ctaButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#000',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#4B7BF5',
    width: 16,
  },
});