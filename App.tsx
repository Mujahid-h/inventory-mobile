/**
 * Root of the app.
 * Shows Signup first, then bottom tabs (Home, Stock, Suppliers, Finance).
 */

import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import BootSplash from 'react-native-bootsplash';
import { RootNavigator } from './src/navigation/RootNavigator';

enableScreens();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks (e.g. load user, config, etc.)
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      // BootSplash has been hidden
    });
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#05090a"
      />
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
