import React from 'react';
import Link from "next/link";

interface NavItemProps {
  href: string;
  text: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, active }) => {
  return (
    <div>
      <Link href={href} className={` nav__link ${active ? "active" : ""}`}>
        {text}
      </Link>
    </div>
  )
};

export default NavItem;