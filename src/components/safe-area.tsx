import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

export default function AppSafeArea({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <SafeAreaView className="bg-white dark:bg-slate-800 flex-1 p-3">
      {children}
    </SafeAreaView>
  );
}
