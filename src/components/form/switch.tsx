import {Switch, SwitchProps} from 'react-native';

import colors from '@/assets/colors';

export default function AppSwitch(props: SwitchProps): JSX.Element {
  return (
    <Switch
      {...props}
      trackColor={{false: '#767577', true: colors.light.primary}}
      thumbColor="#ffffff"
      ios_backgroundColor="#3e3e3e"
      style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
    />
  );
}
