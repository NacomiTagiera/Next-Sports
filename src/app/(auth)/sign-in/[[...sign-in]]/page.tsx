import { SignIn } from "@clerk/nextjs";

import { type Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign In",
	description:
		"Welcome back to Next Sports! Sign in to access your account, track your orders, and shop the latest in premium sportswear. Enjoy a personalized shopping experience with fast checkout and exclusive offers.",
	openGraph: {
		title: "Sign In",
		description:
			"Welcome back to Next Sports! Sign in to access your account, track your orders, and shop the latest in premium sportswear. Enjoy a personalized shopping experience with fast checkout and exclusive offers.",
	},
};

export default function SignInPage() {
	return <SignIn path="/sign-in" />;
}
