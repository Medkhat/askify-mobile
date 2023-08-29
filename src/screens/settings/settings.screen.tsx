import React from 'react';
import {Text, View} from 'react-native';

import AppSafeArea from 'components/safe-area';
import ThemeSwitcher from 'components/theme-switcher';

export default function SettingsScreen(): JSX.Element {
  return (
    <AppSafeArea>
      <View className="justify-center items-center h-full w-full px-4">
        <ThemeSwitcher />
      </View>
    </AppSafeArea>
  );
}
