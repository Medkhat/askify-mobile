import React from 'react';
import {useTranslation} from 'react-i18next';
import {SheetProvider} from 'react-native-actions-sheet';
import {CogIcon, HomeIcon} from 'react-native-heroicons/outline';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {useColorScheme} from 'nativewind';

import colors from '@/assets/colors';
import '@/i18n';
import HomeScreen from '@/screens/home/home.screen';
import SettingsScreen from '@/screens/settings/settings.screen';
import '@/sheets';
import {ScreenNames} from '@/types/common.types';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const {colorScheme} = useColorScheme();
  const isDarkMode: boolean = colorScheme === 'dark';
  const {t} = useTranslation();
  return (
    <SheetProvider>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <Tab.Navigator
          initialRouteName={ScreenNames.Home}
          screenOptions={{
            tabBarActiveTintColor: colors.light.primary,
            tabBarInactiveTintColor: isDarkMode ? '#fff' : '#000',
            headerTitleAlign: 'left',
            headerStyle: {
              backgroundColor: isDarkMode ? '#18181b' : '#eeeeee',
              borderBottomWidth: 0,
            },
            headerShadowVisible: false,
          }}>
          <Tab.Screen
            name={ScreenNames.Home}
            options={{
              headerTitle: t('home'),
              title: t('home'),
              tabBarIcon: HomeIcon,
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name={ScreenNames.Settings}
            options={{
              headerTitle: t('settings'),
              title: t('settings'),
              tabBarIcon: CogIcon,
            }}
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SheetProvider>
  );
}

export default App;
