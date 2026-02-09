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

export type RootStackParamList = {
  Signup: undefined;
  MainTabs: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Stock: undefined;
  Suppliers: undefined;
  Finance: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const ACTIVE_COLOR = '#102118';
const INACTIVE_COLOR = '#9ea3b0';

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarLabel: ({ focused, color }) => (
          <Text
            style={{
              color,
              fontSize: 11,
              fontWeight: focused ? '700' : '400',
            }}>
            {/* <MaterialIcons name={route.name} size={24} color={color} /> */}
            {route.name}
          </Text>
        ),
        tabBarStyle: {
          borderTopColor: 'rgba(0,0,0,0.08)',
          borderTopWidth: 0.5,
          height: 56,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stock" component={StockScreen} />
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

