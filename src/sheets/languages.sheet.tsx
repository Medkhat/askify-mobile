import {Text, TouchableOpacity, View} from 'react-native';
import {SheetManager, SheetProps} from 'react-native-actions-sheet';
import {CheckCircleIcon} from 'react-native-heroicons/outline';

import locales from '@/locales';
import {ActionsSheetWrapper} from '@/sheets';
import {sheetnames} from '@/types/common.types';
import {languages} from '@/utils/constants';

export default function LanguagesSheet(props: SheetProps): JSX.Element {
  const currentLanguage = locales.getLanguage();
  const setLanguage = (value: string) => {
    locales.setLanguage(value);
    SheetManager.hide(sheetnames.languages);
  };
  return (
    <ActionsSheetWrapper id={props.sheetId}>
      <View className="p-5">
        <Text className="dark:text-white text-md font-bold mb-5">
          {locales.chooseLanguage}
        </Text>
        {languages.map(language => (
          <TouchableOpacity
            key={language.value}
            className="py-3 flex-row justify-between items-center"
            onPress={() => setLanguage(language.value)}>
            <Text className="dark:text-white">{language.label}</Text>
            {currentLanguage === language.value && <CheckCircleIcon />}
          </TouchableOpacity>
        ))}
      </View>
    </ActionsSheetWrapper>
  );
}
