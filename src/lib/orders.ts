
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { app } from './firebase';
import type { Order } from './db/orders';

const db = getFirestore(app);
const ordersCollection = collection(db, 'orders');

export async function getOrders(): Promise<Order[]> {
  const querySnapshot = await getDocs(ordersCollection);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
}

export async function getOrderById(id: string): Promise<Order | undefined> {
    const docRef = doc(db, "orders", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Order;
    }
    return undefined;
}

export async function getOrdersByUserId(userId: string): Promise<Order[]> {
    const q = query(ordersCollection, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
}


export type { Order };
