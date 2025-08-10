import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Style Meets Simplicity
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover curated collections and find your new favorite essentials. Quality, style, and convenience, all in one place.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="#featured">
                  Learn more <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                Featured Products
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Handpicked for you. Explore our most popular items.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
