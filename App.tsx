import React from 'react';
import {SheetProvider} from 'react-native-actions-sheet';
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
import {useColorScheme} from 'nativewind';

import colors from '@/assets/colors';
import locales from '@/locales';
import ChatScreen from '@/screens/chat/chat.screen';
import HomeScreen from '@/screens/home/home.screen';
import SettingsScreen from '@/screens/settings/settings.screen';
import {ScreenNames} from '@/types/common.types';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const {colorScheme} = useColorScheme();
  const isDarkMode: boolean = colorScheme === 'dark';
  return (
    <SheetProvider>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <Tab.Navigator
          initialRouteName={ScreenNames.Home}
          screenOptions={{
            tabBarActiveTintColor: colors.light.primary,
            tabBarInactiveTintColor: isDarkMode ? '#fff' : '#000',
            headerTitleAlign: 'left',
          }}>
          <Tab.Screen
            name={ScreenNames.Home}
            options={{
              headerTitle: locales.home,
              tabBarIcon: HomeIcon,
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name={ScreenNames.Chat}
            options={{
              headerTitle: locales.chats,
              tabBarIcon: ChatBubbleOvalLeftEllipsisIcon,
            }}
            component={ChatScreen}
          />
          <Tab.Screen
            name={ScreenNames.Settings}
            options={{
              headerTitle: locales.settings,
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
