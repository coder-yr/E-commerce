
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-square relative w-full">
            <Image
              src={selectedImage}
              alt={`Main image of ${productName}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={cn(
              "overflow-hidden rounded-md focus:ring-2 focus:ring-ring focus:ring-offset-2",
              selectedImage === image && "ring-2 ring-primary ring-offset-2"
            )}
          >
            <div className="aspect-square relative w-full">
              <Image
                src={image}
                alt={`Thumbnail ${index + 1} of ${productName}`}
                fill
                className="object-cover"
                sizes="10vw"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
