import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DollarSign, Package, ShoppingCart } from 'lucide-react';
import { OverviewChart } from './_components/OverviewChart';
import { RecentSales } from './_components/RecentSales';
import { getOrders } from '@/lib/orders';
import { getProducts } from '@/lib/products';
import { getUsers } from '@/lib/users';

export default async function Dashboard() {
  const orders = await getOrders();
  const products = await getProducts();
  const users = await getUsers();

  const totalRevenue = orders.reduce((acc, order) => {
    // Remove currency symbol and commas before parsing
    const orderTotal = parseFloat(order.total.replace(/[^0-9.-]+/g,""));
    return acc + (isNaN(orderTotal) ? 0 : orderTotal);
  }, 0);

  const totalSales = orders.length;
  const totalProductsInStock = products.reduce((acc, product) => acc + product.stock, 0);


  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">&#8377;{totalRevenue.toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{totalSales}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Products in Stock</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalProductsInStock}</div>
        </CardContent>
      </Card>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <OverviewChart orders={orders} />
        </CardContent>
      </Card>
      <Card className="col-span-4 md:col-span-2">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>
            You made {totalSales} sales this month.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentSales orders={orders} users={users} />
        </CardContent>
      </Card>
    </div>
  );
}
