import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { NoProductsFound } from "@/components/UI/NoProductsFound";
import { SectionHeader } from "@/components/UI/SectionHeader";
import {
	getCategoryBySlug,
	getProductsCountInCategory,
} from "@/features/categories/api/fetchQueries";
import { Pagination } from "@/features/products/productsList/components/Pagination";
import { ProductFilters } from "@/features/products/productsList/components/ProductFilters";
import { ProductList } from "@/features/products/productsList/components/ProductsList";
import { SortDropdown } from "@/features/products/productsList/components/SortDropdown";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";
import { parseSearchParams, safeParseInt } from "@/lib/utils";
import { type PageProps } from "@/types";

interface Props extends PageProps {
	params: {
		category: string;
		pageNumber: string;
	};
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const page = safeParseInt(params.pageNumber, 1);
	const category = await getCategoryBySlug(params.category, parseSearchParams({}, page));

	return {
		title: category?.name,
		description: category?.description,
		openGraph: {
			title: category?.name,
			description: category?.description ?? "",
		},
	};
};

export default async function CategoryPage({ params, searchParams }: Props) {
	const page = safeParseInt(params.pageNumber, 1);
	const parsedParams = parseSearchParams(searchParams, page);

	const category = await getCategoryBySlug(params.category, parsedParams);

	if (!category) {
		return notFound();
	}

	const productsCount = await getProductsCountInCategory(params.category, parsedParams);
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<div className="border-b border-zinc-300 pb-16 pt-24">
				<SectionHeader
					title={category.name}
					description={`Check out our ${category.name}. Get what you need to stay active and stylish!`}
					id="products-heading"
					className="mb-0"
					headerClassName="text-4xl capitalize"
					Tag="h1"
					center
				/>
			</div>
			<div className="flex items-center justify-between pt-6">
				<SortDropdown />
				<ProductFilters />
			</div>
			<div className="mt-8 pb-24">
				{category.products.length > 0 ? (
					<>
						<ProductList products={category.products} />
						<Pagination
							numberOfPages={numberOfPages}
							baseUrl={`/categories/${category.slug}`}
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
