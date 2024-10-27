"use client";

import { BiChevronDown } from "react-icons/bi";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { type ProductOrderByInput } from "@/graphql/generated/graphql";
import { useQueryParams } from "@/hooks/useQueryParams";
import { cn } from "@/lib/utils";

import { sortOptions } from "../constants";

export const SortDropdown = () => {
	const { queryParams, setQueryParams } = useQueryParams<{ orderBy?: ProductOrderByInput }>();

	const currentSort = queryParams.get("orderBy") || "createdAt_DESC";

	return (
		<Menu as="div" className="relative inline-block text-left">
			<MenuButton className="group inline-flex justify-center text-sm font-medium text-zinc-700 hover:text-zinc-900">
				Sort
				<BiChevronDown
					aria-hidden
					className="-mr-1 ml-1 size-5 flex-shrink-0 text-zinc-400 group-hover:text-zinc-500"
				/>
			</MenuButton>
			<MenuItems
				transition
				className="absolute left-4 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
			>
				<div className="py-1">
					{sortOptions.map((option) => (
						<MenuItem key={option.name}>
							<button
								className={cn(
									"block w-full px-4 py-2 text-left text-sm data-[focus]:bg-zinc-100",
									option.value === currentSort ? "font-medium text-zinc-900" : "text-zinc-500",
								)}
								onClick={() => setQueryParams({ orderBy: option.value })}
							>
								{option.name}
							</button>
						</MenuItem>
					))}
				</div>
			</MenuItems>
		</Menu>
	);
};
