export default function ApiList() {
	let baseUrl = process.env.NEXT_PUBLIC_BACKEND_API; // Talib-dev Aws
	let apilist = {
		api_getDynamicContent: `${baseUrl}/api/v1/dynamic/get/all`,
		api_updateProfile: `${baseUrl}/api/v1/profile/update`,
		api_postSingleImage: `${baseUrl}/api/v1/helper/image/upload`,
		// ════════════════════════════║ 24 API TO FETCH DYNAMIC CONTENT LIST ║═════════════════════════════════
		api_getDynamicContentList: `${baseUrl}/api/v1/dynamic/get/all`,
		api_createPassCode: `${baseUrl}/api/v1/auth/create-pin`,
		api_login: `${baseUrl}/api/v1/auth/signin`,
		api_searchPackages: `${baseUrl}/api/v1/service/packages/all`,
		api_fetchNotifications: `${baseUrl}/api/v1/profile/notification`,
		api_cartAdd: `${baseUrl}/api/v1/profile/cart/add`,
		api_getPopularPackages: `${baseUrl}/api/v1/service/packages/popular`,
		api_getTimeConfig: `${baseUrl}/api/v1/service/fetch-time-config`,
		api_giveReview2: `${baseUrl}/api/v1/profile/add/review2`,
		getAllSliders: `${baseUrl}/api/v1/service/banner/get-all`,

		// ════════════════════════════║ VERSION-2 APIS ║═════════════════════════════════
		api_packageDetailsById: `${baseUrl}/api/npr/v2/package/get-package-by-id`,
		api_packageDetailsBySlug: `${baseUrl}/api/npr/v2/package/get-package-by-slug`,
		api_categoryDetailsById: `${baseUrl}/api/npr/v2/category/get-category-by-id`,
		api_getFaqByEntityId: `${baseUrl}/api/npr/v2/faq/get-all-faqs-by-entity-id`,
		api_getAllOffers: `${baseUrl}/api/npr/v2/offer/get-all-offers`,
		api_getAllStates: `${baseUrl}/api/npr/v2/state/get-all-states`,
		api_getAllDistrictsByStateId: `${baseUrl}/api/npr/v2/district/get-all-district-by-state-id`,
		// ─────────────────────────── BLOG APIS  ───────────────────────────
		api_getAllBlogs: `${baseUrl}/api/npr/v2/blog/get-all-blogs`,
		api_getBlogById: `${baseUrl}/api/npr/v2/blog/get-blog-by-id`,
		api_getAllSlots: `${baseUrl}/api/npr/v2/slot/get-all-slots-user`,
		api_rescheduleBooking: `${baseUrl}/api/v1/profile/reschedule-booking`,
		api_getAllSlotsByCategory: `${baseUrl}/api/npr/v2/category-slot-direct/get-all-by-category`,
		api_getSlotAvailableLimit: `${baseUrl}/api/npr/v2/slot/check-slot-available-limit`,
		// ─────────────────────────── IMAGES APIS  ───────────────────────────
		api_getAllThumbnails: `${baseUrl}/api/npr/v2/category/fetch-thumbnails`,
		api_getAllThumbnailsByPackageSlug: `${baseUrl}/api/npr/v2/category/fetch-thumbnails-by-package-slug`,
		api_getRandomBannerByKey: `${baseUrl}/api/npr/v2/random-banner/get-random-banner-by-id`,
		api_recordAnalytics: `${baseUrl}/api/v1/profile/record-footprint`,
	};

	return apilist;
}
