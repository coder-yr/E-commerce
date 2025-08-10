
"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddToCartButton } from "@/components/AddToCartButton";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ShoppingBag } from "lucide-react";

interface AddToCartFormProps {
  product: Product;
}

export function AddToCartForm({ product }: AddToCartFormProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();


  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => {
      const newQuantity = prev + change;
      if (newQuantity < 1) return 1;
      if (newQuantity > product.stock) return product.stock;
      return newQuantity;
    });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push('/cart');
  };

  return (
    <div className="space-y-4">
        <div className="flex items-center gap-4">
            <Label htmlFor="quantity" className="text-sm font-medium">Quantity:</Label>
            <div className="flex items-center border rounded-md w-28">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                -
                </Button>
                <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        if (value > 0 && value <= product.stock) {
                            setQuantity(value);
                        }
                    }}
                    className="w-12 text-center border-0 focus-visible:ring-0 h-8"
                    min="1"
                    max={product.stock}
                />
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(1)} disabled={quantity >= product.stock}>
                +
                </Button>
            </div>
            <span className="text-sm text-muted-foreground">({product.stock} in stock)</span>
      </div>
      <div className="flex gap-4">
        <AddToCartButton product={product} quantity={quantity} className="flex-1" />
        <Button onClick={handleBuyNow} variant="outline" className="flex-1">
            <ShoppingBag className="mr-2 h-5 w-5"/>
            Buy Now
        </Button>
      </div>
    </div>
  );
}

// Add Label component to avoid prop-types error
const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => (
    <label {...props} />
)
