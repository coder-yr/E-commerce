import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { AddToCartButton } from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <CardHeader className="p-0 border-b">
        <Link href={`/product/${product.id}`} className="block">
          <div className="aspect-square w-full relative">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={`${product.category.toLowerCase()} ${product.name.split(' ')[1].toLowerCase()}`}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/product/${product.id}`} className="block">
          <CardTitle className="text-lg font-semibold font-headline tracking-tight hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-bold text-foreground">&#8377;{product.price.toFixed(2)}</p>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-muted-foreground">{product.rating}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}
