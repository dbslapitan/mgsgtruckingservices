import styles from "./page.module.scss";
import gallery01 from "../../../public/gallery/gallery-01.jpg";
import gallery02 from "../../../public/gallery/gallery-02.jpg";
import gallery03 from "../../../public/gallery/gallery-03.jpg";
import gallery04 from "../../../public/gallery/gallery-04.jpg";
import gallery05 from "../../../public/gallery/gallery-05.jpg";
import gallery06 from "../../../public/gallery/gallery-06.jpg";
import gallery07 from "../../../public/gallery/gallery-07.jpg";
import gallery08 from "../../../public/gallery/gallery-08.jpg";
import gallery09 from "../../../public/gallery/gallery-09.jpg";
import gallery10 from "../../../public/gallery/gallery-10.jpg";
import gallery11 from "../../../public/gallery/gallery-11.jpg";
import gallery12 from "../../../public/gallery/gallery-12.jpg";
import gallery13 from "../../../public/gallery/gallery-13.jpg";
import gallery14 from "../../../public/gallery/gallery-14.jpg";
import gallery15 from "../../../public/gallery/gallery-15.jpg";
import gallery16 from "../../../public/gallery/gallery-16.jpg";
import gallery17 from "../../../public/gallery/gallery-17.jpg";
import gallery18 from "../../../public/gallery/gallery-18.jpg";
import gallery19 from "../../../public/gallery/gallery-19.jpg";
import gallery20 from "../../../public/gallery/gallery-20.jpg";
import gallery21 from "../../../public/gallery/gallery-21.jpg";
import gallery22 from "../../../public/gallery/gallery-22.jpg";
import gallery23 from "../../../public/gallery/gallery-23.jpg";
import gallery24 from "../../../public/gallery/gallery-24.jpg";
//import gallery25 from "../../../public/gallery/gallery-25.jpg";
import gallery26 from "../../../public/gallery/gallery-26.jpg";
import gallery27 from "../../../public/gallery/gallery-27.jpg";
import gallery28 from "../../../public/gallery/gallery-28.jpg";
import gallery29 from "../../../public/gallery/gallery-29.jpg";
import gallery30 from "../../../public/gallery/gallery-30.jpg";
import gallery31 from "../../../public/gallery/gallery-31.jpg";
import gallery32 from "../../../public/gallery/gallery-32.jpg";
import gallery33 from "../../../public/gallery/gallery-33.jpg";
import gallery34 from "../../../public/gallery/gallery-34.jpg";
import gallery35 from "../../../public/gallery/gallery-35.jpg";
import Image from "next/image";

export default function Page(){

    const gallery = [gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07, gallery08, gallery09, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery26, gallery27, gallery28, gallery29, gallery30, gallery31, gallery32, gallery33, gallery34, gallery35];

    return(
        <main className={`${styles["gallery"]}`}>
            <h1 className={`${styles["gallery__title"]}`}>Gallery</h1>
            <ul className={`${styles["gallery__list"]}`}>
                {
                    gallery.map((image, index) => {
                        return(
                            <li key={`gallery-${index}`} className={`${styles["gallery__item"]}`}>
                                <Image className={`${styles["gallery__image"]}`} src={image} alt=""/>
                            </li>
                        );
                    })
                }
            </ul>
        </main>
    );
}