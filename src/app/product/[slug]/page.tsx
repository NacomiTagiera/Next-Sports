import { Suspense } from "react";

import { type Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import { ReviewsListSkeleton, TrendingProductsSkeleton } from "@/components/UI/Skeletons";
import { AddToCartButton } from "@/features/cart/components/AddToCartButton";
import { getProductByIdOrSlug } from "@/features/products/productDetails/api/fetchQueries";
import { ProductImage } from "@/features/products/productDetails/components/ProductImage";
import { ProductInfo } from "@/features/products/productDetails/components/ProductInfo";
import { RelatedProducts } from "@/features/products/productDetails/components/RelatedProducts";
import { VariantSelector } from "@/features/products/productDetails/components/VariantSelector";
import { getAllProductsSlugs } from "@/features/products/productsList/api/fetchQueries";
import { ReviewFormWrapper } from "@/features/reviews/reviewForm/components/ReviewFormWrapper";
import { ReviewsList } from "@/features/reviews/reviewsList/components/ReviewsList";

const ReviewForm = dynamic(() =>
	import("@/features/reviews/reviewForm/components/ReviewForm").then((mod) => mod.ReviewForm),
);

interface Props {
	params: {
		slug: string;
	};
}

export const generateStaticParams = async () => {
	const products = await getAllProductsSlugs();

	return products.map((products) => ({ slug: products.slug }));
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const product = await getProductByIdOrSlug({ slug: params.slug });

	return {
		title: product?.name,
		description: product?.description,
		openGraph: {
			title: product?.name,
			description: product?.description,
		},
	};
};

export default async function ProductPage({ params }: Props) {
	const product = await getProductByIdOrSlug({ slug: params.slug });

	if (!product) {
		notFound();
	}

	const {
		id,
		slug,
		categories,
		description,
		images,
		name,
		price,
		rating,
		productColorVariants,
		productSizeVariants,
	} = product;
	const categoriesSlugs = categories.map((category) => category.slug);

	productColorVariants.map((variant) => variant.name);
	productSizeVariants.map((variant) => variant.name);

	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<article className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
				<ProductImage name={name} images={images} />
				<ProductInfo name={name} description={description} price={price} rating={rating}>
					<VariantSelector colors={productColorVariants} sizes={productSizeVariants} />
					<AddToCartButton itemId={id} />
				</ProductInfo>
			</article>
			<Suspense fallback={<TrendingProductsSkeleton />}>
				<RelatedProducts productSlug={slug} categoriesSlugs={categoriesSlugs} />
			</Suspense>
			<div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-16">
				<ReviewFormWrapper productRating={rating}>
					<ReviewForm productId={id} />
				</ReviewFormWrapper>
				<Suspense fallback={<ReviewsListSkeleton />}>
					<ReviewsList productId={id} />
				</Suspense>
			</div>
		</div>
	);
}
