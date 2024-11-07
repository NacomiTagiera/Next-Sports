/* eslint-disable */
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
	"fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      slug\n      name\n      price\n      images {\n        url\n      }\n    }\n  }\n}":
		types.CartFragmentDoc,
	"fragment CategoryListItem on Category {\n  slug\n  name\n}": types.CategoryListItemFragmentDoc,
	"fragment CollectionListItem on Collection {\n  slug\n  name\n}":
		types.CollectionListItemFragmentDoc,
	"fragment Order on Order {\n  updatedAt\n  ...Cart\n}": types.OrderFragmentDoc,
	"fragment ProductDetails on Product {\n  id\n  slug\n  name\n  description\n  price\n  rating\n  categories {\n    ...CategoryListItem\n  }\n  images {\n    url\n  }\n  productSizeVariants {\n    name\n  }\n  productColorVariants {\n    name\n  }\n}":
		types.ProductDetailsFragmentDoc,
	"fragment ProductListItem on Product {\n  id\n  slug\n  name\n  price\n  rating\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n}":
		types.ProductListItemFragmentDoc,
	"fragment Review on Review {\n  id\n  name\n  email\n  rating\n  headline\n  content\n  createdAt\n}":
		types.ReviewFragmentDoc,
	"mutation CartAddItem($orderId: ID!, $itemId: ID!, $price: Int!, $quantity: Int!) {\n  upsertOrderItem(\n    where: {id: $orderId}\n    upsert: {create: {quantity: 1, total: $price, order: {connect: {id: $orderId}}, product: {connect: {id: $itemId}}}, update: {quantity: $quantity, total: $price}}\n  ) {\n    id\n  }\n}":
		types.CartAddItemDocument,
	"mutation CartChangeItemQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}":
		types.CartChangeItemQuantityDocument,
	"mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}":
		types.CartCreateDocument,
	"mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}":
		types.CartRemoveItemDocument,
	"mutation OrderUpdateAfterPayment($id: ID!, $email: String!, $stripeCheckoutId: String!) {\n  updateOrder(\n    data: {email: $email, stripeCheckoutId: $stripeCheckoutId}\n    where: {id: $id}\n  ) {\n    id\n  }\n}":
		types.OrderUpdateAfterPaymentDocument,
	"mutation ProductUpdateRating($productId: ID!, $rating: Float!) {\n  updateProduct(where: {id: $productId}, data: {rating: $rating}) {\n    id\n  }\n  publishProduct(where: {id: $productId}) {\n    id\n  }\n}":
		types.ProductUpdateRatingDocument,
	"mutation ReviewCreate($productId: ID!, $headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!) {\n  createReview(\n    data: {product: {connect: {id: $productId}}, headline: $headline, content: $content, rating: $rating, name: $name, email: $email}\n  ) {\n    id\n  }\n}":
		types.ReviewCreateDocument,
	"mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}":
		types.ReviewPublishDocument,
	"query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}":
		types.CartGetByIdDocument,
	"query CategoriesGetList($includeImg: Boolean = false) {\n  categories {\n    ...CategoryListItem\n    image @include(if: $includeImg) {\n      url\n    }\n  }\n}":
		types.CategoriesGetListDocument,
	"query CategoryGetBySlug($category: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {\n  category(where: {slug: $category}) {\n    ...CategoryListItem\n    description\n    products(\n      where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n      first: $limit\n      skip: $offset\n      orderBy: $orderBy\n    ) {\n      ...ProductListItem\n    }\n  }\n}":
		types.CategoryGetBySlugDocument,
	"query CollectionGetBySlug($collection: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {\n  collection(where: {slug: $collection}) {\n    ...CollectionListItem\n    description\n    image {\n      url\n    }\n    products(\n      where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n      first: $limit\n      skip: $offset\n      orderBy: $orderBy\n    ) {\n      ...ProductListItem\n    }\n  }\n}":
		types.CollectionGetBySlugDocument,
	"query CollectionsGetList($includeImg: Boolean = false, $includeDescription: Boolean = false) {\n  collections {\n    ...CollectionListItem\n    description @include(if: $includeDescription)\n    image @include(if: $includeImg) {\n      url\n    }\n  }\n}":
		types.CollectionsGetListDocument,
	"query OrdersGetByEmail($email: String!) {\n  orders(where: {email: $email}, stage: DRAFT, orderBy: updatedAt_DESC) {\n    ...Order\n  }\n}":
		types.OrdersGetByEmailDocument,
	"query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}":
		types.ProductGetByIdDocument,
	"query ProductGetBySlug($slug: String!) {\n  product(where: {slug: $slug}) {\n    ...ProductDetails\n  }\n}":
		types.ProductGetBySlugDocument,
	"query ProductsGetAllSlugs {\n  products {\n    slug\n  }\n}": types.ProductsGetAllSlugsDocument,
	"query ProductsGetBySearch($search: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {\n  products(\n    where: {AND: [{_search: $search}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n    first: $limit\n    skip: $offset\n    orderBy: $orderBy\n  ) {\n    ...ProductListItem\n  }\n}":
		types.ProductsGetBySearchDocument,
	"query ProductsGetCount($priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {\n  productsConnection(\n    where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}":
		types.ProductsGetCountDocument,
	"query ProductsGetCountBySearch($search: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {\n  productsConnection(\n    where: {AND: [{_search: $search}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}":
		types.ProductsGetCountBySearchDocument,
	"query ProductsGetCountInCategory($slug: String, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {\n  productsConnection(\n    where: {AND: [{categories_some: {slug: $slug}}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}":
		types.ProductsGetCountInCategoryDocument,
	"query ProductsGetCountInCollection($slug: String, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {\n  productsConnection(\n    where: {AND: [{collections_some: {slug: $slug}}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}":
		types.ProductsGetCountInCollectionDocument,
	"query ProductsGetList($priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {\n  products(\n    where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n    first: $limit\n    skip: $offset\n    orderBy: $orderBy\n  ) {\n    ...ProductListItem\n  }\n}":
		types.ProductsGetListDocument,
	"query ProductsGetRelated($slug: String!, $categoriesSlugs: [String!]) {\n  products(\n    where: {slug_not: $slug, AND: {categories_some: {slug_in: $categoriesSlugs}}}\n    first: 4\n  ) {\n    ...ProductListItem\n  }\n}":
		types.ProductsGetRelatedDocument,
	"query ReviewsGetByProductId($productId: ID!) {\n  reviews(where: {product: {id: $productId}}, orderBy: createdAt_DESC) {\n    ...Review\n  }\n}":
		types.ReviewsGetByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      slug\n      name\n      price\n      images {\n        url\n      }\n    }\n  }\n}",
): typeof import("./graphql").CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment CategoryListItem on Category {\n  slug\n  name\n}",
): typeof import("./graphql").CategoryListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment CollectionListItem on Collection {\n  slug\n  name\n}",
): typeof import("./graphql").CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment Order on Order {\n  updatedAt\n  ...Cart\n}",
): typeof import("./graphql").OrderFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment ProductDetails on Product {\n  id\n  slug\n  name\n  description\n  price\n  rating\n  categories {\n    ...CategoryListItem\n  }\n  images {\n    url\n  }\n  productSizeVariants {\n    name\n  }\n  productColorVariants {\n    name\n  }\n}",
): typeof import("./graphql").ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment ProductListItem on Product {\n  id\n  slug\n  name\n  price\n  rating\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n}",
): typeof import("./graphql").ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment Review on Review {\n  id\n  name\n  email\n  rating\n  headline\n  content\n  createdAt\n}",
): typeof import("./graphql").ReviewFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation CartAddItem($orderId: ID!, $itemId: ID!, $price: Int!, $quantity: Int!) {\n  upsertOrderItem(\n    where: {id: $orderId}\n    upsert: {create: {quantity: 1, total: $price, order: {connect: {id: $orderId}}, product: {connect: {id: $itemId}}}, update: {quantity: $quantity, total: $price}}\n  ) {\n    id\n  }\n}",
): typeof import("./graphql").CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation CartChangeItemQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}",
): typeof import("./graphql").CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}",
): typeof import("./graphql").CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}",
): typeof import("./graphql").CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation OrderUpdateAfterPayment($id: ID!, $email: String!, $stripeCheckoutId: String!) {\n  updateOrder(\n    data: {email: $email, stripeCheckoutId: $stripeCheckoutId}\n    where: {id: $id}\n  ) {\n    id\n  }\n}",
): typeof import("./graphql").OrderUpdateAfterPaymentDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation ProductUpdateRating($productId: ID!, $rating: Float!) {\n  updateProduct(where: {id: $productId}, data: {rating: $rating}) {\n    id\n  }\n  publishProduct(where: {id: $productId}) {\n    id\n  }\n}",
): typeof import("./graphql").ProductUpdateRatingDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation ReviewCreate($productId: ID!, $headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!) {\n  createReview(\n    data: {product: {connect: {id: $productId}}, headline: $headline, content: $content, rating: $rating, name: $name, email: $email}\n  ) {\n    id\n  }\n}",
): typeof import("./graphql").ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation ReviewPublish($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}",
): typeof import("./graphql").ReviewPublishDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}",
): typeof import("./graphql").CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query CategoriesGetList($includeImg: Boolean = false) {\n  categories {\n    ...CategoryListItem\n    image @include(if: $includeImg) {\n      url\n    }\n  }\n}",
): typeof import("./graphql").CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query CategoryGetBySlug($category: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {\n  category(where: {slug: $category}) {\n    ...CategoryListItem\n    description\n    products(\n      where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n      first: $limit\n      skip: $offset\n      orderBy: $orderBy\n    ) {\n      ...ProductListItem\n    }\n  }\n}",
): typeof import("./graphql").CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query CollectionGetBySlug($collection: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {\n  collection(where: {slug: $collection}) {\n    ...CollectionListItem\n    description\n    image {\n      url\n    }\n    products(\n      where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n      first: $limit\n      skip: $offset\n      orderBy: $orderBy\n    ) {\n      ...ProductListItem\n    }\n  }\n}",
): typeof import("./graphql").CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query CollectionsGetList($includeImg: Boolean = false, $includeDescription: Boolean = false) {\n  collections {\n    ...CollectionListItem\n    description @include(if: $includeDescription)\n    image @include(if: $includeImg) {\n      url\n    }\n  }\n}",
): typeof import("./graphql").CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query OrdersGetByEmail($email: String!) {\n  orders(where: {email: $email}, stage: DRAFT, orderBy: updatedAt_DESC) {\n    ...Order\n  }\n}",
): typeof import("./graphql").OrdersGetByEmailDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}",
): typeof import("./graphql").ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductGetBySlug($slug: String!) {\n  product(where: {slug: $slug}) {\n    ...ProductDetails\n  }\n}",
): typeof import("./graphql").ProductGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetAllSlugs {\n  products {\n    slug\n  }\n}",
): typeof import("./graphql").ProductsGetAllSlugsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetBySearch($search: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {\n  products(\n    where: {AND: [{_search: $search}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n    first: $limit\n    skip: $offset\n    orderBy: $orderBy\n  ) {\n    ...ProductListItem\n  }\n}",
): typeof import("./graphql").ProductsGetBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetCount($priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {\n  productsConnection(\n    where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}",
): typeof import("./graphql").ProductsGetCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetCountBySearch($search: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {\n  productsConnection(\n    where: {AND: [{_search: $search}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}",
): typeof import("./graphql").ProductsGetCountBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetCountInCategory($slug: String, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {\n  productsConnection(\n    where: {AND: [{categories_some: {slug: $slug}}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}",
): typeof import("./graphql").ProductsGetCountInCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetCountInCollection($slug: String, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {\n  productsConnection(\n    where: {AND: [{collections_some: {slug: $slug}}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}",
): typeof import("./graphql").ProductsGetCountInCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetList($priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {\n  products(\n    where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}\n    first: $limit\n    skip: $offset\n    orderBy: $orderBy\n  ) {\n    ...ProductListItem\n  }\n}",
): typeof import("./graphql").ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetRelated($slug: String!, $categoriesSlugs: [String!]) {\n  products(\n    where: {slug_not: $slug, AND: {categories_some: {slug_in: $categoriesSlugs}}}\n    first: 4\n  ) {\n    ...ProductListItem\n  }\n}",
): typeof import("./graphql").ProductsGetRelatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ReviewsGetByProductId($productId: ID!) {\n  reviews(where: {product: {id: $productId}}, orderBy: createdAt_DESC) {\n    ...Review\n  }\n}",
): typeof import("./graphql").ReviewsGetByProductIdDocument;

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}
