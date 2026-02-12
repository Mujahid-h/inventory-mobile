import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function InventoryHeader() {
    return (
        <View style={styles.container}>
            <Ionicons name="menu" size={22} color="#fff" />
            <Text style={styles.title}>InventoryCatalog</Text>
            <Ionicons name="options-outline" size={22} color="#fff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
});
