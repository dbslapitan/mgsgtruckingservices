import styles from "./page.module.scss";
import logo from "../../public/assets/mts_logo.png";
import Image from "next/image";
import Map from "@/ui/map/map";

export default function Homepage(){

    return (
        <>
            <header className={`${styles["header"]}`}>
                <a className={`${styles["header__logo"]}`} href="#">
                    <Image src={logo} width={64} height={64} alt="MTS"></Image>
                </a>
                <a href="#" className={`${styles["contactus"]}`}>Contact Us</a>
            </header>
            <footer className={`${styles["contact"]}`}>
                <h2>Contact Us</h2>
                <address>
                    6Q43+H8Q City of Naga, Cebu, Philippines
                </address>
                <Map/>
            </footer>
        </>
    );
}