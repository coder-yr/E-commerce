
"use client";

import { useState } from 'react';
import type { Product, Review } from '@/lib/products';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Star, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

interface ProductReviewsProps {
  product: Product;
}

export function ProductReviews({ product }: ProductReviewsProps) {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const { toast } = useToast();

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === '') {
        toast({
            title: "Incomplete review",
            description: "Please provide a rating and a comment.",
            variant: "destructive"
        })
      return;
    }
    // In a real app, you would submit this to your backend
    console.log({
      productId: product.id,
      userId: user?.uid,
      rating,
      comment,
    });
    toast({
        title: "Review submitted!",
        description: "Thank you for your feedback."
    })
    setRating(0);
    setComment('');
  };

  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
            {product.reviews.length > 0 ? (
                <div className="space-y-6">
                    {product.reviews.map((review) => (
                        <div key={review.id} className="flex gap-4">
                            <Avatar>
                                <AvatarImage src={`https://avatar.vercel.sh/${review.author}.png`} />
                                <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold">{review.author}</p>
                                    <span className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-1 my-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground">{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-muted-foreground">This product has no reviews yet. Be the first to leave one!</p>
            )}

            <Separator className="my-8" />

            <div>
                <h3 className="text-xl font-headline font-semibold mb-4">Write a Review</h3>
                {user ? (
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                        <div>
                            <label className="font-medium mb-2 block">Your Rating</label>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-6 w-6 cursor-pointer ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                        onClick={() => setRating(i + 1)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="comment" className="font-medium mb-2 block">Your Review</label>
                            <Textarea
                                id="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder={`What did you like or dislike about the ${product.name}?`}
                                rows={4}
                            />
                        </div>
                        <Button type="submit">Submit Review</Button>
                    </form>
                ) : (
                    <div className="text-center p-6 border rounded-lg">
                        <p className="text-muted-foreground mb-4">You must be logged in to write a review.</p>
                        <Button asChild>
                            <Link href="/login">Login to Review</Link>
                        </Button>
                    </div>
                )}
            </div>
        </CardContent>
    </Card>
  );
}
