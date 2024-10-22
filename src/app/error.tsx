"use client";

import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

import { Button } from "@/components/UI/Button";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<article className="container mx-auto my-8 flex h-full flex-col items-center p-16">
			<div className="max-w-xl text-center">
				<h1 className="text-7xl font-bold text-skyfall-500 md:text-9xl md:font-extrabold">Oops!</h1>
				<p className="my-8 text-2xl font-semibold md:text-3xl">
					Something went wrong. We’re working to fix it, but in the meantime, try refreshing the
					page or come back later.
				</p>
				<div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
					<Button href="/" size="lg" trailingIcon={FiArrowRight}>
						Back to Home
					</Button>
					<Button size="lg" variant="outlined" onClick={reset}>
						Try Again
					</Button>
				</div>
				<p className="mt-8">
					If this keeps happening, please
					<Button href="/contact" variant="text" size="lg" className="p-1">
						contact our support team
					</Button>
				</p>
			</div>
		</article>
	);
}
