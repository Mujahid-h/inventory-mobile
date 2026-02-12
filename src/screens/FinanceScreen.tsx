import React from 'react';
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import LedgerHeader from '../components/FinanialHeader';
import MonthlySummaryCard from '../components/MonthlySummaryCard';
import TransactionItem from '../components/TransactionsItems';
import { transactions } from '../data/transactions';
import { colors } from '../theme/colors';

export function FinanceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LedgerHeader />

      <FlatList
        ListHeaderComponent={<MonthlySummaryCard />}
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
