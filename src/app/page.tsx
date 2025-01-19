import styles from "./page.module.scss";

export default function Homepage(){
    return (
        <>
            <header className={`${styles["header"]}`}>
                <a className={`${styles["header__logo"]}`} href="#">MGSG Trucking Services</a>
            </header>
        </>
    );
}