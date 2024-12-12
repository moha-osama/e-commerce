export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount?: number;
  onSale?: boolean;
  popular?: boolean;
}

export interface ProductsResponse {
  status: string;
  message: string;
  products: Product[];
}
