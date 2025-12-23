"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import StyledLink from "@/components/StyledLink/StyledLink";
import { linkArray } from "@/utils";

import "./footer.css";

const Footer = () => {
  const pathname = usePathname();
  const isStudioPage = pathname?.startsWith("/studio");

  return (
    <>
      {isStudioPage ? (
        <div></div>
      ) : (
        <footer className="footer-container">
          <div className="footer-content-container container">
            <div className="footer-inner-content-container">
              <div className="footer-info-container">
                <div className="location">
                  <h5 className="info-heading">Location:</h5>
                  <p>10, Iluseyi Street, Surulere, Lagos, Nigeria</p>
                </div>

                <div className="contact">
                  <h5 className="info-heading">For Enquiries:</h5>
                  <Link href="mailto:info@dxcmodels.com" target="_blank">
                    info@dxcmodels.com
                  </Link>
                  <p>+234 813 7427 904</p>
                </div>
              </div>

              <nav className="footer-links-container">
                <ul className="footer-links">
                  {linkArray.map(
                    ({ path, label }: { path: string; label: string }) => (
                      <li key={path} className="footer-link-list">
                        <StyledLink path={path} label={label} />
                      </li>
                    )
                  )}
                </ul>
              </nav>

              <div className="footer-image-container">
                <Image
                  src="/hero-img.webp"
                  alt=""
                  className="footer-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                />
              </div>
            </div>

            <div className="socials-brand-container">
              <div className="social-links-container">
                <StyledLink path="/" label="WhatsApp" />
                <StyledLink path="/" label="Twitter" />
                <StyledLink path="/" label="Instagram" />
                <StyledLink path="/" label="Facebook" />
              </div>

              <div className="footer-brand-container">
                <h5 className="footer-brand">
                  <span className="brand-dxc">Dxc</span>
                  <span className="brand-models">Models</span>
                </h5>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
