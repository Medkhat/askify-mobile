import {Text, TouchableOpacity, View} from 'react-native';
import {SheetProps} from 'react-native-actions-sheet';

import locales from '@/locales';
import {ActionsSheetWrapper} from '@/sheets';
import {languages} from '@/utils/constants';

export default function LanguagesSheet(props: SheetProps): JSX.Element {
  return (
    <ActionsSheetWrapper sheetId={props.sheetId}>
      <View className="p-5">
        <Text className="dark:text-white text-md font-bold mb-5">
          {locales.chooseLanguage}
        </Text>
        {languages.map(language => (
          <TouchableOpacity key={language.value} className="py-3">
            <Text className="dark:text-white">{language.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ActionsSheetWrapper>
  );
}
