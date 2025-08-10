
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { app } from './firebase';
import type { User } from './db/users';

const db = getFirestore(app);
const usersCollection = collection(db, 'users');

export async function getUsers(): Promise<User[]> {
  const querySnapshot = await getDocs(usersCollection);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User));
}

export type { User };
