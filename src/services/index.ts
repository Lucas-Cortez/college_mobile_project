import AsyncStorage from "@react-native-async-storage/async-storage";

type Id = {
  id: string;
};
export class Service<T extends Id> {
  private serviceTable: string;

  constructor(serviceTable: string) {
    this.serviceTable = `@college_mobile_project/${serviceTable}`;
  }

  async findAll(): Promise<T[]> {
    const data = await AsyncStorage.getItem(this.serviceTable);
    return !!data ? JSON.parse(data) : [];
  }

  async findByid(id: string): Promise<T | null> {
    const previousData = await this.findAll();
    if (!previousData) return null;
    const data = previousData.find((el: T) => el.id === id);
    return data || null;
  }

  async create(obj: T) {
    const previousData = await this.findAll();
    const data = previousData ? previousData : [];
    await AsyncStorage.setItem(this.serviceTable, JSON.stringify([...data, obj]));
    return obj;
  }
}
