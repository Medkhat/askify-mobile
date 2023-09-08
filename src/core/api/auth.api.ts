import {AxiosResponse} from 'axios';

import axiosInstance from '@/core/api';
import {AuthData, AuthFields} from '@/core/types/auth.types';

const signIn = async (data: AuthFields) => {
  return await axiosInstance.post<
    undefined,
    AxiosResponse<AuthData, AuthFields>
  >('/auth/login/', data);
};

export {signIn};
