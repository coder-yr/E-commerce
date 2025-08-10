
export interface Order {
    id: string;
    userId: string;
    customer: string;
    date: string;
    status: 'Fulfilled' | 'Pending' | 'Cancelled' | 'Shipped' | 'Processing';
    total: string;
    items: { name: string; quantity: number }[];
}

export const orders: Order[] = [
    { 
        id: 'ORD001', 
        userId: 'USR001',
        customer: 'John Doe', 
        date: '2024-05-01', 
        status: 'Fulfilled', 
        total: '₹2,500.00',
        items: [
            { name: 'Modern Cotton Kurta', quantity: 1 }
        ]
    },
    { 
        id: 'ORD002', 
        userId: 'USR002',
        customer: 'Jane Smith', 
        date: '2024-05-02', 
        status: 'Shipped', 
        total: '₹1,250.50',
        items: [
            { name: 'Himalayan Herbal Tea Set', quantity: 1 }
        ]
    },
    { 
        id: 'ORD003', 
        userId: 'USR003',
        customer: 'Ravi Kumar', 
        date: '2024-05-02', 
        status: 'Processing', 
        total: '₹4,800.00',
        items: [
            { name: 'Elegant Steel Watch', quantity: 1 },
            { name: 'Organic Green Tea Face Wash', quantity: 2 }
        ]
    },
    { 
        id: 'ORD004', 
        userId: 'USR004',
        customer: 'Priya Sharma', 
        date: '2024-05-03', 
        status: 'Cancelled', 
        total: '₹750.00',
        items: [
            { name: 'The Midnight Library', quantity: 1 }
        ]
    },
    { 
        id: 'ORD005', 
        userId: 'USR001',
        customer: 'John Doe', 
        date: '2024-05-04', 
        status: 'Fulfilled', 
        total: '₹3,200.75',
        items: [
            { name: 'Eco-Friendly Yoga Mat', quantity: 1 },
            { name: 'Minimalist Ceramic Vase', quantity: 1 }
        ]
    },
]
