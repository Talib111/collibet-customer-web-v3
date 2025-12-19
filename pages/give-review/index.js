import Layout from "@/components/Layout/Layout";
import { AuthGuard } from "guard";
import React from "react";
import GiveReview from "./GiveReview";

function bookings() {
	return (
		<AuthGuard>
			<Layout>
				<GiveReview />
			</Layout>
		</AuthGuard>
	);
}

export default bookings;
