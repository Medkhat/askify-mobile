import {Text, View} from 'react-native';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';

export default function LanguagesSheet(props: SheetProps): JSX.Element {
  return (
    <ActionSheet id={props.sheetId}>
      <View>
        <Text>Hello World</Text>
      </View>
    </ActionSheet>
  );
}
