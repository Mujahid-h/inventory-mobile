import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SalesChart from '../components/SalesChart';
import { QuickActions } from '../components/QuickActions';





export function HomeScreen() {

  const { width, height } = Dimensions.get('window');


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkY36XkesV2esKBb7ds9iQinTHYG9R8pOGqQ&s' }}
          style={styles.avatar}
        />
        <View>

          <Text style={styles.title}>Good Morning</Text>
          <Text style={styles.subtitle}>
            Mujahid Hussain
          </Text>
        </View>

      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.main}
      >
        <LinearGradient
          colors={[
            'rgba(19,236,128,0.35)',
            'rgba(15,169,104,0.15)',
            'rgba(16,34,25,0.9)',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}
        >
          {/* Top row */}
          <View style={styles.topRow}>
            <View style={styles.iconBox}>
              <Ionicons name="cube-outline" size={18} color="#13ec80" />
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>+4.2%</Text>
            </View>
          </View>

          {/* Content */}
          <Text style={styles.label}>TOTAL INVENTORY VALUE</Text>
          <Text style={styles.value}>$124,500.00</Text>

          {/* Progress bar */}
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </LinearGradient>

        <LinearGradient
          colors={[
            'rgba(248,113,113,0.35)',
            'rgba(59,40,33,0.85)',
            'rgba(248,113,113,0.15)',

          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}
        >
          {/* Top row */}
          <View style={styles.topRow}>
            <View style={[styles.iconBox, { backgroundColor: "rgba(248,113,113,0.35)" }]}>
              <Ionicons name="cube-outline" size={18} color="rgba(236, 31, 31, 0.7)" />
            </View>

            <View style={[styles.badge, { backgroundColor: "rgba(248,113,113,0.35)" }]}>
              <Text style={[styles.badgeText, { color: "rgba(236, 31, 31, 0.7)" }]}>+4.2%</Text>
            </View>
          </View>

          {/* Content */}
          <Text style={styles.label}>TOTAL INVENTORY VALUE</Text>
          <Text style={styles.value}>$124,500.00</Text>

          {/* Progress bar */}
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { backgroundColor: "rgb(248,113,113)" }]} />
          </View>
        </LinearGradient>




      </ScrollView>


      <SalesChart />
      <QuickActions />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#102219',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 12,
    color: '#9ea3b0',
  },
  header: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: '#13ec80'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50
  },
  main: {
    flexDirection: "row",
    gap: 10,
    overflow: "scroll"
  },
  box: {
    marginTop: 10,
    width: 300,
    borderColor: "#13ec80",
    borderWidth: 0.3,
    padding: 5,
    borderRadius: 10,
    height: 200,
  },
  card: {
    width: 280,
    height: 200,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-between',
    marginTop: 10

    // Glow
    // shadowColor: '#13ec80',
    // shadowOpacity: 0.35,
    // shadowRadius: 20,
    // elevation: 8,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(19,236,128,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  badge: {
    backgroundColor: 'rgba(19,236,128,0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    color: '#13ec80',
    fontSize: 20,
    fontWeight: '600',
  },

  label: {
    color: '#9ea3b0',
    fontSize: 14,
    letterSpacing: 0.6,
    // marginTop: 6,
  },

  value: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
  },

  progressTrack: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressFill: {
    width: '65%', // progress %
    height: '100%',
    backgroundColor: '#13ec80',
    borderRadius: 10,
  },
});

