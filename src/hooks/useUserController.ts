import { User } from "../@types/User";
import { Service } from "../services/Service";
import uuid from "react-native-uuid";

export const useUserController = () => {
  const userController = new Service<User>("user");

  const authenticate = async (email: string, password: string) => {
    const users = await userController.findAll();
    const user = users.find((u) => email === u.email && password === u.password);
    return !!user ? user : null;
  };

  const createUser = async (name: string, email: string, password: string) => {
    return await userController.create({
      _id: uuid.v4(),
      name: name,
      email: email,
      password: password,
      purchases: [],
    });
  };

  return { createUser, authenticate };
};
