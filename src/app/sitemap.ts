import type { MetadataRoute } from "next";

import { getProductsCountInCategory } from "@/features/categories/api/fetchQueries";
import {
	getAllProductsSlugs,
	getProductsCount,
} from "@/features/products/productsList/api/fetchQueries";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";
import { parseSearchParams } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://next-sports-ecommerce.vercel.app";

	const staticRoutes = [
		"/",
		"/cart",
		"/cart/success",
		"/checkout",
		"/sign-in",
		"/sign-up",
		"/profile",
		"/orders",
		"/about",
		"/contact",
		"/cookies",
		"/faq",
		"/privacy-policy",
		"/terms-of-service",
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
	}));

	const dynamicRoutes = [];

	const productsCount = await getProductsCount(parseSearchParams({}));
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);
	for (let i = 1; i <= numberOfPages; i++) {
		dynamicRoutes.push({
			url: `${baseUrl}/products/${i}`,
			lastModified: new Date(),
		});
	}

	const categories = ["t-shirts", "hoodies", "accessories"];
	for (const category of categories) {
		const productsCount = await getProductsCountInCategory(category, parseSearchParams({}));
		const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);
		for (let i = 1; i <= numberOfPages; i++) {
			dynamicRoutes.push({
				url: `${baseUrl}/products/${category}/${i}`,
				lastModified: new Date(),
			});
		}
	}

	const collections = ["urban-athleisure", "new-arrivals", "summer-vibes", "elegant-extras"];
	for (const collection of collections) {
		const productsCount = await getProductsCount(parseSearchParams({ collection }));
		const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);
		for (let i = 1; i <= numberOfPages; i++) {
			dynamicRoutes.push({
				url: `${baseUrl}/products/${collection}/${i}`,
				lastModified: new Date(),
			});
		}
	}

	const productsSlugs = await getAllProductsSlugs();
	for (const product of productsSlugs) {
		dynamicRoutes.push({
			url: `${baseUrl}/product/${product.slug}`,
			lastModified: new Date(),
		});
	}

	return [...staticRoutes, ...dynamicRoutes];
}
