// import "../styles/globals.scss";
// import "react-toastify/dist/ReactToastify.css";
// import { ThemeProvider } from "@material-tailwind/react";
// import Head from "next/head";
// import { CacheProvider } from "@emotion/react";
// import { Toaster } from 'react-hot-toast';
// import createEmotionCache from "../utils/createEmotionCache";
// // import ProgressBar from "@/components/progress-bar/ProgressBar";
// import { GlobalContextProvider } from "context/globalContext";
// import { useEffect } from "react";
// import AuthContext from "context/AuthContext";
// import { useRouter } from "next/router";
// import ProgressBar from "@/components/progress-bar/ProgressBar";
// const SITE_URL = "https://collibet.com";

// const clientSideEmotionCache = createEmotionCache();

// function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache, }) {
// 	const getLayout = Component.getLayout ?? ((page) => page);
// 	const router = useRouter();
// 	const canonicalUrl = `${SITE_URL}${router.asPath.split("?")[0]}`;

// 	console.log('testing2')

// 	useEffect(() => {
// 		//---------------------- This code sets the manual scroll ----------------------
// 		if ('scrollRestoration' in history) {
// 			history.scrollRestoration = 'manual';
// 		}

// 		//--------------- THIS FUNCTION HANLDES THE TOP SCROLL FOR THE NEXT PAGE ------------
// 		const handleRouteChange = () => {
// 			window.scrollTo(0, 0);
// 		};

// 		//--------------- THIS CODE ATTACHS THE EVENT ------------
// 		router.events.on('beforeHistoryChange', handleRouteChange);

// 		//--------------- THIS CODE CLEANS THE EVENT ------------
// 		return () => {
// 			router.events.off('beforeHistoryChange', handleRouteChange);
// 		};
// 	}, [router.events]);


// 	return (
// 		<CacheProvider value={emotionCache}>
// 			<Head>
// 				<meta name="viewport" content="initial-scale=1, width=device-width" />
// 				<title>Home Services in Ranchi | AC Repair, Electrician, Plumber Near You – Collibet</title>
// 				<meta name="description" content="Book trusted home services in Ranchi with Collibet. AC repair, electricians, plumbers, cleaning & more — fast, affordable, and verified local experts." />
// 				<link rel="icon" href="/favicon.jpg" />
// 				<link rel="canonical" href={canonicalUrl} />
// 			</Head>
// 			<ThemeProvider>
// 				<AuthContext>
// 					<GlobalContextProvider>
// 						<Toaster />
// 						<ProgressBar />
// 						{getLayout(<Component {...pageProps} />)}
// 					</GlobalContextProvider>
// 				</AuthContext>
// 			</ThemeProvider>
// 		</CacheProvider>
// 	);
// }

// export default MyApp;


import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@material-tailwind/react";
import Head from "next/head";
import Script from "next/script";
import { CacheProvider } from "@emotion/react";
import { Toaster } from 'react-hot-toast';
import createEmotionCache from "../utils/createEmotionCache";
// import ProgressBar from "@/components/progress-bar/ProgressBar";
import { GlobalContextProvider } from "context/globalContext";
import { useEffect } from "react";
import AuthContext from "context/AuthContext";
import { useRouter } from "next/router";
import ProgressBar from "@/components/progress-bar/ProgressBar";
const SITE_URL = "https://collibet.com";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache, }) {
	const getLayout = Component.getLayout ?? ((page) => page);
	const router = useRouter();
	const canonicalUrl = `${SITE_URL}${router.asPath.split("?")[0]}`;

	console.log('testing2')

	useEffect(() => {
		//---------------------- This code sets the manual scroll ----------------------
		if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual';
		}

		//--------------- THIS FUNCTION HANLDES THE TOP SCROLL FOR THE NEXT PAGE ------------
		const handleRouteChange = () => {
			window.scrollTo(0, 0);
		};

		//--------------- THIS CODE ATTACHS THE EVENT ------------
		router.events.on('beforeHistoryChange', handleRouteChange);

		//--------------- THIS CODE CLEANS THE EVENT ------------
		return () => {
			router.events.off('beforeHistoryChange', handleRouteChange);
		};
	}, [router.events]);


	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<title>Best Custom Tailoring Services in Ranchi | Stitching, Alteration & Designer Fit – Collibet</title>
				<meta name="description" content="Book trusted tailoring services in Ranchi with Collibet. Custom stitching, alterations, blouse design, suit tailoring & more — fast, affordable, and expert tailors." />
				<link rel="icon" href="/favicon.jpg" />
				<link rel="canonical" href={canonicalUrl} />
			</Head>

			{/* Facebook Pixel */}
			<Script
				id="facebook-pixel"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '3627185094189479');
						fbq('track', 'PageView');
					`
				}}
			/>
			<noscript>
				<img
					height="1"
					width="1"
					style={{ display: 'none' }}
					src="https://www.facebook.com/tr?id=3627185094189479&ev=PageView&noscript=1"
					alt=""
				/>
			</noscript>

			<ThemeProvider>
				<AuthContext>
					<GlobalContextProvider>
						<Toaster />
						<ProgressBar />
						{getLayout(<Component {...pageProps} />)}
					</GlobalContextProvider>
				</AuthContext>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
