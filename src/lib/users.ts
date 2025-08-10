
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { app } from './firebase';
import type { User } from './db/users';

const db = getFirestore(app);
const usersCollection = collection(db, 'users');

export async function getUsers(): Promise<User[]> {
  const querySnapshot = await getDocs(usersCollection);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User));
}

// A mock function to get a sample User ID for new orders.
// In a real app, the user's domain-specific ID would be stored in their auth profile or a user document.
// For now, we'll find a sample user based on their email.
export const getSampleUserId = async (email: string): Promise<string | null> => {
    if (email === 'admin@shopsphere.com') return null; // Admins don't place orders in this demo
    
    const q = query(usersCollection, where("email", "==", email), limit(1));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].id;
    }
    
    // Fallback for newly signed up users not in the seed data
    const allUsersSnapshot = await getDocs(query(usersCollection, limit(1)));
    return allUsersSnapshot.empty ? null : allUsersSnapshot.docs[0].id;
};


export type { User };
