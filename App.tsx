import React from 'react';
import {useColorScheme} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import colors from 'assets/colors';
import {ChatIcon, HomeIcon, SettingIcon} from 'components/icons';
import ChatScreen from 'screens/chat';
import HomeScreen from 'screens/home';
import SettingsScreen from 'screens/settings';
import {ScreenNames} from 'types/common.types';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isDarkMode: boolean = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        initialRouteName={ScreenNames.Home}
        screenOptions={{
          tabBarActiveTintColor: colors.light.primary,
          tabBarInactiveTintColor: 'black',
        }}>
        <Tab.Screen
          name={ScreenNames.Home}
          options={{headerShown: false, tabBarIcon: HomeIcon}}
          component={HomeScreen}
        />
        <Tab.Screen
          name={ScreenNames.Chat}
          options={{headerShown: false, tabBarIcon: ChatIcon}}
          component={ChatScreen}
        />
        <Tab.Screen
          name={ScreenNames.Settings}
          options={{headerShown: false, tabBarIcon: SettingIcon}}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
