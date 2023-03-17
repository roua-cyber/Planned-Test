import { createContext, useState, FC } from "react";
import axios, { AxiosResponse } from "axios";
import { FetchUsersPropsTypes, UserContextProps, Users } from "../types";
import React from "react";
import { Endpoints } from "../consts";
import {
  isAdultsRange,
  isKidsRange,
  isKidssOrAdultRange,
  isKidssOrAdultorSeniorRange,
  isSeniorOrAdultRange,
  isSeniorsRange,
  sortFunction,
} from "./utils";

export const UserContext = createContext<UserContextProps>({
  users: [],
  isLoading: false,
  error: null,
  fetchUsers: async (): Promise<void> => {},
});

export const UserProvider: FC = ({ children }) => {
  const [users, setUsers] = useState<Users>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async ({
    Min,
    Max,
  }: FetchUsersPropsTypes): Promise<void> => {
    setIsLoading(true);
    setError(null);
    setUsers([]);

    try {
      let response: AxiosResponse<{ data: Users }>;

      if (isKidsRange({ Min, Max })) {
        response = await axios.get(Endpoints.FETCH_KIDS);
      } else if (isAdultsRange({ Min, Max })) {
        response = await axios.get(Endpoints.FETCH_ADULTS);
      } else if (isSeniorsRange({ Min, Max })) {
        response = await axios.get(Endpoints.FETCH_SENIORS);
      } else if (isKidssOrAdultRange({ Min, Max })) {
        response = await axios.get(Endpoints.FETCH_KIDS);
        const adults = await axios.get(Endpoints.FETCH_ADULTS);
        response.data.data = response.data.data.concat(adults.data.data);
      } else if (isSeniorOrAdultRange({ Min, Max })) {
        response = await axios.get(Endpoints.FETCH_SENIORS);
        const adults = await axios.get(Endpoints.FETCH_ADULTS);
        response.data.data = response.data.data.concat(adults.data.data);
      } else if (isKidssOrAdultorSeniorRange({ Min, Max })) {
        response = await axios.get(Endpoints.FETCH_ADULTS);
        const kids = await axios.get(Endpoints.FETCH_KIDS);
        const seniors = await axios.get(Endpoints.FETCH_SENIORS);
        response.data.data = response.data.data.concat(
          kids.data.data,
          seniors.data.data
        );
      } else {
        throw new Error("Invalid range");
      }
      const sortedList = response.data.data
        .sort(sortFunction({ prop: "name", ord: "asc" }))
        .sort(sortFunction({ prop: "age", ord: "desc" }))
        .filter((user) => user.age >= Min && user.age <= Max);
      setUsers(sortedList);
    } catch (error) {
      setError((error as any).message);
    }

    setIsLoading(false);
  };

  const value: UserContextProps = {
    users,
    isLoading,
    error,
    fetchUsers,
  };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
