import {PropsWithChildren} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, Text, View} from 'react-native';
import ActionsSheet, {
  ActionSheetProps,
  SheetManager,
  registerSheet,
} from 'react-native-actions-sheet';
import {XCircleIcon} from 'react-native-heroicons/outline';

import useDarkMode from '@/core/hooks/dark-mode';
import {sheetnames} from '@/core/types/common.types';
import ConfirmSheet from '@/sheets/confirm.sheet';
import ForgotSheet from '@/sheets/forgot.sheet';
import LanguagesSheet from '@/sheets/languages.sheet';
import SignUpSheet from '@/sheets/sign-up.sheet';

function ActionsSheetWrapper(
  props: PropsWithChildren<
    ActionSheetProps & {title: string; sheetName: sheetnames}
  >,
): JSX.Element {
  const {t} = useTranslation();
  const isDarkMode = useDarkMode();
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
registerSheet(sheetnames.confirm, ConfirmSheet);
registerSheet(sheetnames.signUp, SignUpSheet);
registerSheet(sheetnames.forgot, ForgotSheet);

export {ActionsSheetWrapper};
