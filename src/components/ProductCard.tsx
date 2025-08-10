
"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Heart } from 'lucide-react';
import { AddToCartButton } from './AddToCartButton';
import { useWishlist } from '@/hooks/useWishlist';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const [isClient, setIsClient] = useState(false);
    const { toast } = useToast();
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const isInWishlist = isClient && wishlist.some((item) => item.id === product.id);

    const handleWishlistClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        if (!user) {
          router.push("/login");
          return;
        }
        if (isInWishlist) {
            removeFromWishlist(product.id);
             toast({
                title: "Removed from wishlist",
                description: `${product.name} has been removed from your wishlist.`,
                duration: 3000,
            });
        } else {
            addToWishlist(product);
            toast({
                title: "Added to wishlist!",
                description: `${product.name} has been added to your wishlist.`,
                duration: 3000,
            });
        }
    }, [user, router, isInWishlist, removeFromWishlist, product.id, product.name, addToWishlist, toast]);

  return (
    <Card className="w-full h-full flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 group">
      <CardHeader className="p-0 border-b relative">
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
        <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/60 hover:bg-background/80"
            onClick={handleWishlistClick}
        >
            <Heart className={cn("h-5 w-5 text-destructive", isInWishlist && "fill-destructive")} />
        </Button>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <Link href={`/product/${product.id}`} className="block flex-grow">
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
        <AddToCartButton product={product} className="w-full" />
      </CardFooter>
    </Card>
  );
}
