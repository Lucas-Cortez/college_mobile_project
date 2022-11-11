import { Farmer } from "../@types/Farmer";
import { Service } from "../services/Service";
// import uuid from "react-native-uuid";

export const useFarmerController = () => {
  const farmerController = new Service<Farmer>("farmer");

  const findAllFarmers = async () => {
    return await farmerController.findAll();
  };

  return { findAllFarmers };
};
