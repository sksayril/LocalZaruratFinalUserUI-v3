// app/restaurants/mockData.ts
export interface Restaurant {
  name: string;
  image: string;
  rating: number;
  ratingsCount: number;
  tags?: string[];
  address: string;
  openTime: string;
  price: number;
  actions: string[];
  amenities?: string[];
}

export const restaurantsMockData: Restaurant[] = [
  {
    name: 'Melting Pot Fine Dine',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format&q=80',
    rating: 4.3,
    ratingsCount: 6912,
    tags: ['Top Search'],
    address: '148 B Juhu Tara Road Juhu, Mumbai',
    openTime: 'Opens in 30 mins',
    price: 350,
    actions: ['Show Number', 'Order online', 'Book a table'],
  },
  {
    name: 'The Colonial Palate',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format&q=80',
    rating: 4.6,
    ratingsCount: 862,
    tags: ['Trending'],
    address: 'Chamber Of Commerce Lane Fort, Mumbai',
    openTime: 'Opens in 30 mins',
    price: 2100,
    actions: ['Show Number', 'Order online', 'Menu'],
  },
]; 