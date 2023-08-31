import {PropsWithChildren} from 'react';
import ActionsSheet, {
  ActionSheetProps,
  registerSheet,
} from 'react-native-actions-sheet';

import {useColorScheme} from 'nativewind';

import LanguagesSheet from '@/sheets/languages.sheet';
import {sheetnames} from '@/types/common.types';

function ActionsSheetWrapper(
  props: PropsWithChildren<ActionSheetProps>,
): JSX.Element {
  const {colorScheme} = useColorScheme();
  return (
    <ActionsSheet
      {...props}
      id={props.id}
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
