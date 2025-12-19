import BookingList from "@/components/Dashboard/BookingList";
import Layout from "@/components/Layout/Layout";
import { AuthGuard } from "guard";
import React from "react";

function bookings() {
	return (
		<AuthGuard>
			<Layout>
				<BookingList />
			</Layout>
		</AuthGuard>
	);
}

export default bookings;
