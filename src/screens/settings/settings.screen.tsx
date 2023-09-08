import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import {
  ArrowLeftOnRectangleIcon,
  ChevronRightIcon,
  LanguageIcon,
} from 'react-native-heroicons/outline';

import AppSafeArea from '@/components/safe-area';
import ThemeSwitcher from '@/components/theme-switcher';
import {useAuthState} from '@/core/store';
import {sheetnames} from '@/core/types/common.types';
import {ConfirmSheetPayload} from '@/sheets/confirm.sheet';

export default function SettingsScreen(): JSX.Element {
  const {t} = useTranslation();
  const clearUserData = useAuthState(state => state.clearUserData);
  const handleLanguagesPress = () => {
    SheetManager.show(sheetnames.languages);
  };
  const signOut = () => {
    SheetManager.hide(sheetnames.confirm);
    setTimeout(clearUserData, 500);
  };
  const handleSignOutPress = () => {
    SheetManager.show<ConfirmSheetPayload, unknown>(sheetnames.confirm, {
      payload: {confirmText: t('sure-sign-out'), handleConfirm: signOut},
    });
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
        <ThemeSwitcher vClassName="border-b border-b-[#eeeeee] dark:border-b-[#18181b]" />
        <TouchableOpacity
          className="flex-row w-full justify-between py-3"
          onPress={handleSignOutPress}>
          <View className="flex-row items-center gap-2">
            <ArrowLeftOnRectangleIcon color="#ef4444" size={20} />
            <Text className="text-red-500 text-md font-medium">
              {t('logout')}
            </Text>
          </View>
          <ChevronRightIcon color="#ef4444" size={20} />
        </TouchableOpacity>
      </View>
    </AppSafeArea>
  );
}
