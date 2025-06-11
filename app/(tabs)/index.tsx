import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Platform, Alert } from 'react-native';
import { Search, ShoppingBag, Bell } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BannerCarousel from '@/components/home/BannerCarousel';
import CategorySection from '@/components/home/CategorySection';
import FlashSellSection from '@/components/home/FlashSellSection';
import { useAppContext } from '@/context/AppContext';
import { router } from 'expo-router';

export default function HomeScreen() {
  const { searchQuery, setSearchQuery, cartItems, isSmallDevice, isMediumDevice, isLargeDevice, dimensions } = useAppContext();
  const insets = useSafeAreaInsets();

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim().length > 0) {
      // Navigate to products screen with search query
      router.push({
        pathname: '/(tabs)/products',
        params: { search: text.trim() }
      });
    }
  };

  // Responsive styling functions
  const getHeaderPadding = () => {
    if (isSmallDevice) return { horizontal: 12, vertical: 8 };
    if (isMediumDevice) return { horizontal: 16, vertical: 12 };
    return { horizontal: 20, vertical: 16 };
  };

  const getSearchBarStyle = () => {
    const base = {
      borderRadius: isLargeDevice ? 28 : 24,
      paddingHorizontal: isSmallDevice ? 12 : isLargeDevice ? 20 : 16,
      paddingVertical: isSmallDevice ? 8 : isLargeDevice ? 12 : 10,
    };
    return base;
  };

  const getCartButtonSize = () => {
    if (isSmallDevice) return 40;
    if (isMediumDevice) return 44;
    return 48;
  };

  const headerPadding = getHeaderPadding();
  const cartButtonSize = getCartButtonSize();

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      >
        {/* Enhanced Header with Search, Cart, and Notifications */}
        <View style={[
          styles.header,
          {
            paddingTop: insets.top + headerPadding.vertical,
            paddingHorizontal: headerPadding.horizontal,
            paddingBottom: headerPadding.vertical,
          }
        ]}>
          {/* Welcome Text */}
          <View style={styles.welcomeContainer}>
            <Text style={[
              styles.welcomeText,
              { fontSize: isSmallDevice ? 14 : isLargeDevice ? 18 : 16 }
            ]}>
              Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening'}!
            </Text>
            <Text style={[
              styles.subtitle,
              { fontSize: isSmallDevice ? 22 : isLargeDevice ? 28 : 24 }
            ]}>
              Find your favorite products
            </Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.actionButton, { width: cartButtonSize, height: cartButtonSize }]}
              onPress={() => Alert.alert(
                'Notifications', 
                '🔔 Recent Notifications:\n\n📦 Your order #12346 is out for delivery\n\n💰 Flash Sale: 70% off Electronics!\n\n🎁 Welcome bonus: $10 off your next order\n\n📱 New arrivals in your favorite categories\n\n⭐ Rate your recent purchase',
                [
                  { text: 'Mark All Read', onPress: () => Alert.alert('All notifications marked as read!') },
                  { text: 'Settings', onPress: () => Alert.alert('Notification Settings', 'Configure your notification preferences in Profile > Settings') },
                  { text: 'OK' }
                ]
              )}
              activeOpacity={0.8}
            >
              <Bell size={isSmallDevice ? 18 : isLargeDevice ? 22 : 20} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, { width: cartButtonSize, height: cartButtonSize }]}
              onPress={() => router.push('/(tabs)/cart')}
              activeOpacity={0.8}
            >
              <ShoppingBag size={isSmallDevice ? 18 : isLargeDevice ? 22 : 20} color="#333" />
              {cartItems.length > 0 && (
                <View style={[
                  styles.cartBadge,
                  {
                    minWidth: isSmallDevice ? 18 : 20,
                    height: isSmallDevice ? 18 : 20,
                  }
                ]}>
                  <Text style={[
                    styles.cartBadgeText,
                    { fontSize: isSmallDevice ? 8 : 10 }
                  ]}>
                    {cartItems.length > 99 ? '99+' : cartItems.length}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Enhanced Search Bar */}
        <View style={[
          styles.searchSection,
          { paddingHorizontal: headerPadding.horizontal }
        ]}>
          <View style={[styles.searchBar, getSearchBarStyle()]}>
            <Search
              size={isSmallDevice ? 16 : isLargeDevice ? 22 : 20}
              color="#777"
            />
            <TextInput
              style={[
                styles.searchInput,
                { fontSize: isSmallDevice ? 12 : isLargeDevice ? 16 : 14 }
              ]}
              placeholder="Search for products, brands..."
              placeholderTextColor="#777"
              value={searchQuery}
              onChangeText={handleSearch}
              returnKeyType="search"
              onSubmitEditing={() => {
                if (searchQuery.trim().length > 0) {
                  handleSearch(searchQuery);
                }
              }}
              clearButtonMode="while-editing"
            />
          </View>
        </View>

        {/* Content Sections */}
        <View style={styles.content}>
          {/* Banner Carousel */}
          <BannerCarousel />

          {/* Popular Categories */}
          <CategorySection />

          {/* Flash Sell */}
          <FlashSellSection />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeContainer: {
    flex: 1,
    paddingRight: 16,
  },
  welcomeText: {
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Inter-Bold',
    color: '#1A1A1A',
    lineHeight: 28,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionButton: {
    borderRadius: 24,
    backgroundColor: '#F5F5F7',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  cartBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#FF4D67',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  cartBadgeText: {
    color: '#FFF',
    fontFamily: 'Inter-Bold',
  },
  searchSection: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontFamily: 'Inter-Regular',
    color: '#333',
    paddingVertical: 4,
  },
  content: {
    backgroundColor: '#F8F9FA',
  },
});
