import {FieldValues, UseControllerProps, useController} from 'react-hook-form';
import {Text, TextInput, TextInputProps, View} from 'react-native';

type InputProps<TFields extends FieldValues> = TextInputProps &
  UseControllerProps<TFields> & {
    icon?: JSX.Element;
  };

export default function Input<TFields extends FieldValues>({
  name,
  control,
  rules,
  className,
  icon,
  ...props
}: InputProps<TFields>): JSX.Element {
  const {
    field,
    fieldState: {error},
  } = useController<TFields>({name, control, rules});
  return (
    <View className="w-full mb-3">
      <TextInput
        {...props}
        {...field}
        className={`border-gray-300 dark:border-gray-700 dark:text-white focus:border-[#1DA1F2] border-2 h-10 rounded-lg px-3 ${className}`}
        placeholderTextColor="#9ca3af"
        value={field.value}
        onChangeText={field.onChange}
      />
      {icon && (
        <View className="absolute right-2 top-2 text-gray-400">{icon}</View>
      )}
      {error && (
        <Text className="text-red-500 text-xs mt-1 ml-2">{error.message}</Text>
      )}
    </View>
  );
}
