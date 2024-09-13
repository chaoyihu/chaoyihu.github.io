import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";

const MENU_LIST = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "Projects",
        href: "/projects"
    },
    {
        text: "Blogs",
        href: "/blogs"
    }
]

const Navbar = () => {

    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <header className="sticky-header">
            <nav className='nav'>
                <Link href="/" onClick={() => setActiveIdx(0)}>
                        <h1 className='logo'>chaoyihu.github.io</h1>
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
        </header>
    )
};

export default Navbar;