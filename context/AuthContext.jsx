import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from "react";
import { setSession, isValidToken, verifyToken } from "../utils/jwt";
import axios from "../utils/axios";
import { CREATE_PROFILE } from "utils/constants";
import axiosInstance from "../utils/axios";
// import { toast } from 'react-toastify';
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const AppContext = createContext();

export const useAppContext = () => {
	return useContext(AppContext);
};

const AuthContext = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isInitialized, setIsInitialized] = useState(false);
	const [isLogoutLoader, setisLogoutLoader] = useState(false);
	const [user, setUser] = useState(null);
	const [profile, setProfile] = useState(false);
	const [cartCount, setCartCount] = useState(0);
	const [packageDetailsRefreshCount, setpackageDetailsRefreshCount] = useState(0);
	const router = useRouter();

	const initialize = useCallback(async () => {
		try {
			const accessToken = localStorage.getItem("token");
			if (accessToken) {
				setSession(accessToken);
				const response = await axios.get("/v1/profile/self");
				if (!response?.data?.error) {
					setProfile(response?.data);
					setCartCount(response?.data?.cartCount || 0);
					setIsAuthenticated(true);
					setIsInitialized(true);
					setUser(response?.data?.payload);
					console.log(user);
				} else {
					// setIsAuthenticated(false);
					setIsAuthenticated(true);
					setIsInitialized(true);
					setUser(null);
				}
			} else {
				setIsAuthenticated(false);
				setIsInitialized(true);
				setUser(null);
			}
		} catch (error) {
			console.log(error);
			setIsInitialized(true);
		}
	}, []);

	useEffect(() => {
		initialize();
	}, [initialize, isAuthenticated]);

	// LOGIN
	const login = async (response) => {
		try {
			const token = response.data.payload.token;
			setSession(token);
			const profileResponse = await axios.get("/v1/profile/self");
			const profileData = profileResponse.data.payload;
			setProfile(profileResponse.data);
			setCartCount(profileResponse.data.cartCount || 0);
			setIsAuthenticated(true);
			setUser(profileData); // You might want to update this based on the actual response structure

			console.log("Login successful.");
		} catch (error) {
			console.log("Login error:", error);
		}
	};

	// UPDATE PROFILE
	const updateProfile = async (name, address, email, pinCode, gender) => {
		// const response = await axios.post('/api/account/register', {
		const response = await axiosInstance.post(CREATE_PROFILE, {
			name,
			address,
			email,
			pinCode,
			gender,
		});
		if (!response.data.error) {
			toast.success("Profile Updated");
		} else {
			toast.error("Error submitting data:" || "Something went Wrong");
		}
		setUser(response.data.payload);
		setIsAuthenticated(true);
	};

	// REGISTER
	const register = async (name, address, email, pinCode, gender) => {
		// const response = await axios.post('/api/account/register', {
		const response = await axiosInstance.post(CREATE_PROFILE, {
			name,
			address,
			email,
			pinCode,
			gender,
		});
		if (!response.data.error) {
			toast.success(response.data.message || "Profile Created");
		} else {
			toast.error("Error submitting data:" || "Something went Wrong");
		}
		setUser(response.data.payload);
		setIsAuthenticated(true);
	};

	// LOGOUT
	const logout = async () => {
		try {
			setSession(null);
			setIsAuthenticated(false);
			setUser(null);
			setCartCount(null);
			// console.log('Logout successful.');
			// toast.success('Logout successful');
			setisLogoutLoader(true);
			window.scrollTo(0, 0);
			router.push("/");
		} catch (error) {
			toast.error("Logout error:", error);
			// console.log('Logout error:', error);
		}
	};

	const values = {
		isAuthenticated,
		setIsAuthenticated,
		isInitialized,
		user,
		login,
		register,
		updateProfile,
		logout,
		profile,
		cartCount,
		isLogoutLoader,
		setisLogoutLoader,
		setCartCount,
		packageDetailsRefreshCount,
		setpackageDetailsRefreshCount,
		initialize
	};
	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AuthContext;
