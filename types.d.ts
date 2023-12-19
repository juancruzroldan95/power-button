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

type Contact = {
  name?: string,
  email?: string,
  message?: string
}

type CartContextType = {
  cart: Item[];
  addToCart: (item: Item) => void;
  isInCart: (slug: string) => boolean;
  totalQty: () => number;
  totalAmount: () => number;
  emptyCart: () => void;
}

type User = {
  "uid"?: string,
  "email"?: string,
  "logged": boolean
}

type AuthValues = {
  email: string,
  password: string
}

type AuthContextType = {
  user: User;
  registerUser: (values: AuthValues) => void;
  loginUser: (values: AuthValues) => void;
  logOut: () => void
}
