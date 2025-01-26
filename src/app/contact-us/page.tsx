import Map from "@/ui/map/map";
import styles from "./page.module.scss";


export default function Page(){
    return(
        <main className={`${styles["contacts"]}`}>
            <h1 className={`${styles["contacts__title"]}`}>Contact Us</h1>
            <address className={`${styles["contacts__detail"]}`}>
                    6Q43+H8Q City of Naga, 
                    <br />
                    Cebu, Philippines
            </address>
            <a href="tel:+639628028946" className={`${styles["contacts__detail"]}`}><strong>SMART:</strong> (+63) 962 802 8946</a>
            <a href="tel:+639674534460" className={`${styles["contacts__detail"]}`}><strong>GLOBE:</strong> (+63) 967 453 4460</a>
            <a href="mailto:lapitan@mgsgtruckingservices.com?subject=Business Inquiry" className={`${styles["contacts__detail"]}`}>lapitan@mgsgtruckingservices.com</a>
            <Map/>
        </main>
    );
}