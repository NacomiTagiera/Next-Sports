import { type Metadata } from "next";

import { UserProfileNavigation } from "./UserProfileNavigation";

export const metadata: Metadata = {
	title: "Profile",
	description:
		"Manage your Next Sports account with ease. View your order history, update personal details, and customize your preferences. Stay on top of your sportswear needs and enjoy a hassle-free shopping experience, all in one place.",
	openGraph: {
		title: "Profile",
		description:
			"Manage your Next Sports account with ease. View your order history, update personal details, and customize your preferences. Stay on top of your sportswear needs and enjoy a hassle-free shopping experience, all in one place.",
	},
};

export default function ProfilePage() {
	return (
		<section className="mx-auto flex max-w-md justify-center p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<UserProfileNavigation />
		</section>
	);
}
