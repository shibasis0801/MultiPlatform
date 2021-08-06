import {useEffect, useState} from "react";

export function useMobileStatus() {
    const [ isMobile, setIsMobile ] = useState(false);

    useEffect(() => {
        const widthHandler = () => setIsMobile(window.innerWidth < 800);
        window.addEventListener("resize", widthHandler);
        return () => window.removeEventListener("resize", widthHandler);
    }, [])

    return isMobile
}