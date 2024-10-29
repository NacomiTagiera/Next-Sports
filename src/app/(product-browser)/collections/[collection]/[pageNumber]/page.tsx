import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { NoProductsFound } from "@/components/UI/NoProductsFound";
import { SectionHeader } from "@/components/UI/SectionHeader";
import {
	getCollectionBySlug,
	getProductsCountInCollection,
} from "@/features/collections/api/fetchQueries";
import { Pagination } from "@/features/products/productsList/components/Pagination";
import { ProductFilters } from "@/features/products/productsList/components/ProductFilters";
import { ProductList } from "@/features/products/productsList/components/ProductsList";
import { SortDropdown } from "@/features/products/productsList/components/SortDropdown";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";
import { parseSearchParams, safeParseInt } from "@/lib/utils";

interface Props {
	params: { collection: string; pageNumber: string };
	searchParams: { [key: string]: string | string[] | undefined };
}

export const generateStaticParams = async () => {
	const collections = ["urban-athleisure", "new-arrivals", "summer-vibes", "elegant-extras"];
	const paramsArray: { collection: string; pageNumber: string }[] = [];

	for (const collection of collections) {
		const productsCount = await getProductsCountInCollection(collection, parseSearchParams({}));
		const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

		for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
			paramsArray.push({ collection, pageNumber: pageNumber.toString() });
		}
	}

	return paramsArray;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const page = safeParseInt(params.pageNumber, 1);
	const collection = await getCollectionBySlug(params.collection, parseSearchParams({}, page));

	return {
		title: collection?.name,
		description: collection?.description,
		openGraph: {
			title: collection?.name,
			description: collection?.description ?? "",
		},
	};
};

export default async function CollectionPage({ params, searchParams }: Props) {
	const page = safeParseInt(params.pageNumber, 1);
	const parsedParams = parseSearchParams(searchParams, page);

	const collection = await getCollectionBySlug(params.collection, parsedParams);

	if (!collection) {
		return notFound();
	}

	const productsCount = await getProductsCountInCollection(params.collection, parsedParams);
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<div className="border-b border-zinc-300 pb-16 pt-24">
				<SectionHeader
					title={collection.name}
					description={`Check out the ${collection.name} collection. Get what you need to stay active and stylish!`}
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
				{collection.products.length > 0 ? (
					<>
						<ProductList products={collection.products} />
						<Pagination
							numberOfPages={numberOfPages}
							baseUrl={`/collections/${collection.slug}`}
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
