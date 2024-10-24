import { Roboto_Flex } from "next/font/google";
import { ImageResponse } from "next/og";

import { cn } from "@/lib/utils";

export const runtime = "edge";

export const alt = "Next Sports";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/jpg";

const robotoFlex = Roboto_Flex({ subsets: ["latin"], weight: ["700", "900"] });

export default function Image() {
	return new ImageResponse(
		(
			<div tw={cn("relative flex h-full w-full items-center justify-center", robotoFlex)}>
				<div
					tw="absolute inset-0 h-full w-full object-cover"
					style={{
						backgroundImage:
							"url(https://res.cloudinary.com/dkv6fswch/image/upload/v1729697367/Leonardo_Phoenix_A_photorealistic_image_of_three_stylish_young_0_1_wld5he.jpg)",
					}}
				/>
				<div tw="absolute inset-0 h-full w-full bg-black/60" />
				<p tw="text-5xl text-center max-w-2xl text-white leading-normal tracking-wide font-bold">
					Discover the latest sports gear at Next Sports!
				</p>
			</div>
		),
		{
			...size,
		},
	);
}
