import { getProductById } from '@/lib/products';
import { notFound } from 'next/navigation';
import { Star } from 'lucide-react';
import { AddToCartForm } from './_components/AddToCartForm';
import { ImageGallery } from './_components/ImageGallery';

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
          <ImageGallery images={product.images} productName={product.name}/>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-headline">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                </div>
                <span className="text-sm text-muted-foreground">{product.rating} / 5</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-primary">&#8377;{product.price.toFixed(2)}</p>
          
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          
          <div className="mt-8">
            <AddToCartForm product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
