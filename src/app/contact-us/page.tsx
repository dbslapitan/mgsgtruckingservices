import Map from "@/ui/map/map";
import styles from "./page.module.scss";
import Link from "next/link";


export default function Page(){
    return(
        <main className={`${styles["contacts"]}`}>
            <h1 className={`${styles["contacts__title"]}`}>Contact Us</h1>
            <address className={`${styles["contacts__detail"]}`}>
                    6Q43+H8Q City of Naga, 
                    <br />
                    Cebu, Philippines
            </address>
            {/* <Link href="tel:+639628028946" className={`${styles["contacts__detail"]}`}><strong>SMART:</strong> (+63) 962 802 8946</Link> */}
            <Link href="tel:+639674534460" className={`${styles["contacts__detail"]}`}><strong>GLOBE:</strong> (+63) 917 109 6379</Link>
            <Link href="mailto:lapitan@mgsgtruckingservices.com?subject=Business Inquiry" className={`${styles["contacts__detail"]}`}>lapitan@mgsgtruckingservices.com</Link>
            <Map/>
        </main>
    );
}