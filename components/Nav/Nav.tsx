"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.css";
import StyledLink from "../StyledLink/StyledLink";

const Nav = () => {
  const pathname = usePathname();
  const isStudioPage = pathname?.startsWith("/studio");

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
        <header className="header flex-between container">
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
