import React from 'react';
import {useTranslation} from 'react-i18next';
import {Switch, Text, View} from 'react-native';
import {MoonIcon} from 'react-native-heroicons/outline';

import {useColorScheme} from 'nativewind';

import colors from '@/assets/colors';

export default function ThemeSwitcher(): JSX.Element {
  const {t} = useTranslation();
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <View className="py-3 w-full flex-row justify-between items-center">
      <View className="flex-row gap-2 items-center">
        <MoonIcon size={20} />
        <Text className="text-md font-medium text-black dark:text-white">
          {t('dark')}
        </Text>
      </View>
      <Switch
        trackColor={{false: '#767577', true: colors.light.primary}}
        thumbColor="#ffffff"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleColorScheme}
        value={isDarkMode}
        style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
      />
    </View>
  );
}
