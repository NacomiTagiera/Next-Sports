"use client";

import { BiSolidPackage } from "react-icons/bi";
import { UserProfile } from "@clerk/nextjs";

export const UserProfileNavigation = () => (
	<UserProfile path="/profile" routing="path">
		<UserProfile.Page label="account" />
		<UserProfile.Page label="security" />
		<UserProfile.Link label="Your Orders" url="/orders" labelIcon={<BiSolidPackage />} />
	</UserProfile>
);
