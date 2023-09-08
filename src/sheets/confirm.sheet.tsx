import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {SheetManager, SheetProps} from 'react-native-actions-sheet';

import Button from '@/components/form/button';
import {sheetnames} from '@/core/types/common.types';
import {ActionsSheetWrapper} from '@/sheets';

export type ConfirmSheetPayload = {
  handleConfirm: () => void;
  confirmText: string;
};
export default function ConfirmSheet(
  props: SheetProps<ConfirmSheetPayload>,
): JSX.Element {
  const {t} = useTranslation();
  return (
    <ActionsSheetWrapper
      id={props.sheetId}
      title={t('confirm')}
      sheetName={sheetnames.confirm}>
      <Text className="dark:text-white mb-3 font-semibold">
        {props.payload?.confirmText}
      </Text>
      <View className="flex-row gap-2 justify-between items-center">
        <Button
          className="flex-1 bg-gray-200 dark:bg-[#121212]"
          onPress={() => SheetManager.hide(sheetnames.confirm)}>
          <Text className="dark:text-white">{t('no')}</Text>
        </Button>
        <Button
          className="flex-1 bg-red-500"
          onPress={props.payload?.handleConfirm}>
          <Text className="text-white">{t('yes')}</Text>
        </Button>
      </View>
    </ActionsSheetWrapper>
  );
}
