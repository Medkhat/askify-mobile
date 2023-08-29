import React from 'react';
import {Text, View} from 'react-native';

import AppSafeArea from '@/components/safe-area';

export default function ChatScreen(): JSX.Element {
  return (
    <AppSafeArea>
      <View className="justify-center items-center h-full px-4">
        <Text className="text-lg text-black dark:text-white">Chat Screen</Text>
      </View>
    </AppSafeArea>
  );
}
