"use client";

import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import close from "../../../public/assets/close.svg";
import hamburger from "../../../public/assets/hamburger.svg";
import { MouseEvent, useEffect, useState } from "react";

export default function Header(){

    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    const segments = path.split("/");

    const navToggle = (event: MouseEvent) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {

        const windowClick = () => {
            if(isOpen){
                setIsOpen(false);
            }
        };
        window.addEventListener("click", windowClick);

        return () => {
            window.removeEventListener("click", windowClick);
        }
    });

    return(
        <header className={`${styles["header"]}`}>
            <Link className={`${styles["header__logo"]}`} href="/">
                <Image className={`${styles["header__image"]}`} width={128} height={128} src={logo} alt="MG Sand and Gravel, Hauling, and Trucking Services" priority />
            </Link>
            <nav className={`${styles["nav"]}`}>
                <button className={`${styles["nav__toggle"]}`} onClick={navToggle}>
                    <Image src={isOpen ? close : hamburger} width={48} height={48} alt=""/>
                </button>
                <ul className={`${styles["nav__list"]} ${isOpen ? styles["nav__list--show"] : ""}`}>
                    <li className={`${styles["nav__item"]}`}>
                        <Link className={`${styles["nav__link"]} ${segments[1] === "about" ? styles["nav__link--selected"] : ""}`} href={"/about"}>About</Link>
                    </li>
                    <li className={`${styles["nav__item"]}`}>
                        <Link className={`${styles["nav__link"]} ${segments[1] === "services" ? styles["nav__link--selected"] : ""}`} href={"/services"}>Services</Link>
                    </li>
                    <li className={`${styles["nav__item"]}`}>
                        <Link className={`${styles["nav__link"]} ${segments[1] === "gallery" ? styles["nav__link--selected"] : ""}`} href={"/gallery"}>Gallery</Link>
                    </li>
                    <li className={`${styles["nav__item"]}`}>
                        <Link className={`${styles["nav__link"]} ${segments[1] === "contact-us" ? styles["nav__link--selected"] : ""}`} href={"/contact-us"}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

