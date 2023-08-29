import React from 'react';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  CogIcon,
  HomeIcon,
} from 'react-native-heroicons/outline';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import colors from 'assets/colors';
import {useColorScheme} from 'nativewind';
import ChatScreen from 'screens/chat/chat.screen';
import HomeHeaderLeft from 'screens/home/home-header-left';
import HomeScreen from 'screens/home/home.screen';
import SettingsScreen from 'screens/settings/settings.screen';
import {ScreenNames} from 'types/common.types';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const {colorScheme} = useColorScheme();
  const isDarkMode: boolean = colorScheme === 'dark';
  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        initialRouteName={ScreenNames.Home}
        screenOptions={{
          tabBarActiveTintColor: colors.light.primary,
          tabBarInactiveTintColor: isDarkMode ? '#fff' : '#000',
        }}>
        <Tab.Screen
          name={ScreenNames.Home}
          options={{
            title: 'Home',
            headerTitle: '',
            tabBarIcon: HomeIcon,
            headerLeft: HomeHeaderLeft,
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name={ScreenNames.Chat}
          options={{
            headerShown: false,
            tabBarIcon: ChatBubbleOvalLeftEllipsisIcon,
          }}
          component={ChatScreen}
        />
        <Tab.Screen
          name={ScreenNames.Settings}
          options={{headerShown: false, tabBarIcon: CogIcon}}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
