
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { app } from './firebase';
import type { Order } from './db/orders';

const db = getFirestore(app);
const ordersCollection = collection(db, 'orders');

export async function getOrders(): Promise<Order[]> {
  const querySnapshot = await getDocs(ordersCollection);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
}

export type { Order };
