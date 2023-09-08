import {TouchableOpacityProps, TouchableOpacity} from 'react-native';

export default function Button(props: TouchableOpacityProps): JSX.Element {
  const {children, className, ...rest} = props;
  return (
    <TouchableOpacity
      {...rest}
      className={'bg-[#1DA1F2] py-2 px-4 rounded-lg w-full items-center'}>
      {children}
    </TouchableOpacity>
  );
}
