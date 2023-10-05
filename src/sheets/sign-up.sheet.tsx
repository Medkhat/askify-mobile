import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {SheetProps} from 'react-native-actions-sheet';

import LinkButton from '@/components/form/link-button';
import {sheetnames} from '@/core/types/common.types';
import {ActionsSheetWrapper} from '@/sheets';

export default function SignUpSheet(props: SheetProps): JSX.Element {
  const {t} = useTranslation();
  return (
    <ActionsSheetWrapper
      id={props.sheetId}
      title={t('sign-up')}
      sheetName={sheetnames.signUp}>
      <Text className="dark:text-white mb-5 font-semibold leading-5">
        {t('sign-up-text')}
      </Text>
      <LinkButton url="https://askify.kz/sign-up">{t('sign-up')}</LinkButton>
    </ActionsSheetWrapper>
  );
}
