
"use client";

import Link from "next/link";
import { useWishlist } from "@/hooks/useWishlist";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-20 text-center">
        <Heart className="mx-auto h-16 w-16 text-muted-foreground" />
        <h1 className="mt-6 text-3xl font-headline font-bold">Your Wishlist is Empty</h1>
        <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your wishlist yet.</p>
        <Button asChild className="mt-6">
          <Link href="/shop">Explore Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">My Wishlist</h1>
        <p className="text-lg text-muted-foreground mt-2">The products you've saved for later.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
