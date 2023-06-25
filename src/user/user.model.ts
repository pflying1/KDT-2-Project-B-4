export interface User{
  id: string;
  name: string;
  pw: string;
  status: UserStatus;
}

export enum UserStatus{
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE"
}