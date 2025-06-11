import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Settings, CreditCard, Package, Heart, LogOut, ChevronRight } from 'lucide-react-native';
import { useAppContext } from '@/context/AppContext';

export default function ProfileScreen() {
  const { isSmallDevice, isMediumDevice } = useAppContext();
  const profileOptions = [
    { 
      title: 'My Orders',
      icon: <Package size={isSmallDevice ? 18 : 20} color="#333" />,
      subtitle: 'Track, return, or buy things again'
    },
    { 
      title: 'Payment Methods',
      icon: <CreditCard size={isSmallDevice ? 18 : 20} color="#333" />,
      subtitle: 'Add or remove payment methods'
    },
    { 
      title: 'My Wishlist',
      icon: <Heart size={isSmallDevice ? 18 : 20} color="#333" />,
      subtitle: 'Your saved products'
    },
    { 
      title: 'Settings',
      icon: <Settings size={isSmallDevice ? 18 : 20} color="#333" />,
      subtitle: 'Notifications, password, language'
    },
    { 
      title: 'Logout',
      icon: <LogOut size={isSmallDevice ? 18 : 20} color="#EA4335" />,
      subtitle: 'Log out from your account',
      isDanger: true
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Profile Header */}
        <View style={[
          styles.header,
          isSmallDevice && styles.headerSmall
        ]}>
          <View style={styles.profileSection}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }} 
              style={[
                styles.profileImage,
                isSmallDevice && styles.profileImageSmall
              ]} 
            />
            <View style={styles.profileInfo}>
              <Text style={[
                styles.profileName,
                isSmallDevice && styles.profileNameSmall
              ]}>John Doe</Text>
              <Text style={[
                styles.profileEmail,
                isSmallDevice && styles.profileEmailSmall
              ]}>johndoe@example.com</Text>
            </View>
            <TouchableOpacity style={[
              styles.editButton,
              isSmallDevice && styles.editButtonSmall
            ]}>
              <Text style={[
                styles.editButtonText,
                isSmallDevice && styles.editButtonTextSmall
              ]}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Options */}
        <View style={[
          styles.optionsContainer,
          isSmallDevice && styles.optionsContainerSmall
        ]}>
          {profileOptions.map((option, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.optionItem,
                isSmallDevice && styles.optionItemSmall,
                index === profileOptions.length - 1 && styles.lastOptionItem
              ]}
            >
              <View style={[
                styles.optionIconContainer,
                isSmallDevice && styles.optionIconContainerSmall
              ]}>{option.icon}</View>
              <View style={styles.optionContent}>
                <Text style={[
                  styles.optionTitle, 
                  isSmallDevice && styles.optionTitleSmall,
                  option.isDanger && styles.dangerText
                ]}>
                  {option.title}
                </Text>
                <Text style={[
                  styles.optionSubtitle,
                  isSmallDevice && styles.optionSubtitleSmall
                ]}>{option.subtitle}</Text>
              </View>
              {!option.isDanger && <ChevronRight size={isSmallDevice ? 18 : 20} color="#999" />}
            </TouchableOpacity>
          ))}
        </View>

        {/* App Version */}
        <View style={[
          styles.versionContainer,
          isSmallDevice && styles.versionContainerSmall
        ]}>
          <Text style={[
            styles.versionText,
            isSmallDevice && styles.versionTextSmall
          ]}>App Version 1.0.0</Text>
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
  header: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 16,
  },
  headerSmall: {
    paddingVertical: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  profileImageSmall: {
    width: 48,
    height: 48,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  profileNameSmall: {
    fontSize: 16,
  },
  profileEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
  },
  profileEmailSmall: {
    fontSize: 12,
  },
  editButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4B7BF5',
  },
  editButtonSmall: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  editButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#4B7BF5',
  },
  editButtonTextSmall: {
    fontSize: 12,
  },
  optionsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  optionsContainerSmall: {
    borderRadius: 8,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionItemSmall: {
    paddingVertical: 12,
  },
  lastOptionItem: {
    borderBottomWidth: 0,
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  optionIconContainerSmall: {
    width: 32,
    height: 32,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
  optionTitleSmall: {
    fontSize: 14,
  },
  optionSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#666',
  },
  optionSubtitleSmall: {
    fontSize: 12,
  },
  dangerText: {
    color: '#EA4335',
  },
  versionContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  versionContainerSmall: {
    paddingVertical: 16,
  },
  versionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#999',
  },
  versionTextSmall: {
    fontSize: 12,
  },
});