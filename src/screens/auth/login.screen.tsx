import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

import {AxiosError} from 'axios';

import Button from '@/components/form/button';
import Input from '@/components/form/input';
import AppSwitch from '@/components/form/switch';
import AppSafeArea from '@/components/safe-area';
import ThemeSwitcher from '@/components/theme-switcher';
import {signIn} from '@/core/api/auth.api';
import useDarkMode from '@/core/hooks/dark-mode';
import {useAuthState} from '@/core/store';
import {AuthFields} from '@/core/types/auth.types';
import {ResponseError} from '@/core/types/common.types';

export default function LoginScreen(): JSX.Element {
  const isDarkMode = useDarkMode();
  const setData = useAuthState(state => state.setData);
  const {t} = useTranslation();
  const [isSecure, setIsSecure] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleShowPassword = () => {
    setIsSecure(!isSecure);
  };
  const {handleSubmit, control} = useForm<AuthFields>({
    defaultValues: {username: '', password: ''},
  });
  const submit = async (fields: AuthFields) => {
    setIsSubmitting(true);
    try {
      const response = await signIn(fields);
      setData(response.data);
    } catch (error) {
      if (
        (error as AxiosError<ResponseError>).response?.data?.detail?.code ===
        'email_or_password_incorrect'
      ) {
        Alert.alert(t('auth-failed'), t('auth-failed-message'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AppSafeArea vClassName="h-full w-full items-center justify-center">
      <View className="items-center w-full px-5">
        {isDarkMode ? (
          <Image
            source={require('../../images/logo-light.png')}
            className="w-[140px] h-[30px]"
          />
        ) : (
          <Image
            source={require('../../images/logo-dark.png')}
            className="w-[140px] h-[30px]"
          />
        )}
        <Text className="dark:text-white mt-1 mb-1">ask everything</Text>
        <ThemeSwitcher />
        <Input
          name="username"
          placeholder={t('username')}
          control={control}
          icon={<UserIcon color="#9ca3af" />}
          rules={{required: t('not-empty')}}
        />
        <Input
          secureTextEntry={isSecure}
          name="password"
          placeholder={t('password')}
          control={control}
          icon={<LockClosedIcon color="#9ca3af" />}
          rules={{required: t('not-empty')}}
        />
        <View className="w-full flex-row justify-between items-center mb-3">
          <View className="flex-row gap-2 items-center">
            {isSecure ? <EyeIcon size={20} /> : <EyeSlashIcon size={20} />}
            <Text className="text-md font-medium text-black dark:text-white">
              {t('show-pwd')}
            </Text>
          </View>
          <AppSwitch onValueChange={handleShowPassword} value={!isSecure} />
        </View>
        <Button
          className="w-full items-center"
          onPress={handleSubmit(submit)}
          disabled={isSubmitting}>
          {isSubmitting ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text className="dark:text-white text-[16px]">{t('sign-in')}</Text>
          )}
        </Button>
        <View className="my-4 w-full flex-row justify-between items-center">
          <TouchableOpacity>
            <Text className="text-[#1DA1F2]">{t('sign-up')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-[#1DA1F2]">{t('forgot-pwd')}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="w-full flex-row justify-center items-center rounded-lg py-3 border border-gray-300 dark:border-gray-700">
          <Image
            source={require('./../../images/google.png')}
            className="mr-2"
          />
          <Text className="dark:text-white text-[16px]">
            {t('sign-in-google')}
          </Text>
        </TouchableOpacity>
      </View>
    </AppSafeArea>
  );
}
