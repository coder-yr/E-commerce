"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddToCartButton } from "@/components/AddToCartButton";

interface AddToCartFormProps {
  product: Product;
}

export function AddToCartForm({ product }: AddToCartFormProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => {
      const newQuantity = prev + change;
      if (newQuantity < 1) return 1;
      if (newQuantity > product.stock) return product.stock;
      return newQuantity;
    });
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border rounded-md">
        <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
          -
        </Button>
        <Input
            type="number"
            value={quantity}
            onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                if (value > 0 && value <= product.stock) {
                    setQuantity(value);
                }
            }}
            className="w-16 text-center border-0 focus-visible:ring-0"
            min="1"
            max={product.stock}
        />
        <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} disabled={quantity >= product.stock}>
          +
        </Button>
      </div>
      <AddToCartButton product={product} quantity={quantity} className="flex-1" />
    </div>
  );
}
