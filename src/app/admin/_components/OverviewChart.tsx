
"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import type { Order } from "@/lib/orders"

interface OverviewChartProps {
    orders: Order[];
}

export function OverviewChart({ orders }: OverviewChartProps) {
  const monthlyRevenue = orders.reduce((acc, order) => {
    const month = new Date(order.date).toLocaleString('default', { month: 'short' });
    const orderTotal = parseFloat(order.total.replace(/[^0-9.-]+/g, ""));
    
    if (!isNaN(orderTotal)) {
        acc[month] = (acc[month] || 0) + orderTotal;
    }

    return acc;
  }, {} as Record<string, number>);

  const data = Object.keys(monthlyRevenue).map(month => ({
    name: month,
    total: monthlyRevenue[month],
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₹${value}`}
        />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}
