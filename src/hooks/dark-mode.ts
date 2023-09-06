import {useColorScheme} from 'nativewind';

export default function useDarkMode() {
  const {colorScheme} = useColorScheme();
  return colorScheme === 'dark';
}
