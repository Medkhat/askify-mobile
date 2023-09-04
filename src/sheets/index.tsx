import {PropsWithChildren} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, Text, View} from 'react-native';
import ActionsSheet, {
  ActionSheetProps,
  SheetManager,
  registerSheet,
} from 'react-native-actions-sheet';
import {XCircleIcon} from 'react-native-heroicons/outline';

import {useColorScheme} from 'nativewind';

import LanguagesSheet from '@/sheets/languages.sheet';
import {sheetnames} from '@/types/common.types';

function ActionsSheetWrapper(
  props: PropsWithChildren<
    ActionSheetProps & {title: string; sheetName: sheetnames}
  >,
): JSX.Element {
  const {t} = useTranslation();
  const {colorScheme} = useColorScheme();
  const isDarkMode: boolean = colorScheme === 'dark';
  const handleClose = () => {
    SheetManager.hide(props.sheetName);
  };
  return (
    <ActionsSheet
      {...props}
      id={props.id}
      useBottomSafeAreaPadding
      drawUnderStatusBar={false}
      containerStyle={{
        backgroundColor: isDarkMode ? '#18181b' : '#fff',
      }}>
      <View className="p-5 pb-0">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="dark:text-white text-md font-bold">
            {t(props.title)}
          </Text>
          <Pressable onPress={handleClose}>
            <XCircleIcon size={20} />
          </Pressable>
        </View>
        {props.children}
      </View>
    </ActionsSheet>
  );
}

registerSheet(sheetnames.languages, LanguagesSheet);

export {ActionsSheetWrapper};
