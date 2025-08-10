
export interface Order {
    id: string;
    customer: string;
    date: string;
    status: 'Fulfilled' | 'Pending' | 'Cancelled';
    total: string;
}

export const orders: Order[] = [
    { id: 'ORD001', customer: 'John Doe', date: '2024-05-01', status: 'Fulfilled', total: '₹2,500.00' },
    { id: 'ORD002', customer: 'Jane Smith', date: '2024-05-02', status: 'Pending', total: '₹1,250.50' },
    { id: 'ORD003', customer: 'Ravi Kumar', date: '2024-05-02', status: 'Fulfilled', total: '₹4,800.00' },
    { id: 'ORD004', customer: 'Priya Sharma', date: '2024-05-03', status: 'Cancelled', total: '₹750.00' },
    { id: 'ORD005', customer: 'Amit Singh', date: '2024-05-04', status: 'Fulfilled', total: '₹3,200.75' },
]
