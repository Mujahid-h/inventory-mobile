import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={18} color={colors.mutedText} />
            <TextInput
                placeholder="Search by name or SKU"
                placeholderTextColor={colors.mutedText}
                style={styles.input}
            />
            <Ionicons name="options" size={18} color="#fff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1A3A2D',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 15,
    },
    input: {
        flex: 1,
        marginHorizontal: 8,
        color: '#fff',
    },
});
