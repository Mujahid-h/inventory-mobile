import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function SuppliersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suppliers</Text>
      <Text style={styles.subtitle}>
        Track suppliers, contacts, and purchase orders here.
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

