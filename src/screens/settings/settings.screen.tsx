import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ChevronRightIcon} from 'react-native-heroicons/outline';

import AppSafeArea from '@/components/safe-area';
import ThemeSwitcher from '@/components/theme-switcher';
import locales from '@/locales';

export default function SettingsScreen(): JSX.Element {
  return (
    <AppSafeArea>
      <View className="justify-center items-center h-full w-full px-5">
        <TouchableOpacity className="flex-row w-full justify-between py-5">
          <Text className="text-lg font-medium dark:text-white">
            {locales.language}
          </Text>
          <ChevronRightIcon />
        </TouchableOpacity>
        <ThemeSwitcher />
      </View>
    </AppSafeArea>
  );
}
