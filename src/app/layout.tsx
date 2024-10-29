import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata, Viewport } from "next";
import { Roboto_Flex } from "next/font/google";

import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { getCategoriesList } from "@/features/categories/api/fetchQueries";
import { getCollectionsList } from "@/features/collections/api/fetchQueries";
import { cn } from "@/lib/utils";

import "./globals.css";

const robotoFlex = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto-flex" });

export const metadata: Metadata = {
	metadataBase: new URL("https://next-sports-ecommerce.vercel.app"),
	title: {
		default: "Next Sports",
		template: "%s | Next Sports",
	},
	description:
		"Discover a world of sports excellence at Next Sports. Shop the latest apparel and accessories for athletes of all levels. Find your winning edge with top-quality products and unbeatable deals.",
	applicationName: "Next Sports",
	authors: {
		name: "Jakub Pawlak",
		url: "https://www.linkedin.com/in/jakub-pawlak-frontend-dev",
	},
	creator: "Jakub Pawlak",
	formatDetection: {
		telephone: true,
		address: true,
		email: true,
	},
	openGraph: {
		type: "website",
		siteName: "Next Sports",
		url: "https://next-sports-ecommerce.vercel.app",
		locale: "en_US",
		title: "Next Sports",
		description:
			"Discover a world of sports excellence at Next Sports. Shop the latest apparel and accessories for athletes of all levels. Find your winning edge with top-quality products and unbeatable deals.",
	},
	icons: {
		icon: [
			{
				url: "/icons/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				url: "/icons/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
		],
		apple: [
			{
				url: "/icons/apple-touch-icon.png",
			},
		],
		other: [
			{
				url: "/icons/android-chrome-192x192.png",
				sizes: "192x192",
			},
			{
				url: "/icons/android-chrome-512x512.png",
				sizes: "512x512",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		"max-snippet": -1,
		"max-image-preview": "large",
	},
	keywords: [
		"Sports apparel",
		"Sports accessories",
		"Sports gear",
		"Sports store",
		"Athlete clothing",
		"Next Sports",
		"Buy sports gear online",
		"Fitness apparel",
	],
	manifest: "/icons/manifest.json",
};

export const viewport: Viewport = {
	themeColor: "#2570eb",
	colorScheme: "light",
};

export default async function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	const [categories, collections] = await Promise.all([
		getCategoriesList({ includeImg: true }),
		getCollectionsList({ includeImg: true }),
	]);

	return (
		<ClerkProvider
			signInFallbackRedirectUrl="/products"
			signUpFallbackRedirectUrl="/products"
			afterSignOutUrl="/sign-in"
			signInUrl="/sign-in"
			signUpUrl="/sign-up"
			appearance={{
				variables: {
					colorPrimary: "#2570eb",
					fontFamily: "var(--font-roboto-flex)",
				},
				elements: {
					formButtonPrimary:
						"inline-flex items-center justify-center rounded-md bg-skyfall-500 text-center font-medium text-white shadow-sm transition-colors hover:bg-skyfall-600 focus:outline-none focus:ring-4 focus:ring-skyfall-300",
					formFieldInput:
						"w-full rounded-lg border-solid border-transparent px-2 py-1.5 text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-skyfall-500 focus:ring-0",
					formFieldLabel: "text-sm text-zinc-900 font-medium leading-none",
					logoImage: "w-20 h-auto",
				},
			}}
		>
			<html lang="en">
				<body
					className={cn(
						"flex min-h-screen flex-col overflow-x-hidden bg-twilight-100 text-zinc-900",
						robotoFlex.className,
					)}
				>
					<Header categories={categories} collections={collections} />
					<main className="flex-1">{children}</main>
					<Footer categories={categories} collections={collections} />
					{modal}
				</body>
			</html>
		</ClerkProvider>
	);
}
