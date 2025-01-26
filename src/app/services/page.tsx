import Image from "next/image";
import styles from "./page.module.scss";
import trucking from "../../../public/assets/transport.png";
import hauling from "../../../public/assets/dump.png";
import aggregates from "../../../public/assets/gravel.png";


export default function Page(){
    return(
        <main className={`${styles["services"]}`}>
            <h1 className={`${styles["services__title"]}`}>Our Services</h1>
            <ul className={`${styles["services__list"]}`}>
                <li className={`${styles["services__item"]}`}>
                    <Image className={`${styles["services__image"]}`} src={trucking} width={512} height={512} alt=""/>
                    <h2 className={`${styles["services__sub"]}`}>Trucking</h2>
                </li>
                <li className={`${styles["services__item"]}`}>
                    <Image className={`${styles["services__image"]} ${styles["services__image--hauling"]}`} src={hauling} width={512} height={512} alt=""/>
                    <h2 className={`${styles["services__sub"]}`}>Hauling</h2>
                </li>
                <li className={`${styles["services__item"]}`}>
                    <Image className={`${styles["services__image"]} ${styles["services__image--hauling"]}`} src={aggregates} width={512} height={512} alt=""/>
                    <h2 className={`${styles["services__sub"]}`}>Sand & Gravel</h2>
                </li>
            </ul>
        </main>
    );
}