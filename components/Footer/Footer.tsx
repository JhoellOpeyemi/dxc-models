"use client";

// next imports
import { usePathname } from "next/navigation";
// hooks import
import { useWindowSize } from "@/hooks";
// components imports
import DesktopFooter from '@/components/Footer/Desktop/DesktopFooter'
import MobileFooter from '@/components/Footer/Mobile/MobileFooter'

const Footer = () => {
  const pathname = usePathname();
  const isStudioPage = pathname?.startsWith("/studio");

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;

  return (
    <>
      {isStudioPage ? (
        <div></div>
      ) : (
        <>
            {!isMobile && <DesktopFooter />}
            {isMobile && <MobileFooter />}
        </>
      )}
    </>
  );
};

export default Footer;
