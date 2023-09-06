import React from 'react';
import {Pressable} from 'react-native';
import {XMarkIcon} from 'react-native-heroicons/outline';
import InstaStory from 'react-native-insta-story';

import {useColorScheme} from 'nativewind';

import colors from '@/assets/colors';
import AppSafeArea from '@/components/safe-area';
import useDarkMode from '@/hooks/dark-mode';
import ChatsList from '@/screens/home/chats';
import {useHighlights} from '@/utils/highlights';

export default function HomeScreen(): JSX.Element {
  const highlights = useHighlights();
  const isDarkMode = useDarkMode();
  const avaTextColor = isDarkMode ? '#fff' : '#000';
  return (
    <AppSafeArea>
      <InstaStory
        data={highlights}
        duration={5}
        avatarSize={70}
        unPressedBorderColor={colors.light.primary}
        renderCloseComponent={({onPress}) => (
          <Pressable onPress={onPress}>
            <XMarkIcon />
          </Pressable>
        )}
        unPressedAvatarTextColor={avaTextColor}
        pressedAvatarTextColor={avaTextColor}
        storyImageStyle={{
          objectFit: 'scale-down',
          marginTop: 32,
        }}
      />
      <ChatsList />
    </AppSafeArea>
  );
}
