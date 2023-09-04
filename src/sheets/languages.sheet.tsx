import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {SheetManager, SheetProps} from 'react-native-actions-sheet';
import {CheckIcon} from 'react-native-heroicons/outline';

import {ActionsSheetWrapper} from '@/sheets';
import {sheetnames} from '@/types/common.types';
import {languages} from '@/utils/constants';

export default function LanguagesSheet(props: SheetProps): JSX.Element {
  const {t, i18n} = useTranslation();
  const setLanguage = (value: string) => {
    i18n.changeLanguage(value);
    SheetManager.hide(sheetnames.languages);
  };
  return (
    <ActionsSheetWrapper
      id={props.sheetId}
      title={t('chooseLanguage')}
      sheetName={sheetnames.languages}>
      {languages.map(language => (
        <TouchableOpacity
          key={language.value}
          className="py-2 px-1 flex-row justify-between items-center"
          onPress={() => setLanguage(language.value)}>
          <Text className="dark:text-white">{language.label}</Text>
          {i18n.language === language.value && <CheckIcon size={20} />}
        </TouchableOpacity>
      ))}
    </ActionsSheetWrapper>
  );
}
