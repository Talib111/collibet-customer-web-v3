import Cookies from "js-cookie";
// routes

// import { PATH_AUTH } from '../routes/paths';
// utils
import axios from "./axios";
import axiosInstance from "./axios";

// ----------------------------------------------------------------------

function jwtDecode(token) {
	const base64Url = token.split(".")[1];
	const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	const jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split("")
			.map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
			.join("")
	);

	return JSON.parse(jsonPayload);
}

// ----------------------------------------------------------------------

const isValidToken = (token) => {
	if (!token) {
		return false;
	}
	return true;
};

// ---------------------------------------------------------------------

// ----------------------------------------------------------------------

// const setSession = (accessToken) => {
//   if (accessToken) {
//     localStorage.setItem('token', accessToken);

//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

//     // This function below will handle when token is expired
//     const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
//     tokenExpired(exp);
//   } else {
//     localStorage.removeItem('token');

//     delete axios.defaults.headers.common.Authorization;
//   }
// };

const verifyToken = (token) => {
	if (token) {
		const decodedToken = jwtDecode(token);
		const currentTime = Date.now() / 1000;
		if (decodedToken.exp < currentTime) {
			return false;
		}
		return true;
	}
	return false;
};

const setSession = (token) => {
	if (token) {
		localStorage.setItem("token", token);
		axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		localStorage.removeItem("token");
		delete axios.defaults.headers.common.Authorization;
	}
};
export { isValidToken, setSession, verifyToken };
