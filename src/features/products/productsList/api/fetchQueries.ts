import {
	ProductsGetAllSlugsDocument,
	ProductsGetBySearchDocument,
	ProductsGetCountBySearchDocument,
	ProductsGetCountDocument,
	ProductsGetListDocument,
} from "@/graphql/generated/graphql";
import { executeGraphql } from "@/lib/executeGraphql";
import { paginationArgs } from "@/lib/utils";
import { type ProductQueryParams } from "@/types";

export const getProductsList = async (params: ProductQueryParams) => {
	const { products } = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			...params,
			...paginationArgs(params.page),
		},
		next: {
			revalidate: 60 * 10, // 10 mins
		},
	});

	return products;
};

export const getProductsBySearch = async (query: string, params: ProductQueryParams) => {
	const { products } = await executeGraphql({
		query: ProductsGetBySearchDocument,
		variables: {
			search: query,
			...params,
			...paginationArgs(params.page),
		},
	});

	return products;
};

export const getAllProductsSlugs = async () => {
	const { products } = await executeGraphql({
		query: ProductsGetAllSlugsDocument,
	});

	return products;
};

export const getProductsCount = async (params: Omit<ProductQueryParams, "page">) => {
	const res = await executeGraphql({
		query: ProductsGetCountDocument,
		variables: {
			...params,
		},
	});

	return res.productsConnection.aggregate.count;
};

export const getProductsCountBySearch = async (
	query: string,
	params: Omit<ProductQueryParams, "page">,
) => {
	const res = await executeGraphql({
		query: ProductsGetCountBySearchDocument,
		variables: {
			search: query,
			...params,
		},
	});

	return res.productsConnection.aggregate.count;
};
