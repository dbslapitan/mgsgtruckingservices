import styles from "./page.module.scss";

export default function Page(){
    return(
        <main className={`${styles["gallery"]}`}>
            <h1 className={`${styles["gallery__title"]}`}>Gallery</h1>
        </main>
    );
}