
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import type { Order } from "@/lib/orders";
import type { User } from "@/lib/users";

interface RecentSalesProps {
    orders: Order[];
    users: User[];
}

export function RecentSales({ orders, users }: RecentSalesProps) {
  const recentOrders = orders.slice(0, 5); // Get the 5 most recent sales

  const getUserById = (userId: string) => {
    return users.find(user => user.id === userId);
  }

  return (
    <div className="space-y-8">
      {recentOrders.map(order => {
        const user = getUserById(order.userId);
        return (
          <div className="flex items-center" key={order.id}>
            <Avatar className="h-9 w-9">
              <AvatarImage src={`https://avatar.vercel.sh/${order.userId}.png`} alt="Avatar" />
              <AvatarFallback>{user ? user.name.split(' ').map(n => n[0]).join('') : 'U'}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{user ? user.name : 'Unknown User'}</p>
              <p className="text-sm text-muted-foreground">
                {user ? user.email : order.customer}
              </p>
            </div>
            <div className="ml-auto font-medium">{order.total}</div>
          </div>
        )
      })}
    </div>
  )
}
