import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

export default function Header() {
    return (
        <View style={styles.container}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
            <Text style={styles.title}>Supplier Directory</Text>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add" size={18} color="#000" />
            </TouchableOpacity>
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
    addBtn: {
        backgroundColor: colors.primary,
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
