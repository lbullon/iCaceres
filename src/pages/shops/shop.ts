export interface Shop {
  id?: number;
  name: string;
  goods: string[];
  address: string;

  longitude: number;
  openingTime: number;
  closingTime: number;
}