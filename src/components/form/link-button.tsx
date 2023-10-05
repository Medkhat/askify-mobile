import React, {useCallback} from 'react';
import {Alert, Linking, Text} from 'react-native';

import Button from './button';

type LinkButtonProps = {
  url: string;
  children: string;
};

export default function LinkButton({
  url,
  children,
}: LinkButtonProps): JSX.Element {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Button className="w-full items-center" onPress={handlePress}>
      <Text className="dark:text-white text-[16px]">{children}</Text>
    </Button>
  );
}
