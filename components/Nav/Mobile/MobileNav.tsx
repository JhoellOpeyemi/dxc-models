"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

// components imports
import StyledLink from "@/components/StyledLink/StyledLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// utils imports
import { linkArray } from "@/utils";
// styles import
import "./mobileNav.css";

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="mobile-header flex-between">
        <Link href="/" className={`${navOpen ? 'logo nav-open' : 'logo'}`}>
          DXC
        </Link>

{navOpen && 
        <nav className="mobile-nav">
          <ul className="mobile-nav-container flex-column">
            {linkArray.map(
              ({ path, label }: { path: string; label: string }) => (
                <li key={path} className="mobile-nav-list">
                  <StyledLink path={path} label={label} />
                </li>
              )
            )}
          </ul>

          <div className="nav-footer-container flex-column">
            <div className="nav-footer-links">
              <a href="/" target="_blank">
                Facebook
              </a>
              <a href="/" target="_blank">
                Twitter
              </a>
              <a href="/" target="_blank">
                Instagram
              </a>
            </div>

            <div className="nav-footer-image-container">
              <Image
                src="/hero-img.webp"
                alt="nav footer image"
                style={{ objectFit: "cover" }}
                className="nav-footer-image"
                fill
              />
              <div className="overlay"></div>
            </div>
          </div>
        </nav>
        }

        <div className="mobile-menu">
          <button
            className={`${navOpen ? "mobile-menu-btn nav-open" : "mobile-menu-btn"}`}
            onClick={handleNav}
            aria-label="Toggle navigation menu"
          >
            {navOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default MobileNav;
