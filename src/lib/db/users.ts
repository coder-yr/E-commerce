
export interface User {
    id: string;
    name: string;
    email: string;
    orders: number;
    totalSpent: string;
}

export const users: User[] = [
  { id: 'USR001', name: 'John Doe', email: 'john.d@example.com', orders: 5, totalSpent: '₹12,500' },
  { id: 'USR002', name: 'Jane Smith', email: 'jane.s@example.com', orders: 2, totalSpent: '₹3,450' },
  { id: 'USR003', name: 'Ravi Kumar', email: 'ravi.k@example.com', orders: 8, totalSpent: '₹25,800' },
  { id: 'USR004', name: 'Priya Sharma', email: 'priya.s@example.com', orders: 1, totalSpent: '₹750' },
  { id: 'USR005', name: 'Amit Singh', email: 'amit.s@example.com', orders: 12, totalSpent: '₹41,200' },
];
