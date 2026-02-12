import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';



const { width } = Dimensions.get('window');
export default function SupplierCard({ supplier }) {
    const isTablet = width > 600;

    return (
        <View style={[styles.card, { padding: isTablet ? 20 : 14 }]}>
            <View style={styles.row}>
                <View style={{ flex: 1 }}>
                    {supplier.status === 'DUE' ? (
                        <Text style={styles.dueTag}>{supplier.amount} DUE</Text>
                    ) : (
                        <Text style={styles.clearedTag}>CLEARED</Text>
                    )}

                    <Text style={styles.name}>{supplier.name}</Text>
                    <Text style={styles.meta}>
                        {supplier.skus} Active SKUs • Last order {supplier.lastOrder}
                    </Text>
                </View>

                <Image source={{ uri: supplier.image }} style={styles.image} />
            </View>

            <View style={styles.footer}>
                <View style={styles.actions}>
                    <View style={styles.iconCircle}>
                        <Ionicons name="call" size={16} color="#13ec80" />
                    </View>
                    <View style={styles.iconCircle}>
                        <Ionicons name="chatbox-ellipses" size={16} color="#13ec80" />
                    </View>
                    <View style={styles.iconCircle}>
                        <Ionicons name="mail" size={16} color="#13ec80" />
                    </View>

                </View>

                <TouchableOpacity style={styles.detailsBtn}>
                    <Text style={styles.detailsText}>View Details</Text>
                </TouchableOpacity>
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
    name: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
        marginVertical: 4,
    },
    meta: {
        color: colors.mutedText,
        fontSize: 11,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
    },
    actions: {
        flexDirection: 'row',
        gap: 8,
    },
    iconCircle: {
        width: 30,
        height: 30,
        backgroundColor: '#1A3A2D',
        borderRadius: 15,
        padding: 7
    },
    detailsBtn: {
        backgroundColor: colors.primary,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 8,
    },
    detailsText: {
        color: '#000',
        fontSize: 12,
        fontWeight: '600',
    },
    dueTag: {
        color: colors.red,
        fontSize: 10,
        paddingHorizontal: 7,
        paddingVertical: 3,
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        borderRadius: 3,
        alignSelf: "flex-start",

    },
    clearedTag: {
        color: colors.green,
        fontSize: 10,
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 3,

        backgroundColor: "rgba(0, 255, 0, 0.3)",
        alignSelf: "flex-start",
    },
});
