import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, Platform, Alert } from 'react-native';
import { Settings, CreditCard, Package, Heart, LogOut, ChevronRight, User, Edit } from 'lucide-react-native';
import { useAppContext } from '@/context/AppContext';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const { isSmallDevice, isMediumDevice, isLargeDevice, wishlistItems, cartItems } = useAppContext();
  
  // Responsive icon sizes
  const getIconSize = () => {
    if (isSmallDevice) return 18;
    if (isMediumDevice) return 20;
    return 22;
  };

  const iconSize = getIconSize();

  // Handle profile option navigation
  const handleProfileOptionPress = (option: string) => {
    switch (option) {
      case 'My Orders':
        Alert.alert(
          'My Orders',
          'View your order history and track current orders.',
          [
            { text: 'View Demo Orders', onPress: () => showDemoOrders() },
            { text: 'Cancel', style: 'cancel' }
          ]
        );
        break;
      case 'Payment Methods':
        Alert.alert(
          'Payment Methods',
          'Manage your payment methods and billing information.',
          [
            { text: 'Add Payment Method', onPress: () => showPaymentMethods() },
            { text: 'Cancel', style: 'cancel' }
          ]
        );
        break;
      case 'My Wishlist':
        router.push('/(tabs)/wishlist');
        break;
      case 'Settings':
        Alert.alert(
          'Settings',
          'Configure your app preferences and account settings.',
          [
            { text: 'Open Settings', onPress: () => showSettings() },
            { text: 'Cancel', style: 'cancel' }
          ]
        );
        break;
      case 'Logout':
        Alert.alert(
          'Logout',
          'Are you sure you want to logout?',
          [
            { text: 'Logout', style: 'destructive', onPress: () => handleLogout() },
            { text: 'Cancel', style: 'cancel' }
          ]
        );
        break;
      default:
        break;
    }
  };

  const handleEditProfile = () => {
    Alert.alert(
      'Edit Profile',
      'Update your profile information and preferences.',
      [
        { text: 'Edit Profile', onPress: () => showEditProfile() },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };
  const showDemoOrders = () => {
    Alert.alert(
      'My Orders',
      'Demo Order History:\n\n📦 Order #12345\n• iPhone 15 Pro - $999.99\n• Status: Delivered\n• Date: Dec 5, 2024\n\n📦 Order #12346\n• Wireless Headphones - $249.99\n• Status: In Transit\n• Date: Dec 8, 2024\n\n📦 Order #12347\n• Premium T-Shirt - $29.99\n• Status: Processing\n• Date: Dec 10, 2024',
      [
        { text: 'Track Orders', onPress: () => Alert.alert('Order Tracking', 'Demo: Track your orders in real-time with push notifications and detailed status updates.') },
        { text: 'OK' }
      ]
    );
  };

  const showPaymentMethods = () => {
    Alert.alert(
      'Payment Methods',
      'Demo Payment Methods:\n\n💳 Visa ending in 1234\n• Expires: 12/27\n• Primary method\n\n💳 Mastercard ending in 5678\n• Expires: 08/26\n\n📱 PayPal Account\n• john.doe@email.com\n\n🍎 Apple Pay\n• Touch/Face ID enabled',
      [
        { text: 'Add New Card', onPress: () => Alert.alert('Add Payment Method', 'Demo: Add a new credit card, debit card, or link your PayPal account.') },
        { text: 'Manage', onPress: () => Alert.alert('Manage Cards', 'Demo: Edit, remove, or set default payment methods.') },
        { text: 'OK' }
      ]
    );
  };

  const showSettings = () => {
    Alert.alert(
      'Settings',
      'Demo App Settings:\n\n🔔 Notifications\n• Push notifications: ON\n• Email updates: ON\n• SMS alerts: OFF\n\n🌍 Language & Region\n• Language: English\n• Currency: USD\n• Time zone: EST\n\n🎨 Appearance\n• Theme: Auto (System)\n• Dark mode: Auto\n\n🔒 Privacy & Security\n• Two-factor auth: ON\n• Biometric login: ON',
      [
        { text: 'Notification Settings', onPress: () => Alert.alert('Notifications', 'Demo: Configure push notifications, email alerts, and SMS preferences.') },
        { text: 'Privacy Settings', onPress: () => Alert.alert('Privacy', 'Demo: Manage data sharing, cookies, and account privacy settings.') },
        { text: 'OK' }
      ]
    );
  };
  const showEditProfile = () => {
    Alert.alert(
      'Edit Profile',
      'Demo Profile Editor:\n\n👤 Personal Information\n• Full Name: John Doe\n• Email: john.doe@email.com\n• Phone: +1 (555) 123-4567\n• Birthday: January 15, 1990\n\n📍 Address Information\n• Home: 123 Main St, NYC\n• Work: 456 Business Ave, NYC\n\n🔒 Account Security\n• Password: ••••••••\n• Two-factor auth: Enabled',
      [
        { text: 'Change Photo', onPress: () => Alert.alert('Change Photo', 'Demo: Upload a new profile picture from camera or gallery.') },
        { text: 'Update Info', onPress: () => Alert.alert('Update Profile', 'Demo: Modify your personal information and contact details.') },
        { text: 'Security', onPress: () => Alert.alert('Security Settings', 'Demo: Change password, manage two-factor authentication, and review login activity.') },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out? You will need to sign in again to access your account.',
      [
        { 
          text: 'Cancel', 
          style: 'cancel' 
        },
        { 
          text: 'Logout', 
          style: 'destructive', 
          onPress: () => {
            Alert.alert(
              'Logged Out Successfully',
              'You have been securely logged out. Thank you for using our app!',
              [{ text: 'OK' }]
            );
          }
        }
      ]
    );
  };

  const profileOptions = [
    { 
      title: 'My Orders',
      icon: <Package size={iconSize} color="#333" />,
      subtitle: 'Track, return, or buy things again',
      onPress: () => handleProfileOptionPress('My Orders')
    },
    { 
      title: 'Payment Methods',
      icon: <CreditCard size={iconSize} color="#333" />,
      subtitle: 'Add or remove payment methods',
      onPress: () => handleProfileOptionPress('Payment Methods')
    },
    { 
      title: 'My Wishlist',
      icon: <Heart size={iconSize} color="#333" />,
      subtitle: 'Your saved products',
      onPress: () => handleProfileOptionPress('My Wishlist'),
      badge: wishlistItems.length > 0 ? wishlistItems.length.toString() : undefined
    },
    { 
      title: 'Settings',
      icon: <Settings size={iconSize} color="#333" />,
      subtitle: 'Notifications, password, language',
      onPress: () => handleProfileOptionPress('Settings')
    },
    { 
      title: 'Logout',
      icon: <LogOut size={iconSize} color="#EA4335" />,
      subtitle: 'Log out from your account',
      isDanger: true,
      onPress: () => handleProfileOptionPress('Logout')
    },
  ];

  // Responsive styling
  const getResponsiveStyles = () => {
    const padding = isSmallDevice ? 12 : isMediumDevice ? 16 : 20;
    const profileImageSize = isSmallDevice ? 48 : isMediumDevice ? 56 : 64;
    const optionIconSize = isSmallDevice ? 32 : isMediumDevice ? 36 : 40;
    
    return {
      padding,
      profileImageSize,
      optionIconSize,
    };
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Profile Header */}
        <View style={[
          styles.header,
          { 
            paddingHorizontal: responsiveStyles.padding,
            paddingVertical: isSmallDevice ? 16 : isMediumDevice ? 20 : 24 
          }
        ]}>
          <View style={styles.profileSection}>
            <View style={[
              styles.profileImageContainer,
              {
                width: responsiveStyles.profileImageSize,
                height: responsiveStyles.profileImageSize,
                borderRadius: responsiveStyles.profileImageSize / 2,
              }
            ]}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }} 
                style={[
                  styles.profileImage,
                  {
                    width: responsiveStyles.profileImageSize,
                    height: responsiveStyles.profileImageSize,
                    borderRadius: responsiveStyles.profileImageSize / 2,
                  }
                ]} 
              />
            </View>
            
            <View style={[
              styles.profileInfo,
              { marginLeft: isSmallDevice ? 12 : 16 }
            ]}>
              <Text style={[
                styles.profileName,
                { fontSize: isSmallDevice ? 16 : isMediumDevice ? 18 : 20 }
              ]}>
                John Doe
              </Text>
              <Text style={[
                styles.profileEmail,
                { fontSize: isSmallDevice ? 12 : isMediumDevice ? 13 : 14 }
              ]}>
                johndoe@example.com
              </Text>
              <View style={styles.membershipBadge}>
                <Text style={[
                  styles.membershipText,
                  { fontSize: isSmallDevice ? 10 : 11 }
                ]}>
                  Premium Member
                </Text>
              </View>
            </View>
            
            <TouchableOpacity 
              style={[
                styles.editButton,
                {
                  paddingVertical: isSmallDevice ? 6 : 8,
                  paddingHorizontal: isSmallDevice ? 10 : 12,
                  borderRadius: isSmallDevice ? 6 : 8,
                }
              ]}
              onPress={handleEditProfile}
              activeOpacity={0.8}
            >
              <Text style={[
                styles.editButtonText,
                { fontSize: isSmallDevice ? 12 : 13 }
              ]}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Options */}
        <View style={[
          styles.optionsContainer,
          { 
            marginHorizontal: responsiveStyles.padding,
            borderRadius: isSmallDevice ? 8 : 12 
          }
        ]}>
          {profileOptions.map((option, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.optionItem,
                {
                  paddingVertical: isSmallDevice ? 12 : isMediumDevice ? 14 : 16,
                  paddingHorizontal: responsiveStyles.padding,
                },
                index === profileOptions.length - 1 && styles.lastOptionItem
              ]}
              onPress={option.onPress}
              activeOpacity={0.8}
            >
              <View style={[
                styles.optionIconContainer,
                {
                  width: responsiveStyles.optionIconSize,
                  height: responsiveStyles.optionIconSize,
                  borderRadius: responsiveStyles.optionIconSize / 2,
                  marginRight: isSmallDevice ? 10 : 12,
                }
              ]}>
                {option.icon}
              </View>
              
              <View style={styles.optionContent}>
                <Text style={[
                  styles.optionTitle, 
                  { 
                    fontSize: isSmallDevice ? 14 : isMediumDevice ? 15 : 16,
                    marginBottom: isSmallDevice ? 2 : 4,
                  },
                  option.isDanger && styles.dangerText
                ]}>
                  {option.title}
                </Text>
                <Text style={[
                  styles.optionSubtitle,
                  { 
                    fontSize: isSmallDevice ? 11 : isMediumDevice ? 12 : 13,
                    lineHeight: isSmallDevice ? 14 : 16,
                  }
                ]}>
                  {option.subtitle}
                </Text>
              </View>
              
              {!option.isDanger && (
                <ChevronRight 
                  size={isSmallDevice ? 16 : 18} 
                  color="#999" 
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Stats Section */}
        <View style={[
          styles.statsContainer,
          { 
            marginHorizontal: responsiveStyles.padding,
            borderRadius: isSmallDevice ? 8 : 12,
            paddingVertical: isSmallDevice ? 16 : 20,
          }
        ]}>
          <Text style={[
            styles.statsTitle,
            { 
              fontSize: isSmallDevice ? 15 : isMediumDevice ? 16 : 18,
              marginBottom: isSmallDevice ? 12 : 16,
            }
          ]}>
            Your Activity
          </Text>
          
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={[
                styles.statNumber,
                { fontSize: isSmallDevice ? 18 : isMediumDevice ? 20 : 22 }
              ]}>
                12
              </Text>
              <Text style={[
                styles.statLabel,
                { fontSize: isSmallDevice ? 11 : 12 }
              ]}>
                Orders
              </Text>
            </View>
            
            <View style={styles.statItem}>
              <Text style={[
                styles.statNumber,
                { fontSize: isSmallDevice ? 18 : isMediumDevice ? 20 : 22 }
              ]}>
                8
              </Text>
              <Text style={[
                styles.statLabel,
                { fontSize: isSmallDevice ? 11 : 12 }
              ]}>
                Wishlist
              </Text>
            </View>
            
            <View style={styles.statItem}>
              <Text style={[
                styles.statNumber,
                { fontSize: isSmallDevice ? 18 : isMediumDevice ? 20 : 22 }
              ]}>
                24
              </Text>
              <Text style={[
                styles.statLabel,
                { fontSize: isSmallDevice ? 11 : 12 }
              ]}>
                Reviews
              </Text>
            </View>
          </View>
        </View>

        {/* App Version */}
        <View style={[
          styles.versionContainer,
          { paddingVertical: isSmallDevice ? 16 : 20 }
        ]}>
          <Text style={[
            styles.versionText,
            { fontSize: isSmallDevice ? 12 : 13 }
          ]}>
            App Version 1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  header: {
    backgroundColor: '#FFF',
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  profileImage: {
    resizeMode: 'cover',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    marginBottom: 4,
  },
  profileEmail: {
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginBottom: 6,
  },
  membershipBadge: {
    backgroundColor: '#4B7BF5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  membershipText: {
    fontFamily: 'Inter-Medium',
    color: '#FFF',
  },
  editButton: {
    borderWidth: 1,
    borderColor: '#4B7BF5',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 32,
  },
  editButtonText: {
    fontFamily: 'Inter-Medium',
    color: '#4B7BF5',
  },
  optionsContainer: {
    backgroundColor: '#FFF',
    marginBottom: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F2',
    minHeight: 56,
  },
  lastOptionItem: {
    borderBottomWidth: 0,
  },
  optionIconContainer: {
    backgroundColor: '#F5F5F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontFamily: 'Inter-Medium',
    color: '#333',
  },
  optionSubtitle: {
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  dangerText: {
    color: '#EA4335',
  },
  statsContainer: {
    backgroundColor: '#FFF',
    marginBottom: 16,
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  statsTitle: {
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontFamily: 'Inter-Bold',
    color: '#4B7BF5',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    color: '#666',
    textAlign: 'center',
  },
  versionContainer: {
    alignItems: 'center',
  },
  versionText: {
    fontFamily: 'Inter-Regular',
    color: '#999',
  },
});
