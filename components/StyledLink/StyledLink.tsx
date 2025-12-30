import Link from "next/link";

import "./styledLink.css";

interface StyledLinkProps {
    path: string;
    label: string;
    closeNav?: () => void;
}
const StyledLink = ({ path, label, closeNav }: StyledLinkProps) => {
  return (
    <>
      <Link href={path} className="link flex" onClick={closeNav}>
        (<span>{label}</span>)
      </Link>
    </>
  );
};

export default StyledLink;
