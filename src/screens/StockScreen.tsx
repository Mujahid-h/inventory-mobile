import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import InventoryHeader from '../components/InventoryHeader';
import InventorySearchBar from '../components/SearchBar';
import InventoryFilters from '../components/FilterTabs';
import InventoryCard from '../components/InventoryCard';
import { inventoryData } from '../data/inventory';
import { colors } from '../theme/colors';

export function StockScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <InventoryHeader />
      <InventorySearchBar />
      <InventoryFilters />

      <FlatList
        data={inventoryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <InventoryCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
});
