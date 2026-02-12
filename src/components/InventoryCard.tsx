import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { colors } from '../theme/colors';

const { width } = Dimensions.get('window');

export default function InventoryCard({ item }) {
    const isTablet = width > 600;

    const isLow = item.status === 'LOW_STOCK';

    return (
        <View style={[styles.card, { padding: isTablet ? 20 : 14 }]}>
            <View style={styles.row}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.status, { color: isLow ? colors.lowStock : colors.inStock }]}>
                        {isLow ? 'LOW STOCK' : 'IN STOCK'}
                    </Text>

                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.meta}>
                        {item.sku} • {item.supplier}
                    </Text>

                    <View style={[styles.unitsBadge, { backgroundColor: isLow ? '#3A2616' : '#143C2D' }]}>
                        <Text style={[styles.unitsText, { color: isLow ? colors.lowStock : colors.inStock }]}>
                            {item.units} Units
                        </Text>
                    </View>
                </View>

                <Image source={{ uri: item.image }} style={styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card,
        borderRadius: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: colors.border,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    status: {
        fontSize: 10,
        fontWeight: '700',
    },
    name: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
        marginVertical: 4,
    },
    meta: {
        color: colors.green,
        fontSize: 11,
    },
    unitsBadge: {
        marginTop: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    unitsText: {
        fontSize: 11,
        fontWeight: '600',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
});
