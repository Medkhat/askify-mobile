import {Image, Text, View} from 'react-native';

import AppSafeArea from '@/components/safe-area';
import useDarkMode from '@/hooks/dark-mode';

export default function LoginScreen(): JSX.Element {
  const isDarkMode = useDarkMode();
  return (
    <AppSafeArea vClassName="h-full w-full items-center justify-center">
      <View className="items-center">
        {isDarkMode ? (
          <Image
            source={require('../../images/logo-light.png')}
            className="w-[120px] h-[26px]"
          />
        ) : (
          <Image
            source={require('../../images/logo-dark.png')}
            className="w-[120px] h-[26px]"
          />
        )}
        <Text className="dark:text-white mt-1">ask everything</Text>
      </View>
    </AppSafeArea>
  );
}
