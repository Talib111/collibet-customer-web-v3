export const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_API}/api`; // Talib-dev Aws
export const FETCH_ALL_SERVICE = "/v1/service/category/get-all";

export const FETCH_SERVICE = "/v1/service/category/detail";
export const FETCH_SERVICE_BY_SLUG = "/v1/service/category-details-by-slug";
export const CREATE_ORDER = "/v1/order/create";

export const FETCH_CART_ITEMS = "/v1/profile/cart/get";

export const FETCH_PROFILE = "/v1/profile/self";
export const CREATE_PROFILE = "/v1/profile/update";
export const API_UPDATE_EMAIL = "/v1/profile/update-email";
export const ADD_REVIEW_API = "/v1/profile/add/review";

export const FETCH_BOOKING = "/v1/order/all";
export const FETCH_PENDING_AMOUNT_DETAILS = "/v1/order/pending-Amount-details";
export const BOOKING_DETAIL = "/v1/order/detail";
export const CANCEL_SERVICE = "/v1/order/cancel";
export const FETCH_CART_DETAILS = "/v1/profile/cart/get";
export const FETCH_CART_DETAILS2 = "/v1/profile/cart2/get";
export const UPDATE_ITEM_COUNT = `/v1/subadmin/adjust-item-count`;
export const ADD_TO_CART = "/v1/profile/cart/add";
export const DELETE_CART_ITEM = "/v1/profile/cart/remove";
export const CREATE_ORDER_OFFLINE_API = "/v1/order/confirm-order-offline";
export const CREATE_ORDER_API = "/v1/order/create";
export const CREATE_ORDER_API_POST_V2 = "/v1/order/create-post";
export const CREATE_POST_ORDER_API = "/v1/order/create-post-booking";

export const VERIFY_ORDER_API = "/v1/order/verify";
export const VERIFY_POST_ORDER_API = `/v1/order/verify-post-booking`;
export const RESCHEDULE_BOOKING_API = "/v1/profile/reschedule-booking";

export const STORE_OPENING_TIME = 9;
export const STORE_CLOSING_TIME = 23;

// export const INTERVAL = 30;
export const INTERVAL = 60;
export const SOMETHING_WENT_WRONG = "Something went wrong";

export const getQueryStringParams = (query) => {
	return query
		? (/^[?#]/.test(query) ? query.slice(1) : query)
			.split("&")
			.reduce((params, param) => {
				let [key, value] = param.split("=");
				params[key] = value
					? decodeURIComponent(value.replace(/\+/g, " "))
					: "";
				return params;
			}, {})
		: {};
};
