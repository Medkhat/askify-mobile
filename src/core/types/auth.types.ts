import {SetState} from 'zustand';

export type AuthFields = {
  username: string;
  password: string;
};

export type AuthData = Pick<AuthFields, 'username'> & {
  refresh: string;
  access: string;
};

export type AuthState = {
  userData: AuthData;
  setData: (data: AuthData) => void;
  clearUserData: () => void;
};
