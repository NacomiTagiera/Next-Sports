import { SignUp } from "@clerk/nextjs";

import { type Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign Up",
	description:
		"Join the Next Sports community today! Sign up to unlock exclusive member benefits, track your orders, and receive updates on the latest sportswear trends. Get started now for a seamless shopping experience and stay ahead with the best in athletic gear.",
	openGraph: {
		title: "Sign Up",
		description:
			"Join the Next Sports community today! Sign up to unlock exclusive member benefits, track your orders, and receive updates on the latest sportswear trends. Get started now for a seamless shopping experience and stay ahead with the best in athletic gear.",
	},
};

export default function SignUpPage() {
	return <SignUp path="/sign-up" />;
}
