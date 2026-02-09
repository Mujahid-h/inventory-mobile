import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function FinanceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finance</Text>
      <Text style={styles.subtitle}>
        Monitor sales, costs, and other financial data here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
    backgroundColor: '#05090a',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#9ea3b0',
  },
});

