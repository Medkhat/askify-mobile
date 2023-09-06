import React, {PropsWithChildren} from 'react';
import {SafeAreaView, View} from 'react-native';

export default function AppSafeArea({
  children,
  vClassName,
}: PropsWithChildren<{vClassName?: string}>): JSX.Element {
  return (
    <SafeAreaView className="bg-[#eeeeee] dark:bg-zinc-900 flex-1">
      <View className={vClassName ?? ''}>{children}</View>
    </SafeAreaView>
  );
}
