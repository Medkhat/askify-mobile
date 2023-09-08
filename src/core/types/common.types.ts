export enum ScreenNames {
  Home = 'Home',
  Chat = 'Chat',
  Settings = 'Settings',
}
export enum sheetnames {
  languages = 'languages',
  confirm = 'confirm',
}
export enum StorageKeys {
  user = 'user-data',
}
export type LabelValue = {
  label: string;
  value: string;
};
export type ResponseError = {
  detail: {
    code: string;
    message: string;
  };
  code: string;
};
