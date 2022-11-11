import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { AsyncStorageHook } from "@react-native-async-storage/async-storage/lib/typescript/types";
import { Id } from "../@types/Id";

export class Service<T extends Id> {
  private cursor: AsyncStorageHook;

  constructor(tableName: string) {
    this.cursor = useAsyncStorage(`@college_mobile_project/${tableName}`);
  }

  async findAll(): Promise<T[]> {
    const data = await this.cursor.getItem();
    return !!data ? JSON.parse(data) : [];
  }

  // async findById(id: string): Promise<T | null> {
  //   const data = await this.findAll();
  //   const user = data.find((user) => user._id === id);
  //   return !!user ? user : null;
  // }

  async create(obj: T): Promise<T> {
    const previousData = await this.findAll();
    const data = previousData ? previousData : [];
    await this.cursor.setItem(JSON.stringify([...data, obj]));
    return obj;
  }

  async deleteAll(): Promise<T[]> {
    const data = await this.findAll();
    await this.cursor.removeItem();
    return data;
  }
}
