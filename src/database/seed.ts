import { Farmer } from "../@types/Farmer";
import { Service } from "../services/Service";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

const farmers: Farmer[] = [
  {
    _id: uuid.v4(),
    name: "João Vicente",
    nickname: "Jãozinho",
    city: "Piracicaba",
    state: "SP",
    products: [
      {
        _id: uuid.v4(),
        kgPortion: 2,
        name: "Feijão",
        value: 15.99,
      },
      {
        _id: uuid.v4(),
        kgPortion: 5,
        name: "Milho Coz",
        value: 10,
      },
      {
        _id: uuid.v4(),
        kgPortion: 1,
        name: "Café",
        value: 12.99,
      },
      {
        _id: uuid.v4(),
        kgPortion: 5,
        name: "Arroz",
        value: 19.99,
      },
      {
        _id: uuid.v4(),
        kgPortion: 1,
        name: "Batata",
        value: 14.99,
      },
    ],
  },
  {
    _id: uuid.v4(),
    name: "Heduardo",
    nickname: "Duzão Não Trabalha",
    city: "Araras",
    state: "SP",
    products: [
      {
        _id: uuid.v4(),
        kgPortion: 2,
        name: "Soja",
        value: 15.99,
      },
      {
        _id: uuid.v4(),
        kgPortion: 5,
        name: "Tilapia Violinha",
        value: 10,
      },
      {
        _id: uuid.v4(),
        kgPortion: 1,
        name: "Grão de Diamba",
        value: 12.99,
      },
      {
        _id: uuid.v4(),
        kgPortion: 5,
        name: "Lentilha",
        value: 19.99,
      },
    ],
  },
  {
    _id: uuid.v4(),
    name: "Daniel",
    nickname: "Big daniel",
    city: "Mogi Guaçu",
    state: "SP",
    products: [
      {
        _id: uuid.v4(),
        kgPortion: 5,
        name: "Tilapia Violinha",
        value: 10,
      },
      {
        _id: uuid.v4(),
        kgPortion: 1,
        name: "Grão de Diamba",
        value: 12.99,
      },
    ],
  },
];

export const seedDatabase = async () => {
  const farmerController = new Service<Farmer>("farmer");
  const data = await AsyncStorage.getItem("@college_mobile_project/seeded");

  const isSeeded = !!data ? JSON.parse(data) : false;

  if (!isSeeded) {
    await farmerController.deleteAll();
    await farmerController.create(farmers[0]);
    await farmerController.create(farmers[1]);
    await farmerController.create(farmers[2]);
    await AsyncStorage.setItem("@college_mobile_project/seeded", "true");
    const seedKey = await AsyncStorage.getItem("@college_mobile_project/seeded");
    // console.log(seedKey);
  } else {
    console.log("seeded");
  }
};
