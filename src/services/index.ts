import AsyncStorage from "@react-native-async-storage/async-storage";

export class Service<T> {
  private serviceTable: string;

  constructor(serviceTable: string) {
    this.serviceTable = `@storage_Key/${serviceTable}`;
  }

  async getAll(): Promise<T[]> {
    const data = await AsyncStorage.getItem(this.serviceTable);
    return !!data ? JSON.parse(data) : [];
  }

  async setItem(obj: T) {
    const previousData = await this.getAll();
    const data = previousData ? previousData : [];
    await AsyncStorage.setItem(this.serviceTable, JSON.stringify([...data, obj]));
    return obj;
  }

  async remove(): Promise<void> {
    await AsyncStorage.removeItem(this.serviceTable);
  }
}
