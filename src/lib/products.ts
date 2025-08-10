
import { products as dbProducts } from './db/products';
import type { Product, Review } from './db/products';


export function getProducts(): Product[] {
  return dbProducts;
}

export function getFeaturedProducts(): Product[] {
  return dbProducts.filter((product) => product.featured);
}

export function getProductById(id: string): Product | undefined {
  return dbProducts.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
    return dbProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
}

export const getCategories = (): string[] => {
    const categories = dbProducts.map(p => p.category);
    return [...new Set(categories)];
}

// Re-export types
export type { Product, Review };
