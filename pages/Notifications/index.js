import Layout from "@/components/Layout/Layout";
import NotificationCard from "@/components/Layout/NotificationCard";
import { AuthGuard } from "guard";
import React from "react";

function bookings() {
	return (
		<AuthGuard>
			<Layout>
                <NotificationCard/>
			</Layout>
		</AuthGuard>
	);
}

export default bookings;
