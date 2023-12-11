type Product = {
  "title": string,
  "description": string,
  "stock": number,
  "price": number,
  "slug": string,
  "image": string,
  "category": CategoryName,
}

type CategoryName = 'consoles' | 'accessories' | 'games' | 'all'

type Item = Product & {
  quantity: number;
};

type CartContextType = {
  cart: Item[];
  addToCart: (item: Item) => void;
  isInCart: (slug: string) => boolean;
  totalQty: () => number;
  totalAmount: () => number;
  emptyCart: () => void;
}

type Contact = {
  name?: string,
  email?: string,
  message?: string
}
