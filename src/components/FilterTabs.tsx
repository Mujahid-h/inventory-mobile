import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

export default function FilterTabs() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.tab, styles.active]}>
                <Text style={[styles.text, { color: '#000' }]}>All Suppliers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
                <Text style={styles.text}>Balance Due</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
                <Text style={styles.text}>Active</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 15,
    },
    tab: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#1A3A2D',
        borderRadius: 20,
    },
    active: {
        backgroundColor: colors.primary,
    },
    text: {
        color: '#fff',
        fontSize: 12,
    },
});
