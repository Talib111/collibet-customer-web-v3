import { useState, useEffect } from "react";
// next
import { useRouter } from "next/router";
// components
// import LoadingScreen from '../components/loading-screen';
//
import Login from "../pages/signup";
import { useAppContext } from "context/AuthContext";
import InitialLoader from "@/components/loader/InitialLoader";
import { toast } from "react-toastify";
import Loading from "@/blocks/Loading";

// ----------------------------------------------------------------------

export default function AuthGuard({ children }) {
	const { isAuthenticated, isInitialized } = useAppContext();

	const { pathname, push } = useRouter();

	const [requestedLocation, setRequestedLocation] = useState(null);

	useEffect(() => {
		if (requestedLocation && pathname !== requestedLocation) {
			push(requestedLocation);
		}
		if (isAuthenticated) {
			setRequestedLocation(null);
		}
	}, [isAuthenticated, pathname, push, requestedLocation]);

	if (!isInitialized) {
		return (
			<div className="flex justify-center align-center mt-22">
				<Loading />;
			</div>
		);
	}

	if (!isAuthenticated) {
		if (pathname !== requestedLocation) {
			setRequestedLocation(pathname);
		}
		// toast.error("Login First!!!");
		// toast.dismiss();
		// push("/signup");
		// return;
		// toast.dismiss();
		push("/login");
		// toast.error("Login First!!!");
		return;
	}

	return <>{children}</>;
}
