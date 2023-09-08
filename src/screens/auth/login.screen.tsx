import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {ActivityIndicator, Alert, Image, Text, View} from 'react-native';
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
        Alert.alert('Authentication failed', 'Email or password is incorrect');
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
          placeholder="Username"
          control={control}
          icon={<UserIcon color="#9ca3af" />}
          rules={{required: "Username can't be empty"}}
        />
        <Input
          secureTextEntry={isSecure}
          name="password"
          placeholder="Password"
          control={control}
          icon={<LockClosedIcon color="#9ca3af" />}
          rules={{required: "Password can't be empty"}}
        />
        <View className="w-full flex-row justify-between items-center mb-3">
          <View className="flex-row gap-2 items-center">
            {isSecure ? <EyeIcon size={20} /> : <EyeSlashIcon size={20} />}
            <Text className="text-md font-medium text-black dark:text-white">
              Show password
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
            <Text className="dark:text-white text-[16px]">Sign in</Text>
          )}
        </Button>
      </View>
    </AppSafeArea>
  );
}
