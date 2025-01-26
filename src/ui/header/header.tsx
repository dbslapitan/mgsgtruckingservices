import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../../public/assets/logo.png";

export default function Header(){
    return(
        <header className={`${styles["header"]}`}>
            <a className={`${styles["header__logo"]}`} href="/">
                <Image src={logo} width={64} height={64} alt="MTS"></Image>
            </a>
            
        </header>
    );
}

