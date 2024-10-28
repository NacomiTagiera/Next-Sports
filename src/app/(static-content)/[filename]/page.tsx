import { type ComponentType } from "react";

import { type Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
	params: {
		filename: string;
	};
}

export const dynamicParams = false;

export const generateStaticParams = () => [
	{ filename: "about" },
	{ filename: "contact" },
	{ filename: "cookies" },
	{ filename: "faq" },
	{ filename: "privacy-policy" },
	{ filename: "terms-of-service" },
];

export const generateMetadata = ({ params }: Props): Metadata => {
	const unslugifiedFilename = params.filename
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return {
		title: unslugifiedFilename,
		description: `This is the ${unslugifiedFilename} page.`,
		openGraph: {
			title: unslugifiedFilename,
			description: `This is the ${unslugifiedFilename} page.`,
		},
	};
};

export default async function StaticPage({ params }: Props) {
	const Content = await import(`./${params.filename}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(),
	);

	return (
		<div className="prose prose-lg prose-zinc mx-auto w-full lg:prose-xl prose-h1:text-center prose-h3:text-2xl prose-hr:border-zinc-400">
			<Content />
		</div>
	);
}
