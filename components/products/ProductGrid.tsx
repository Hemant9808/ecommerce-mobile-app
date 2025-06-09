import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';
import { useAppContext } from '@/context/AppContext';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { isLargeDevice } = useAppContext();
  const numColumns = isLargeDevice ? 3 : 2;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={numColumns}
        columnWrapperStyle={styles.columnWrapper}
        scrollEnabled={false}
        contentContainerStyle={styles.gridContent}
      />
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: '100%',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  gridContent: {
    paddingBottom: 8,
  },
});