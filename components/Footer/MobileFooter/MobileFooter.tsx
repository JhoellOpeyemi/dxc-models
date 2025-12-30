// next imports
import Image from "next/image";
import Link from "next/link";
// hooks import
import { linkArray } from "@/utils";
// components imports
import StyledLink from "@/components/StyledLink/StyledLink";
// styles import
import "./mobileFooter.css";

const MobileFooter = () => {
    return (
        <footer className="mobile-footer-container">
          <div className="mobile-footer-content-container container">
              <div className="mobile-footer-info-container">
                <div className="mobile-location">
                  <h5 className="mobile-info-heading">Location:</h5>
                  <p>10, Iluseyi Street, Surulere, Lagos, Nigeria</p>
                </div>

                <div className="mobile-contact">
                  <h5 className="mobile-info-heading">For Enquiries:</h5>
                  <Link href="mailto:info@dxcmodels.com" target="_blank">
                    info@dxcmodels.com
                  </Link>
                  <p>+234 813 7427 904</p>
                </div>
              </div>

            <div className='mobile-all-links-container'>
              <div className="mobile-social-links-container flex-column">
                <StyledLink path="/" label="WhatsApp" />
                <StyledLink path="/" label="Twitter" />
                <StyledLink path="/" label="Instagram" />
                <StyledLink path="/" label="Facebook" />
              </div>

              <nav className="mobile-footer-links-container">
                <ul className="mobile-footer-links flex-column">
                  {linkArray.map(
                    ({ path, label }: { path: string; label: string }) => (
                      <li key={path} className="mobile-footer-link-list">
                        <StyledLink path={path} label={label} />
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>

            <div className="mobile-creator-brand-container">
              <div className="mobile-footer-brand-container">
                <h5 className="mobile-footer-brand">
                  <span className="mobile-brand-dxc">Dxc</span>
                  <span className="mobile-brand-models">Models</span>
                </h5>
              </div>
                <p className='mobile-creator'>Website by Joel</p>
            </div>
          </div>
        </footer>
    )
}

export default MobileFooter;