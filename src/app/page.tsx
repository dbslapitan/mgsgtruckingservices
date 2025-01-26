import styles from "./page.module.scss";
import Image from "next/image";
import hero from "../../public/assets/hero.jpg";
import Link from "next/link";

export default function Homepage(){

    return (
        <main className={`${styles["landing"]}`}>

            <section className={`${styles["landing__section"]}`}>
                <Image className={`${styles["landing__hero"]}`} src={hero} width={600} height={600} alt=""></Image>
                <p className={`${styles["landing__description"]}`}>Welcome to <strong>MGSG Trucking Services</strong>, your trusted partner for sand, gravel, hauling, and trucking services. With a commitment to reliability and quality, we deliver top-notch materials and offer custom hauling solutions tailored to your needs. We pride ourselves on competitive pricing, well-maintained equipment, and exceptional customer satisfaction. Contact us via phone or email and let us take care of your hauling and material delivery needs with precision and care.</p>
            </section>
            <Link className={`${styles["landing__redirect"]}`} href="/contact-us">Contact Us</Link>

            {/* <main>
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
            </footer> */}
        </main>
    );
}