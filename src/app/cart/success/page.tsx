import { type Metadata } from "next";
import { redirect } from "next/navigation";

import { CartSuccessView } from "@/features/cart/components/CartSuccessView";
import { ClearCartCookie } from "@/features/cart/components/ClearCartCookie";
import { stripe } from "@/lib/stripe";

export const metadata: Metadata = {
	title: "Success",
	description:
		"Thank you for shopping at Next Sports! Your order has been successfully placed. Get ready to elevate your performance with our top-quality sportswear and gear. Stay tuned for shipping updates, and we’ll get your order to you soon!",
	openGraph: {
		title: "Success",
		description:
			"Thank you for shopping at Next Sports! Your order has been successfully placed. Get ready to elevate your performance with our top-quality sportswear and gear. Stay tuned for shipping updates, and we’ll get your order to you soon!",
	},
};

interface Props {
	searchParams: {
		intent_id: string;
	};
}

export default async function CartSuccessPage({ searchParams: { intent_id } }: Props) {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key not set");
	}

	if (!intent_id) {
		redirect("/cart");
	}

	const paymentIntent = await stripe.paymentIntents.retrieve(intent_id);

	if (!paymentIntent || paymentIntent.status !== "succeeded" || !paymentIntent.metadata.orderId) {
		redirect("/cart");
	}

	return (
		<>
			<CartSuccessView total={paymentIntent.amount} />
			<ClearCartCookie />
		</>
	);
}
