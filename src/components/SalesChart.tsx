import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default function SalesChart() {
    const sales = [20, 35, 28, 40, 32, 50];
    const expenses = [15, 20, 18, 25, 22, 30];
    const { width, height } = Dimensions.get('window');


    return (
        <View style={styles.card}>
            {/* Header */}
            <View style={styles.row}>
                <View>
                    <Text style={styles.cardTitle}>Sales vs Expenses</Text>
                    <Text style={styles.cardSubtitle}>Jan - Jun Performance Overview</Text>
                </View>

                <View>
                    <Text style={styles.amount}>$65,000</Text>
                    <Text style={styles.netGain}>NET GAIN</Text>
                </View>
            </View>

            {/* Chart */}
            <LineChart
                style={{ height: 120, marginTop: 10 }}
                data={sales}
                svg={{ stroke: '#13ec80', strokeWidth: 2 }}
                contentInset={{ top: 20, bottom: 20 }}
                curve={shape.curveNatural}
            >
                <Grid svg={{ stroke: 'rgba(255,255,255,0.1)' }} />
            </LineChart>

            {/* Months */}
            <View style={styles.months}>
                {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'].map(m => (
                    <Text key={m} style={styles.month}>{m}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#162b22',
        borderRadius: 16,
        padding: 16,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#13ec80',
        height: "40%",
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardTitle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },
    cardSubtitle: {
        color: '#9ea3b0',
        fontSize: 11,
    },
    amount: {
        color: '#13ec80',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'right',
    },
    netGain: {
        color: '#13ec80',
        fontSize: 10,
        textAlign: 'right',
    },
    months: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    month: {
        fontSize: 10,
        color: '#9ea3b0',
    },
});

