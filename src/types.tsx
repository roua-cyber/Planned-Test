export interface User {
  name: { lastName: string; firstName: string };
  age: number;
  country: string;
  email: string;
}

export type Users = User[];

//context types
export type FetchUsersPropsTypes = {
  Min: number;
  Max: number;
};
export type Name = {
  firstName: string;
  lastName: string;
};
export type FetchUsersFunction = (props: FetchUsersPropsTypes) => Promise<void>;

export type UserContextProps = {
  users: Users;
  isLoading: boolean;
  error: string | null;
  fetchUsers: FetchUsersFunction;
};
