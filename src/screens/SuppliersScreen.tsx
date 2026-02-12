import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Header from '../components/SupplierHeader';
import SearchBar from '../components/SearchBar';
import FilterTabs from '../components/FilterTabs';
import SupplierCard from '../components/SupplierCard';
import { suppliers } from '../data/suppliers';
import { colors } from '../theme/colors';

export function SuppliersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <FilterTabs />

      <FlatList
        data={suppliers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SupplierCard supplier={item} />}
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
