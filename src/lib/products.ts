export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  rating: number;
  category: string;
  featured: boolean;
  stock: number;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Classic Biker Jacket',
    price: 4999.00,
    description: 'A timeless biker jacket made from high-quality faux leather. Perfect for any occasion, offering both style and durability. Features multiple pockets and a comfortable inner lining.',
    images: ['https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410499092004/jD16RqXjMT-1.jpg', 'https://placehold.co/600x600.png'],
    rating: 4.8,
    category: 'Apparel',
    featured: true,
    stock: 15,
  },
  {
    id: '2',
    name: 'Bluetooth Noise-Cancelling Headphones',
    price: 7999.00,
    description: 'Immerse yourself in sound with these premium wireless headphones. Featuring active noise-cancellation, long-lasting battery life, and superior comfort for all-day listening.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.9,
    category: 'Electronics',
    featured: true,
    stock: 30,
  },
  {
    id: '3',
    name: 'Elegant Stainless Steel Watch',
    price: 3499.00,
    description: 'Elegant and simple, this beautiful watch is the perfect accessory. It features a stainless steel case, a sleek metal strap, and a clean, easy-to-read face.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.6,
    category: 'Accessories',
    featured: true,
    stock: 50,
  },
  {
    id: '4',
    name: 'Himalayan Herbal Tea Set',
    price: 1499.00,
    description: 'A curated set of premium herbal teas from the Himalayas. Includes Tulsi, Ashwagandha, and Ginger teas. A perfect gift for any tea lover.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.7,
    category: 'Home Goods',
    featured: true,
    stock: 100,
  },
  {
    id: '5',
    name: 'Modern Cotton Kurta',
    price: 2499.00,
    description: 'A stylish and comfortable pure cotton kurta for men. Perfect for festive occasions or casual wear. Features intricate embroidery and a modern fit.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.5,
    category: 'Apparel',
    featured: false,
    stock: 45,
  },
  {
    id: '6',
    name: 'Smart Wi-Fi Power Strip',
    price: 1999.00,
    description: 'Control your home appliances from anywhere with this smart power strip. Compatible with Alexa and Google Assistant. Features 3 smart sockets and 2 USB ports.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.4,
    category: 'Electronics',
    featured: false,
    stock: 25,
  },
  {
    id: '7',
    name: 'Classic Aviator Sunglasses',
    price: 1899.00,
    description: 'Protect your eyes in style with these classic aviator sunglasses. Featuring UV400 protection, polarized lenses, and a lightweight, durable frame. Comes with a protective case.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.8,
    category: 'Accessories',
    featured: false,
    stock: 60,
  },
  {
    id: '8',
    name: 'Assam Orthodox Black Tea',
    price: 899.00,
    description: 'A 250g pack of single-origin Assam black tea. Sourced from the finest tea gardens, this tea has a robust, malty flavor. Perfect for starting your day.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.9,
    category: 'Home Goods',
    featured: false,
    stock: 80,
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
    return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
}

export const getCategories = (): string[] => {
    const categories = products.map(p => p.category);
    return [...new Set(categories)];
}
