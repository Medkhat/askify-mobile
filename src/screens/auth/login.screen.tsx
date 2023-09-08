import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Image, Switch, Text, View} from 'react-native';
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

import Input from '@/components/form/input';
import AppSwitch from '@/components/form/switch';
import AppSafeArea from '@/components/safe-area';
import ThemeSwitcher from '@/components/theme-switcher';
import useDarkMode from '@/hooks/dark-mode';
import {AuthFields} from '@/types/auth.types';

export default function LoginScreen(): JSX.Element {
  const isDarkMode = useDarkMode();
  const [isSecure, setIsSecure] = useState<boolean>(true);

  const handleShowPassword = () => {
    setIsSecure(!isSecure);
  };
  const {handleSubmit, control} = useForm<AuthFields>({
    defaultValues: {username: '', password: ''},
  });

  return (
    <AppSafeArea vClassName="h-full w-full items-center justify-center">
      <View className="items-center w-full px-5">
        {isDarkMode ? (
          <Image
            source={require('../../images/logo-light.png')}
            className="w-[120px] h-[26px]"
          />
        ) : (
          <Image
            source={require('../../images/logo-dark.png')}
            className="w-[120px] h-[26px]"
          />
        )}
        <Text className="dark:text-white mt-1 mb-1">ask everything</Text>
        <ThemeSwitcher />
        <Input
          name="username"
          placeholder="Username"
          control={control}
          icon={<UserIcon color="#9ca3af" />}
        />
        <Input
          secureTextEntry={isSecure}
          name="password"
          placeholder="Password"
          control={control}
          icon={<LockClosedIcon color="#9ca3af" />}
        />
        <View className="w-full flex-row justify-between items-center">
          <View className="flex-row gap-2 items-center">
            {isSecure ? <EyeIcon size={20} /> : <EyeSlashIcon size={20} />}
            <Text className="text-md font-medium text-black dark:text-white">
              Show password
            </Text>
          </View>
          <AppSwitch onValueChange={handleShowPassword} value={!isSecure} />
        </View>
      </View>
    </AppSafeArea>
  );
}
