import React, {useLayoutEffect} from 'react';
import {SheetProvider} from 'react-native-actions-sheet';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import useDarkMode from '@/core/hooks/dark-mode';
import {useAuthState} from '@/core/store';
import {mmkvStorage} from '@/core/store/mmkv';
import {StorageKeys} from '@/core/types/common.types';
import '@/i18n';
import AppTabs from '@/screens';
import LoginScreen from '@/screens/auth/login.screen';
import '@/sheets';

function App(): JSX.Element {
  const isDarkMode = useDarkMode();
  const userToken = useAuthState(state => state.userData.access);
  const setData = useAuthState(state => state.setData);

  useLayoutEffect(() => {
    if (mmkvStorage.contains(StorageKeys.user)) {
      setData(JSON.parse(mmkvStorage.getString(StorageKeys.user) as string));
    }
  }, []);

  return (
    <SheetProvider>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        {userToken ? <AppTabs /> : <LoginScreen />}
      </NavigationContainer>
    </SheetProvider>
  );
}

export default App;
