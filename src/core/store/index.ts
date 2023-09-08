import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

import {AuthState} from '@/core/types/auth.types';
import {StorageKeys} from '@/core/types/common.types';

import {mmkvStorage} from './mmkv';

export const useAuthState = create<AuthState>()(
  immer(set => ({
    userData: {
      username: '',
      refresh: '',
      access: '',
    },
    setData: data =>
      set(state => {
        state.userData = data;
        mmkvStorage.set(StorageKeys.user, JSON.stringify(data));
      }),
    clearUserData: () =>
      set(state => {
        state.userData = {
          username: '',
          refresh: '',
          access: '',
        };
        mmkvStorage.clearAll();
      }),
  })),
);
