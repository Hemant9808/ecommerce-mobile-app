import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import SectionHeader from '@/components/common/SectionHeader';

export default function CategorySection() {
  const categories = [
    {
      id: 'home',
      name: 'Home',
      icon: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    },
    {
      id: 'kitchen',
      name: 'Kitchen',
      icon: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
    },
    {
      id: 'watch',
      name: 'Watch',
      icon: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    },
    {
      id: 'bags',
      name: 'Bags',
      icon: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg',
    },
    {
      id: 'music',
      name: 'Music',
      icon: 'https://images.pexels.com/photos/3944093/pexels-photo-3944093.jpeg',
    },
    {
      id: 'travel',
      name: 'Travel',
      icon: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg',
    },
    {
      id: 'beauty',
      name: 'Beauty',
      icon: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg',
    },
  ];

  return (
    <View style={styles.container}>
      <SectionHeader title="Popular Categories" actionLabel="See all" />
      
      <View style={styles.gridContainer}>
        {categories.slice(0, 4).map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <View style={styles.iconContainer}>
              <Image source={{ uri: category.icon }} style={styles.categoryIcon} />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.gridContainer}>
        {categories.slice(4, 8).map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <View style={styles.iconContainer}>
              <Image source={{ uri: category.icon }} style={styles.categoryIcon} />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryItem: {
    width: '22%',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    overflow: 'hidden',
  },
  categoryIcon: {
    width: 60,
    height: 60,
  },
  categoryName: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});