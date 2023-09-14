export interface Basket {
    id: number;
    buyerId: string;
    items: BasketItem[];
  }
  
  export interface BasketItem {
    productId: number;
    name: string;
    description?: any;
    price: number;
    pictureUrl: string;
    type: string;
    brand: string;
    quantity: number;
  }