import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { NoProductsFound } from "@/components/UI/NoProductsFound";
import { SectionHeader } from "@/components/UI/SectionHeader";
import {
	getProductsBySearch,
	getProductsCountBySearch,
} from "@/features/products/productsList/api/fetchQueries";
import { Pagination } from "@/features/products/productsList/components/Pagination";
import { ProductFilters } from "@/features/products/productsList/components/ProductFilters";
import { ProductList } from "@/features/products/productsList/components/ProductsList";
import { SortDropdown } from "@/features/products/productsList/components/SortDropdown";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";
import { parseSearchParams, safeParseInt } from "@/lib/utils";
import { type PageProps } from "@/types";

export const metadata: Metadata = {
	title: "Search Results",
	description:
		"Find exactly what you're looking for at Next Sports! Browse through a wide selection of premium sportswear, accessories, and gear designed for athletes of all levels. Discover the perfect fit for your sport and elevate your performance with top-quality products.",
	openGraph: {
		title: "Search Results",
		description:
			"Find exactly what you're looking for at Next Sports! Browse through a wide selection of premium sportswear, accessories, and gear designed for athletes of all levels. Discover the perfect fit for your sport and elevate your performance with top-quality products.",
	},
};

interface Props extends PageProps {
	params: {
		pageNumber: string;
	};
}

export default async function SearchPage({ params, searchParams }: Props) {
	if (!searchParams.query) {
		return notFound();
	}

	const page = safeParseInt(params.pageNumber, 1);
	const parsedParams = parseSearchParams(searchParams, page);

	const products = await getProductsBySearch(searchParams.query as string, parsedParams);

	const productsCount = await getProductsCountBySearch(searchParams.query as string, parsedParams);
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<div className="border-b border-zinc-300 pb-16 pt-24">
				<SectionHeader
					title={`Search results for "${searchParams.query as string}"`}
					description={`Found ${products.length} products matching your search term. Did not find what you were looking for? Try different keywords.`}
					id="products-heading"
					className="mb-0"
					headerClassName="text-4xl"
					Tag="h1"
					center
				/>
			</div>
			<div className="flex items-center justify-between pt-6">
				<SortDropdown />
				<ProductFilters />
			</div>
			<div className="mt-8 pb-24">
				{products.length > 0 ? (
					<>
						<ProductList products={products} />
						<Pagination
							numberOfPages={numberOfPages}
							baseUrl="/search"
							searchParams={searchParams}
						/>
					</>
				) : (
					<NoProductsFound />
				)}
			</div>
		</>
	);
}
