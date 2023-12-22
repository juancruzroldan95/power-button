type Product = {
  title: string,
  description: string,
  stock: number,
  price: number,
  slug: string,
  image: string,
  category: CategoryName,
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
  removeFromCart: (slug: string) => void;
  updateItemQuantity: (slug: string, newQuantity: number) => void;
  isInCart: (slug: string) => boolean;
  totalQty: () => number;
  totalAmount: () => number;
  emptyCart: () => void;
}

type User = {
  uid: string,
  email: string,
  role: string,
}

type UserState = User & {
  logged: boolean,
}

type Order = {
  orderId?: string,
  email?: string,
  items?: Item[],
  totalAmount?: number,
  date?: string
}

type AuthValues = {
  email: string,
  password: string
}

type AuthContextType = {
  user: User;
  registerUser: (values: AuthValues) => void;
  loginUser: (values: AuthValues) => void;
  logOut: () => void;
  googleLogIn: () => void
}
