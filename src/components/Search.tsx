
"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search as SearchIcon, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { searchProducts, type Product } from "@/lib/products";
import { useDebounce } from "@/hooks/useDebounce";

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const performSearch = useCallback(async () => {
    if (debouncedSearchTerm) {
      setIsLoading(true);
      const foundProducts = await searchProducts(debouncedSearchTerm);
      setResults(foundProducts);
      setIsLoading(false);
      setIsPopoverOpen(true);
    } else {
      setResults([]);
      setIsPopoverOpen(false);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    performSearch();
  }, [performSearch]);

  const handleResultClick = () => {
    setIsPopoverOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative">
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <div className="relative w-full">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full rounded-lg bg-card pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => {
                if(results.length > 0) setIsPopoverOpen(true);
              }}
            />
            {isLoading && <Loader2 className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground animate-spin" />}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
          <div className="max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="py-2">
                {results.map((product, index) => (
                  <div key={product.id}>
                    <Link href={`/product/${product.id}`} onClick={handleResultClick}>
                      <div className="flex items-center gap-4 px-4 py-2 hover:bg-muted">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-sm truncate">{product.name}</p>
                          <p className="text-xs text-muted-foreground">&#8377;{product.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </Link>
                    {index < results.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            ) : (
                !isLoading && debouncedSearchTerm && (
                    <p className="p-4 text-center text-sm text-muted-foreground">No products found.</p>
                )
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
