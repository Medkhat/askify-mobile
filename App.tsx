import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import colors from 'assets/colors';
import {ChatIcon, HomeIcon} from 'components/icons';
import ChatScreen from 'screens/chat';
import HomeScreen from 'screens/home';
import {ScreenNames} from 'types/common.types';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ScreenNames.Home}
        screenOptions={{
          tabBarActiveTintColor: colors.primary.l,
          tabBarInactiveTintColor: 'gray',
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
