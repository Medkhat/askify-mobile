import {Text, View} from 'react-native';
import {SheetProps} from 'react-native-actions-sheet';

import {ActionsSheetWrapper} from '@/sheets';

export default function LanguagesSheet(props: SheetProps): JSX.Element {
  return (
    <ActionsSheetWrapper sheetId={props.sheetId}>
      <View>
        <Text>Hello World</Text>
      </View>
    </ActionsSheetWrapper>
  );
}
