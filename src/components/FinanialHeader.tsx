import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

export default function LedgerHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Ionicons name="wallet-outline" size={20} color="#fff" />
                <Text style={styles.title}>Financial Ledger</Text>
            </View>

            <TouchableOpacity style={styles.exportBtn}>
                <Ionicons name="share-social-outline" size={16} color={colors.primary} />
                <Text style={styles.exportText}>Export</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    exportBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(19,236,128,0.1)',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        gap: 4,
    },
    exportText: {
        color: colors.primary,
        fontWeight: '600',
        fontSize: 12,
    },
});
