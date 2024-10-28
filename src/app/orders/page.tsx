import { type Metadata } from "next";

import { Orders } from "@/features/orders/components/Orders";
import { OrderListWrapper } from "@/features/orders/components/OrdersWrapper";

export const metadata: Metadata = {
	title: "Orders",
	description:
		"View your past and current orders at Next Sports. Track your purchases, check order statuses, and review product details all in one place. Stay on top of your sportswear shopping journey and get ready to perform at your best with Next Sports.",
	openGraph: {
		title: "Orders",
		description:
			"View your past and current orders at Next Sports. Track your purchases, check order statuses, and review product details all in one place. Stay on top of your sportswear shopping journey and get ready to perform at your best with Next Sports.",
	},
};

export default function OrdersPage() {
	return (
		<OrderListWrapper>
			<Orders />
		</OrderListWrapper>
	);
}
