import { type Metadata } from "next";

import { NoProductsFound } from "@/components/UI/NoProductsFound";
import { SectionHeader } from "@/components/UI/SectionHeader";
import {
	getProductsCount,
	getProductsList,
} from "@/features/products/productsList/api/fetchQueries";
import { Pagination } from "@/features/products/productsList/components/Pagination";
import { ProductFilters } from "@/features/products/productsList/components/ProductFilters";
import { ProductList } from "@/features/products/productsList/components/ProductsList";
import { SortDropdown } from "@/features/products/productsList/components/SortDropdown";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";
import { parseSearchParams, safeParseInt } from "@/lib/utils";
import { type PageProps } from "@/types";

export const generateStaticParams = async () => {
	const productsCount = await getProductsCount(parseSearchParams({}));
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return Array.from({ length: numberOfPages }, (_, index) => ({
		pageNumber: `${index + 1}`,
	}));
};

export const metadata: Metadata = {
	title: "All Products",
	description:
		"Explore a wide selection of premium sportswear and activewear at Next Sports. Whether you're looking for high-performance gym wear, comfortable running outfits, or stylish yoga apparel, we have it all. Browse our latest collections and gear up for success in your favorite sport!",
	openGraph: {
		title: "All Products",
		description:
			"Explore a wide selection of premium sportswear and activewear at Next Sports. Whether you're looking for high-performance gym wear, comfortable running outfits, or stylish yoga apparel, we have it all. Browse our latest collections and gear up for success in your favorite sport!",
	},
};

interface Props extends PageProps {
	params: {
		pageNumber: string;
	};
}

export default async function ProductsPage({ params, searchParams }: Props) {
	const page = safeParseInt(params.pageNumber, 1);
	const parsedParams = parseSearchParams(searchParams, page);

	const products = await getProductsList(parsedParams);

	const productsCount = await getProductsCount(parsedParams);
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<div className="border-b border-zinc-300 pb-16 pt-24">
				<SectionHeader
					title="All Products"
					description="Explore our wide range of high-quality products. From sports accessories to apparel, we
					have everything you need!"
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
				<h2 className="sr-only">Products List</h2>
				{products.length > 0 ? (
					<>
						<ProductList products={products} priority />
						<Pagination
							numberOfPages={numberOfPages}
							baseUrl="/products"
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
