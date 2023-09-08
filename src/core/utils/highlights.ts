import {useTranslation} from 'react-i18next';
import {IUserStory} from 'react-native-insta-story';

export const useHighlights = (): IUserStory[] => {
  const {t} = useTranslation();
  return [
    {
      user_id: 1,
      user_image:
        'https://medkhat.sirv.com/askify/highlights/avatars/about-us.jpg',
      user_name: t('about'),
      stories: [
        {
          story_id: 1,
          story_image:
            'https://medkhat.sirv.com/askify/highlights/about-us-1.jpg',
        },
      ],
    },
    {
      user_id: 2,
      user_image:
        'https://medkhat.sirv.com/askify/highlights/avatars/new-features.jpeg',
      user_name: t('new-features'),
      stories: [
        {
          story_id: 1,
          story_image:
            'https://medkhat.sirv.com/askify/highlights/audio-format.jpg',
        },
        {
          story_id: 2,
          story_image:
            'https://medkhat.sirv.com/askify/highlights/full-chat.jpg',
        },
      ],
    },
    {
      user_id: 3,
      user_image: 'https://medkhat.sirv.com/askify/highlights/avatars/qna.jpeg',
      user_name: t('faq'),
      stories: [
        {
          story_id: 1,
          story_image: 'https://medkhat.sirv.com/askify/highlights/qna1.jpg',
        },
        {
          story_id: 2,
          story_image: 'https://medkhat.sirv.com/askify/highlights/qna2.jpg',
        },
        {
          story_id: 3,
          story_image: 'https://medkhat.sirv.com/askify/highlights/qna3.jpg',
        },
        {
          story_id: 4,
          story_image: 'https://medkhat.sirv.com/askify/highlights/qna4.jpg',
        },
        {
          story_id: 5,
          story_image: 'https://medkhat.sirv.com/askify/highlights/qna5.jpg',
        },
      ],
    },
    {
      user_id: 4,
      user_image:
        'https://medkhat.sirv.com/askify/highlights/avatars/contacts.jpg',
      user_name: t('contacts'),
      stories: [
        {
          story_id: 1,
          story_image:
            'https://medkhat.sirv.com/askify/highlights/contacts1.jpg',
        },
      ],
    },
  ];
};
