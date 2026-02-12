import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function QuickActions() {
    const { width, height } = Dimensions.get('window');

    return (
        <View style={qa.container}>
            <Text style={qa.heading}>Quick Actions</Text>

            <View style={qa.grid}>
                <ActionCard icon="add" label="Add Stock" color="#13ec80" />
                <ActionCard icon="people" label="New Supplier" color="#4da6ff" />
                <ActionCard icon="qr-code" label="Scan Invoice" color="#a855f7" />
                <ActionCard icon="bar-chart" label="Reports" color="#f59e0b" />
            </View>
        </View>
    );
}

function ActionCard({ icon, label, color }) {
    return (
        <TouchableOpacity style={qa.card}>
            <View style={[qa.iconBox, { backgroundColor: `${color}22` }]}>
                <Ionicons name={icon} size={20} color={color} />
            </View>
            <Text style={qa.label}>{label}</Text>
        </TouchableOpacity>
    );
}


const qa = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 40

    },
    heading: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    card: {
        width: '48%',
        height: "50%",
        backgroundColor: '#162b22',
        borderRadius: 14,
        padding: 16,
        alignItems: 'center',
        borderWidth: 0.3,
        // borderColor: '#13ec80',
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    label: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
});
