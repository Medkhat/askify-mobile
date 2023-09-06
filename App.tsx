import React from 'react';
import {SheetProvider} from 'react-native-actions-sheet';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import useDarkMode from '@/hooks/dark-mode';
import '@/i18n';
import AppTabs from '@/screens';
import LoginScreen from '@/screens/auth/login.screen';
import '@/sheets';

function App(): JSX.Element {
  const isDarkMode = useDarkMode();
  const isLoggedIn = false;
  return (
    <SheetProvider>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        {isLoggedIn ? <AppTabs /> : <LoginScreen />}
      </NavigationContainer>
    </SheetProvider>
  );
}

export default App;
