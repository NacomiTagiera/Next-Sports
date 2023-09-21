import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/lib/utils";

type Props = {
	product: ProductsListItemFragment;
};

export const ProductListItemDescription = ({ product: { name, price, categories } }: Props) => {
	return (
		<div className="flex items-center justify-between pt-6">
			<div>
				<h3 className="text-base">{name}</h3>
				<p className="text-gray-600">{categories[0]?.name}</p>
			</div>
			<span className="text-xl font-bold text-blue-600">{formatPrice(price / 100)}</span>
		</div>
	);
};
