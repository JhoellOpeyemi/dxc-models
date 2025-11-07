"use client";

import {useState, useEffect} from 'react'

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.css";
import StyledLink from "../StyledLink/StyledLink";

const Nav = () => {
  const pathname = usePathname();
  const isStudioPage = pathname?.startsWith("/studio");

  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollPos, setPrevScrcollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
        // setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos > 50)
        setPrevScrcollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])
  

  const linkArray = [
    { path: "/about", label: "About us" },
    { path: "/models", label: "Models" },
    { path: "/academy", label: "Academy" },
    { path: "/apply", label: "Apply" },
    { path: "/shop", label: "Shop" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {isStudioPage ? (
        <div></div>
      ) : (
        <header className={`header flex-between container ${isVisible ? 'show-header' : 'hide-header'}`}>
          <Link href="/" className="logo">
            DXC
          </Link>

          <nav className="nav">
            <ul className="nav-container flex">
              {linkArray.map(
                ({ path, label }: { path: string; label: string }) => (
                  <li key={path} className="nav-list">
                    <StyledLink path={path} label={label} />
                  </li>
                )
              )}
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Nav;
