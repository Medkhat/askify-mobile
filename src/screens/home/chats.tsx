import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

export default function ChatsList(): JSX.Element {
  const {t} = useTranslation();
  return (
    <View className="px-4 mt-5">
      <Text className="font-semibold text-md dark:text-white">
        {t('latest-chats')}
      </Text>
    </View>
  );
}
