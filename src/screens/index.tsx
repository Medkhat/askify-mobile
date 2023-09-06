import {useTranslation} from 'react-i18next';
import {CogIcon, HomeIcon} from 'react-native-heroicons/outline';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import colors from '@/assets/colors';
import useDarkMode from '@/hooks/dark-mode';
import HomeScreen from '@/screens/home/home.screen';
import SettingsScreen from '@/screens/settings/settings.screen';
import {ScreenNames} from '@/types/common.types';

const Tab = createBottomTabNavigator();
export default function AppTabs(): JSX.Element {
  const isDarkMode = useDarkMode();
  const {t} = useTranslation();
  return (
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
  );
}
