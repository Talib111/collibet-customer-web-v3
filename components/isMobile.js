import { useEffect, useState } from "react";

const IsMobile = (breakPoint = 552) => {
	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= breakPoint && !isMobile) setIsMobile(true);
			else if (window.innerWidth > breakPoint && isMobile) setIsMobile(false);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [breakPoint, isMobile]);

	return isMobile;
};

export default IsMobile;
