export interface Product {
  _id: string;
  price: number;
  name: string;
  currency?: string;
  description: string;
  category: string;
  url: string;
  image_url: string;
}
