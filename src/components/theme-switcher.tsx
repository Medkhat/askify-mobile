import React from 'react';
import {Switch, Text, View} from 'react-native';

import {useColorScheme} from 'nativewind';

import colors from '@/assets/colors';

export default function ThemeSwitcher(): JSX.Element {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <View className="w-full flex-row justify-between items-center">
      <Text className="text-lg font-medium text-black dark:text-white">
        Dark Mode
      </Text>
      <Switch
        trackColor={{false: '#767577', true: colors.light.primary}}
        thumbColor="#ffffff"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleColorScheme}
        value={isDarkMode}
      />
    </View>
  );
}
