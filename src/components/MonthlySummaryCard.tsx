import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function MonthlySummaryCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.heading}>October Summary</Text>

            <Text style={styles.netLabel}>Net Profit</Text>
            <View style={styles.netRow}>
                <Text style={styles.netAmount}>$16,750</Text>
                <Text style={styles.trend}>↑ 18%</Text>
            </View>

            <View style={styles.statsRow}>
                <View>
                    <Text style={styles.smallLabel}>Income</Text>
                    <Text style={styles.amount}>$45,200</Text>
                    <Text style={styles.green}>+12%</Text>
                </View>

                <View>
                    <Text style={styles.smallLabel}>Expenses</Text>
                    <Text style={styles.amount}>$28,450</Text>
                    <Text style={styles.orange}>-5%</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card,
        margin: 16,
        padding: 18,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.border,
    },
    heading: {
        color: colors.textMuted,
        fontSize: 12,
        marginBottom: 16,
    },
    netLabel: {
        color: colors.textMuted,
        fontSize: 13,
    },
    netRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 8,
    },
    netAmount: {
        fontSize: 32,
        fontWeight: '800',
        color: colors.primary,
    },
    trend: {
        color: colors.primary,
        fontWeight: '700',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    smallLabel: {
        fontSize: 11,
        color: colors.textMuted,
    },
    amount: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
    },
    green: {
        color: colors.primary,
        fontSize: 12,
    },
    orange: {
        color: colors.pending,
        fontSize: 12,
    },
});
