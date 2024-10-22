import { FiArrowRight } from "react-icons/fi";

import { Button } from "@/components/UI/Button";

export default function NotFound() {
	return (
		<article className="container mx-auto my-8 flex h-full flex-col items-center p-16">
			<div className="max-w-lg text-center">
				<h1 className="text-7xl font-bold text-skyfall-500 md:text-9xl md:font-extrabold">404</h1>
				<p className="my-8 text-xl font-semibold md:text-2xl">
					Sorry, we couldn’t find the page you’re after! Try starting again from the homepage.
				</p>
				<Button href="/" size="lg" trailingIcon={FiArrowRight}>
					Back to Home
				</Button>
			</div>
		</article>
	);
}
