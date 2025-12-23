import Link from "next/link";

import "./styledLink.css";
// import ArrowRight from "../ArrowRight";

const StyledLink = ({ path, label }: { path: string; label: string }) => {
  return (
    <>
      <Link href={path} className="link flex">
        (<span>{label}</span>)
      </Link>
    </>
  );
};

export default StyledLink;
