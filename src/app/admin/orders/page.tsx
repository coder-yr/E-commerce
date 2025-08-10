
"use client";

import { MoreHorizontal, FileDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getOrders, type Order } from "@/lib/orders";
import { useEffect, useState, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";
import { getUserById, type User } from "@/lib/users";
import Link from "next/link";

export default function OrdersPage() {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  const [customer, setCustomer] = useState<User | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const fetchedOrders = await getOrders();
      setAllOrders(fetchedOrders);
       if (userId) {
          const user = await getUserById(userId);
          setCustomer(user || null);
       }
      setLoading(false);
    }
    fetchOrders();
  }, [userId]);

  const filteredOrders = useMemo(() => {
    if (!userId) return allOrders;
    return allOrders.filter(order => order.userId === userId);
  }, [allOrders, userId]);

  const handleExport = () => {
    const headers = ["ID", "Customer", "User ID", "Date", "Status", "Total"];
    const rows = filteredOrders.map(o => [o.id, `"${o.customer}"`, o.userId, o.date, o.status, `"${o.total}"`].join(','));
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "orders.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-start">
        <div>
          <CardTitle>{customer ? `${customer.name}'s Orders` : 'Orders'}</CardTitle>
          <CardDescription>
            {customer ? `Viewing all orders for ${customer.name}.` : 'Manage your orders and view their status.'}
          </CardDescription>
        </div>
        <div>
           <Button size="sm" variant="outline" className="h-8 gap-1" onClick={handleExport}>
                <FileDown className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
        ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
               <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge variant={order.status === 'Fulfilled' ? "default" : order.status === 'Pending' ? "secondary" : "destructive"}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{order.total}</TableCell>
                <TableCell>
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link href={`/account/orders/${order.id}`}>View Details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Update Status</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
             {filteredOrders.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        )}
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-{filteredOrders.length}</strong> of <strong>{filteredOrders.length}</strong> orders
        </div>
      </CardFooter>
    </Card>
  );
}
