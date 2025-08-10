import { getProducts, getCategories } from "@/lib/products";
import { ProductGrid } from "./_components/ProductGrid";

export default function ShopPage() {
  const products = getProducts();
  const categories = getCategories();

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Collection</h1>
        <p className="text-lg text-muted-foreground mt-2">Browse our entire collection of curated goods.</p>
      </div>
      <ProductGrid products={products} categories={categories} />
    </div>
  );
}
