import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";
import { User } from "../@types/User";

export interface IUserContext {
  user: Omit<User, "password" | "purchases"> | null;
  setUser: Dispatch<SetStateAction<IUserContext["user"]>>;
}

const UserContext = createContext<IUserContext>(null!);

const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUserContext["user"]>(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const useUserContext = () => useContext(UserContext);

export { useUserContext, UserContextProvider };
