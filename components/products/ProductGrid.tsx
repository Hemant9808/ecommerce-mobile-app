import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';
import { useAppContext } from '@/context/AppContext';

interface ProductGridProps {
  products: Product[];
  viewMode?: 'grid' | 'list';
}

export default function ProductGrid({ products, viewMode = 'grid' }: ProductGridProps) {
  const { isSmallDevice, isMediumDevice, isLargeDevice } = useAppContext();
  
  // Responsive column calculation
  const getNumColumns = () => {
    if (viewMode === 'list') return 1;
    if (isSmallDevice) return 2;
    if (isMediumDevice) return 2;
    return 3; // Large devices
  };

  const numColumns = getNumColumns();

  const renderItem = ({ item, index }: { item: Product; index: number }) => (
    <ProductCard
      product={item}
      viewMode={viewMode}
      isLast={viewMode === 'list' && index === products.length - 1}
    />
  );

  const getItemLayout = (_: any, index: number) => {
    if (viewMode === 'list') {
      const itemHeight = isSmallDevice ? 120 : isLargeDevice ? 140 : 130;
      return {
        length: itemHeight,
        offset: itemHeight * index,
        index,
      };
    }
    return { length: 0, offset: 0, index };
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={numColumns}
        key={`${viewMode}-${numColumns}`} // Re-render when view mode or columns change
        columnWrapperStyle={viewMode === 'grid' && numColumns > 1 ? styles.columnWrapper : undefined}
        scrollEnabled={false}
        contentContainerStyle={[
          styles.gridContent,
          viewMode === 'list' && styles.listContent
        ]}
        showsVerticalScrollIndicator={false}
        getItemLayout={viewMode === 'list' ? getItemLayout : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  gridContent: {
    paddingBottom: 8,
  },
  listContent: {
    paddingBottom: 8,
  },
});