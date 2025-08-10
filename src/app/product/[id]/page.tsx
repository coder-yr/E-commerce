import { getProductById } from '@/lib/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AddToCartForm } from './_components/AddToCartForm';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square relative w-full">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={`${product.category.toLowerCase()} ${product.name.split(' ')[1].toLowerCase()}`}
                />
              </div>
            </CardContent>
          </Card>
          {/* A simple gallery could go here */}
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold font-headline">{product.name}</h1>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-3xl font-bold text-primary">&#8377;{product.price.toFixed(2)}</p>
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span>{product.rating} / 5</span>
              <span className="text-muted-foreground ml-2">({product.stock} in stock)</span>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>
          <div className="mt-8">
            <AddToCartForm product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
