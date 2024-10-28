import { type Metadata } from "next";
import { redirect } from "next/navigation";

import { getCartFromCookies } from "@/features/cart/api/fetchQueries";
import { StripeForm } from "@/features/checkout/components/StripeForm";
import { calculateItemsTotal } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Checkout",
	description:
		"You're one step away from owning high-performance sportswear. Complete your purchase securely and enjoy fast shipping, reliable service, and world-class sportswear from Next Sports. Gear up and take your performance to the next level!",
	openGraph: {
		title: "Checkout",
		description:
			"You're one step away from owning high-performance sportswear. Complete your purchase securely and enjoy fast shipping, reliable service, and world-class sportswear from Next Sports. Gear up and take your performance to the next level!",
	},
};

interface Props {
	searchParams: {
		intent: string;
	};
}

export default async function CheckoutPage({ searchParams: { intent } }: Props) {
	const cart = await getCartFromCookies();

	if (!intent || !cart || cart.orderItems.length === 0) {
		redirect("/cart");
	}

	return <StripeForm clientSecret={intent} total={calculateItemsTotal(cart.orderItems)} />;
}
