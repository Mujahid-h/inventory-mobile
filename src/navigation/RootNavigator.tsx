import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { SignupScreen } from '../screens/SignupScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { StockScreen } from '../screens/StockScreen';
import { SuppliersScreen } from '../screens/SuppliersScreen';
import { FinanceScreen } from '../screens/FinanceScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

export type RootStackParamList = {
  Signup: undefined;
  MainTabs: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Stocks: undefined;
  Suppliers: undefined;
  Finance: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const ACTIVE_COLOR = '#13ec80';
const INACTIVE_COLOR = '#9ea3b0';

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: '#102219',
          height: 45,
          borderBottomWidth: 0.3,
          borderBottomColor: '#13ec80',
          color: "#13ec80"
        },
        headerTintColor: '#13ec80',
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Stocks') iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          else if (route.name === 'Suppliers') iconName = focused ? 'people' : 'people-outline';
          else if (route.name === 'Finance') iconName = focused ? 'wallet' : 'wallet-outline';
          else if (route.name === 'Add') iconName = 'add';

          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => (
          <Text
            style={{
              color,
              fontSize: 11,
              fontWeight: focused ? '700' : '400',
            }}>
            {route.name}
          </Text>
        ),
        tabBarStyle: {
          borderTopColor: '#13ec80',
          backgroundColor: "#102219",
          borderTopWidth: 2,
          height: 60,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stocks" component={StockScreen} />
      <Tab.Screen name="Suppliers" component={SuppliersScreen} />
      <Tab.Screen name="Finance" component={FinanceScreen} />
    </Tab.Navigator>
  );
}

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

