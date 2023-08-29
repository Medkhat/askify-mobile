import {PropsWithChildren} from 'react';
import ActionsSheet, {
  SheetProps,
  registerSheet,
} from 'react-native-actions-sheet';

import {useColorScheme} from 'nativewind';

import {sheetnames} from '@/types/common.types';

import LanguagesSheet from './languages.sheet';

function ActionsSheetWrapper(
  props: PropsWithChildren<SheetProps>,
): JSX.Element {
  const {colorScheme} = useColorScheme();
  return (
    <ActionsSheet
      id={props.sheetId}
      useBottomSafeAreaPadding
      drawUnderStatusBar={false}
      containerStyle={{
        backgroundColor: colorScheme === 'dark' ? '#18181b' : '#fff',
      }}>
      {props.children}
    </ActionsSheet>
  );
}

registerSheet(sheetnames.languages, LanguagesSheet);

export {ActionsSheetWrapper};
