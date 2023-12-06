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

type Contact = {
  name?: string,
  email?: string,
  message?: string
}
