import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useAppContext } from '@/context/AppContext';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const { dimensions, isSmallDevice, isMediumDevice, isLargeDevice } = useAppContext();

  const { width } = dimensions;
  const ITEM_WIDTH = isSmallDevice ? width - 24 : width - 32;

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

  const handleBannerPress = (bannerId: string) => {
    router.push('/(tabs)/products');
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
        contentContainerStyle={[
          styles.scrollContent,
          isSmallDevice && styles.scrollContentSmall
        ]}
      >
        {banners.map((banner, index) => (
          <TouchableOpacity
            key={banner.id}
            style={[
              styles.bannerItem,
              { width: ITEM_WIDTH },
              isSmallDevice && styles.bannerItemSmall
            ]}
            onPress={() => handleBannerPress(banner.id)}
            activeOpacity={0.9}
          >
            <Image source={{ uri: banner.image }} style={styles.bannerImage} />
            <LinearGradient
              colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.3)', 'transparent']}
              style={styles.bannerGradient}
            />
            <View style={[
              styles.bannerContent,
              isSmallDevice && styles.bannerContentSmall
            ]}>
              <Text style={[
                styles.bannerTitle,
                isSmallDevice && styles.bannerTitleSmall
              ]}>
                {banner.title}
              </Text>
              <Text style={[
                styles.bannerSubtitle,
                isSmallDevice && styles.bannerSubtitleSmall
              ]}>
                {banner.subtitle}
              </Text>
              <Text style={[
                styles.discountText,
                isSmallDevice && styles.discountTextSmall
              ]}>
                {banner.discount}
              </Text>
              <Text style={[
                styles.noteText,
                isSmallDevice && styles.noteTextSmall
              ]}>
                {banner.note}
              </Text>
              <TouchableOpacity
                style={[
                  styles.ctaButton,
                  isSmallDevice && styles.ctaButtonSmall
                ]}
              >
                <Text style={[
                  styles.ctaButtonText,
                  isSmallDevice && styles.ctaButtonTextSmall
                ]}>
                  {banner.ctaText}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.paginationContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex && styles.paginationDotActive,
              isSmallDevice && styles.paginationDotSmall,
              isSmallDevice && index === activeIndex && styles.paginationDotActiveSmall
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
  scrollContentSmall: {
    paddingHorizontal: 12,
  },
  bannerItem: {
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bannerItemSmall: {
    height: 150,
  },
  bannerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bannerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
  bannerContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  bannerContentSmall: {
    padding: 12,
  },
  bannerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFF',
    marginBottom: 4,
  },
  bannerTitleSmall: {
    fontSize: 12,
    marginBottom: 2,
  },
  bannerSubtitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#FFF',
    marginBottom: 4,
  },
  bannerSubtitleSmall: {
    fontSize: 20,
    marginBottom: 2,
  },
  discountText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#FFF',
    marginBottom: 2,
  },
  discountTextSmall: {
    fontSize: 16,
  },
  noteText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#FFF',
    marginBottom: 12,
  },
  noteTextSmall: {
    fontSize: 10,
    marginBottom: 8,
  },
  ctaButton: {
    backgroundColor: '#FFDE00',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    alignSelf: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  ctaButtonSmall: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  ctaButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#000',
  },
  ctaButtonTextSmall: {
    fontSize: 10,
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
  paginationDotSmall: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
  },
  paginationDotActive: {
    backgroundColor: '#4B7BF5',
    width: 16,
  },
  paginationDotActiveSmall: {
    width: 12,
  },
});