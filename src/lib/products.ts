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
    name: 'Classic Leather Jacket',
    price: 149.99,
    description: 'A timeless leather jacket made from 100% genuine leather. Perfect for any occasion, offering both style and durability. Features multiple pockets and a comfortable inner lining.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.8,
    category: 'Apparel',
    featured: true,
    stock: 15,
  },
  {
    id: '2',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 249.99,
    description: 'Immerse yourself in sound with these premium wireless headphones. Featuring active noise-cancellation, long-lasting battery life, and superior comfort for all-day listening.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.9,
    category: 'Electronics',
    featured: true,
    stock: 30,
  },
  {
    id: '3',
    name: 'Minimalist Wristwatch',
    price: 99.50,
    description: 'Elegant and simple, this minimalist watch is the perfect accessory. It features a stainless steel case, a genuine leather strap, and a clean, easy-to-read face.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.6,
    category: 'Accessories',
    featured: true,
    stock: 50,
  },
  {
    id: '4',
    name: 'Organic Green Tea Set',
    price: 29.99,
    description: 'A curated set of premium organic green teas. Includes Sencha, Matcha, and Bancha varieties, sourced from the finest tea gardens. A perfect gift for any tea lover.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.7,
    category: 'Home Goods',
    featured: true,
    stock: 100,
  },
  {
    id: '5',
    name: 'Running Shoes',
    price: 120.00,
    description: 'High-performance running shoes designed for comfort and speed. Features a lightweight mesh upper, responsive cushioning, and a durable outsole for all terrains.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.5,
    category: 'Apparel',
    featured: false,
    stock: 45,
  },
  {
    id: '6',
    name: 'Smart Home Hub',
    price: 89.99,
    description: 'Control all your smart devices from one central hub. Compatible with Alexa, Google Assistant, and Apple HomeKit. Simplify your life with voice commands and automation.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.4,
    category: 'Electronics',
    featured: false,
    stock: 25,
  },
  {
    id: '7',
    name: 'Designer Sunglasses',
    price: 180.00,
    description: 'Protect your eyes in style with these designer sunglasses. Featuring UV400 protection, polarized lenses, and a lightweight, durable frame. Comes with a protective case.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    rating: 4.8,
    category: 'Accessories',
    featured: false,
    stock: 60,
  },
  {
    id: '8',
    name: 'Artisan Coffee Beans',
    price: 22.50,
    description: 'A 12oz bag of single-origin artisan coffee beans, medium roast. Ethically sourced and roasted in small batches to ensure maximum flavor and freshness. Notes of chocolate and citrus.',
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
