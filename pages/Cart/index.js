import CartComponent from "@/components/Cart/Cart";
import Layout from "@/components/Layout/Layout";
import { AuthGuard } from "guard";
import React from "react";

const Cart = () => {
	return (
		<AuthGuard>
			<Layout>
				<CartComponent />
			</Layout>
		</AuthGuard>
	);
};

export default Cart;
