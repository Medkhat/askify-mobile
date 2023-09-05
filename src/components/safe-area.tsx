import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

export default function AppSafeArea({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <SafeAreaView className="bg-[#eeeeee] dark:bg-zinc-900 flex-1 p-3">
      {children}
    </SafeAreaView>
  );
}
