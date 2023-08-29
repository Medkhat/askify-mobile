import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import {ChevronRightIcon} from 'react-native-heroicons/outline';

import AppSafeArea from '@/components/safe-area';
import ThemeSwitcher from '@/components/theme-switcher';
import locales from '@/locales';
import {sheetnames} from '@/types/common.types';

export default function SettingsScreen(): JSX.Element {
  const handleLanguagesPress = () => {
    SheetManager.show(sheetnames.languages);
  };
  return (
    <AppSafeArea>
      <View className="justify-center items-center h-full w-full px-3">
        <TouchableOpacity
          className="flex-row w-full justify-between py-5"
          onPress={handleLanguagesPress}>
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
