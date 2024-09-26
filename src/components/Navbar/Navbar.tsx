import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavItem from "./NavItem";

const MENU_LIST = [
    {
        text: "Home",
        href: "/",
        idx: 0
    },
    {
        text: "Projects",
        href: "/projects",
        idx: 1
    },
    {
        text: "Blogs",
        href: "/blogs",
        idx: 2
    },
    {
        text: "Contact",
        href: "/contact",
        idx: 3
    }
]

const Navbar = () => {

    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const sortedMenuList = [...MENU_LIST].sort((a, b) => b.href.length - a.href.length);
        const matchingItem = sortedMenuList.find(item => currentPath.startsWith(item.href));
        if (matchingItem) {
            setActiveIdx(matchingItem.idx);
        }
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <nav className='nav'>
            <Link href="/" onClick={() => setActiveIdx(0)}>
                <img src="/favicon.ico" width='50px' />
            </Link>

            <div onClick={() => setNavActive(!navActive)} className="nav__menu-bar">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                {
                    MENU_LIST.map((item, idx) => {
                        return (
                            <div
                                onClick={() => {
                                    setActiveIdx(idx);
                                    setNavActive(false);
                                }}
                                key={item.text}
                            >
                                <NavItem active={activeIdx === idx} {...item}></NavItem>
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    )
};

export default Navbar;