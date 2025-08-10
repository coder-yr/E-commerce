
import { collection, getDocs, getDoc, doc, query, where, limit } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { app } from './firebase';
import type { Product, Review } from './db/products';

const db = getFirestore(app);
const productsCollection = collection(db, 'products');

export async function getProducts(): Promise<Product[]> {
  const querySnapshot = await getDocs(productsCollection);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const q = query(productsCollection, where("featured", "==", true));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Product;
  }
  return undefined;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
    const q = query(productsCollection, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
}

export const getCategories = async (): Promise<string[]> => {
    const products = await getProducts();
    const categories = products.map(p => p.category);
    return [...new Set(categories)];
}

// Re-export types
export type { Product, Review };
