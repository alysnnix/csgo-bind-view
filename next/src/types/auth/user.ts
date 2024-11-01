type IBinds = {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  objectId: string;
};

export interface IUser {
  email: string;
  binds: IBinds[];
  username: string;
  objectId: string;
  updatedAt: string;
  createdAt: string;
  sessionToken: string;
}
