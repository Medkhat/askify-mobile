import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import {ChevronRightIcon, LanguageIcon} from 'react-native-heroicons/outline';

import AppSafeArea from '@/components/safe-area';
import ThemeSwitcher from '@/components/theme-switcher';
import {sheetnames} from '@/types/common.types';

export default function SettingsScreen(): JSX.Element {
  const {t} = useTranslation();
  const handleLanguagesPress = () => {
    SheetManager.show(sheetnames.languages);
  };
  return (
    <AppSafeArea vClassName="px-3">
      <View className="bg-white dark:bg-[#121212] rounded-lg py-2 px-5 mt-10">
        <TouchableOpacity
          className="flex-row w-full justify-between py-3 border-b border-b-[#eeeeee] dark:border-b-[#18181b]"
          onPress={handleLanguagesPress}>
          <View className="flex-row items-center gap-2">
            <LanguageIcon size={20} />
            <Text className="dark:text-white text-md font-medium">
              {t('language')}
            </Text>
          </View>
          <ChevronRightIcon size={20} />
        </TouchableOpacity>
        <ThemeSwitcher />
      </View>
    </AppSafeArea>
  );
}
