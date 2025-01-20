import styles from "./page.module.scss";
import logo from "../../public/assets/mts_logo.png";
import Image from "next/image";
import Map from "@/ui/map/map";
import dumpIcon from "../../public/assets/dump.png";
import gravelIcon from "../../public/assets/gravel.png";

export default function Homepage(){

    return (
        <>
            <header className={`${styles["header"]}`}>
                <a className={`${styles["header__logo"]}`} href="#">
                    <Image src={logo} width={64} height={64} alt="MTS"></Image>
                </a>
                <a href="#contact" className={`${styles["contactus"]}`}>Contact Us</a>
            </header>
            <main>
                
                <section className={`${styles["services"]}`}>
                    <div className={`${styles["section"]}`}>
                        <h2 className={`${styles["section__title"]}`}>Our Services</h2>
                        <ul className={`${styles["services__list"]}`}>
                            <li className={`${styles["services__item"]} ${styles["card"]}`}>
                                <Image src={dumpIcon} alt="dumptruck" className={`${styles["card__image"]}`} style={{width: "auto", height: "auto"}}></Image>
                                <h3 className={`${styles["card__title"]}`}>Hauling</h3>
                            </li>
                            <li className={`${styles["services__item"]} ${styles["card"]}`}>
                                <Image src={gravelIcon} alt="dumptruck" className={`${styles["card__image"]}`} style={{width: "auto", height: "auto"}}></Image>
                                <h3 className={`${styles["card__title"]}`}>Sand & Gravel</h3>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <footer id="contact" className={`${styles["contact"]}`}>
                <h2 className={`${styles["section__title"]}`}>Contact Us</h2>
                <address>
                    6Q43+H8Q City of Naga, 
                    <br />
                    Cebu, Philippines
                </address>
                <p>{`SMART: (+63) 962 802 8946`}</p>
                <p>{`GLOBE: (+63) 967 453 4460`}</p>
                <p>{`lapitan@mgsgtruckingservices.com`}</p>
                <Map/>
            </footer>
        </>
    );
}