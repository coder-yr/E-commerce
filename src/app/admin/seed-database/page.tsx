
"use client";

import { useState } from 'react';
import { getFirestore, writeBatch, doc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { products } from '@/lib/db/products';
import { users } from '@/lib/db/users';
import { orders } from '@/lib/db/orders';
import { app } from '@/lib/firebase';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function SeedDatabasePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const { toast } = useToast();
  const db = getFirestore(app);

  const handleSeed = async () => {
    setIsLoading(true);
    setLogs([]);
    const newLogs: string[] = [];

    const log = (message: string) => {
      setLogs(prev => [...prev, message]);
      newLogs.push(message);
    }

    try {
      log('Starting database seed process...');
      
      // Seed Products
      log(`Found ${products.length} products to seed.`);
      const productBatch = writeBatch(db);
      products.forEach(product => {
        const docRef = doc(db, "products", product.id);
        // Firestore doesn't like the 'id' field inside the document itself
        const { id, ...productData } = product;
        productBatch.set(docRef, productData);
      });
      await productBatch.commit();
      log('✅ Successfully seeded products collection.');

      // Seed Users
      log(`Found ${users.length} users to seed.`);
      const userBatch = writeBatch(db);
      users.forEach(user => {
        const docRef = doc(db, "users", user.id);
        const { id, ...userData } = user;
        userBatch.set(docRef, userData);
      });
      await userBatch.commit();
      log('✅ Successfully seeded users collection.');

      // Seed Orders
      log(`Found ${orders.length} orders to seed.`);
      const orderBatch = writeBatch(db);
      orders.forEach(order => {
        const docRef = doc(db, "orders", order.id);
        const { id, ...orderData } = order;
        orderBatch.set(docRef, orderData);
      });
      await orderBatch.commit();
      log('✅ Successfully seeded orders collection.');

      log('🎉 Database seeding complete!');
      toast({
        title: "Database Seeded!",
        description: "Your Firestore database has been populated with sample data.",
      });

    } catch (error: any) {
      console.error("Error seeding database:", error);
      log(`❌ Error: ${error.message}`);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was an error seeding the database. Check the console for details.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Seed Database</CardTitle>
          <CardDescription>
            Populate your Firestore database with the initial sample data for products, users, and orders.
            This action will overwrite any existing documents with the same IDs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={handleSeed} disabled={isLoading}>
            {isLoading ? 'Seeding...' : 'Start Seeding'}
          </Button>

          {logs.length > 0 && (
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Seeding Log</AlertTitle>
              <AlertDescription>
                <pre className="mt-2 rounded-md bg-muted p-4 text-xs font-mono overflow-x-auto">
                  {logs.join('\n')}
                </pre>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
