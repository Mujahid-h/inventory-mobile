import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

export default function TransactionItem({ item }) {
    const isPending = item.status === 'PENDING';

    return (
        <View style={styles.container}>
            <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={20} color="#fff" />
            </View>

            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.meta}>
                    {item.date} • {item.category}
                </Text>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.amount}>{item.amount}</Text>
                <View style={[
                    styles.badge,
                    { backgroundColor: isPending ? 'rgba(245,158,11,0.2)' : 'rgba(19,236,128,0.2)' }
                ]}>
                    <Text style={{
                        color: isPending ? colors.pending : colors.primary,
                        fontSize: 10,
                        fontWeight: '700'
                    }}>
                        {item.status}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
    },
    iconBox: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#283930',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    title: {
        color: '#fff',
        fontWeight: '700',
    },
    meta: {
        fontSize: 11,
        color: colors.textMuted,
    },
    amount: {
        color: '#fff',
        fontWeight: '700',
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 20,
        marginTop: 4,
    },
});
