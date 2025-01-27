import styles from "./page.module.scss";


export default function Page(){
    return(
        <main className={`${styles["about"]}`}>
            <section className={`${styles["about__section"]}`}>
                <h2 className={`${styles["about__title"]}`}>About Us</h2>
                <p className={`${styles["about__description"]}`}>In 2016, we started as San Pedro Calungsod Hauling and Trucking Services, a reliable partner in hauling materials with ease. As we broaden our field, in 2018, we started our washery in Balamban, slowly shaping up our business aggregates. After the pandemic strikes, we merge our business into one as <strong>MG Sand/Gravel and Trucking Services</strong> and living up to its standard of quality aggregates as we as trucking services that caters to your needs.</p>
            </section>
            <section className={`${styles["about__section"]}`}>
                <h2 className={`${styles["about__title"]}`}>Our Mission</h2>
                <p className={`${styles["about__description"]}`}>To provide reliable, high-quality sand, gravel, hauling, and trucking services that exceed customer expectations. We are committed to delivering top-notch materials and custom hauling solutions while ensuring safety, efficiency, and professionalism in every project. Our goal is to build lasting partnerships with our clients by consistently offering competitive pricing, well-maintained equipment, and exceptional customer care.</p>
            </section>
            <section className={`${styles["about__section"]}`}>
                <h2 className={`${styles["about__title"]}`}>Our Vision</h2>
                <p className={`${styles["about__description"]}`}>To become the leading provider of sand, gravel, hauling, and trucking services in the region by setting the standard for reliability, quality, and customer satisfaction. We aim to grow sustainably, embrace innovation, and contribute to the success of construction, landscaping, and infrastructure projects, making a lasting impact on the communities we serve.</p>
            </section>
            <section className={`${styles["about__section"]}`}>
                <h2 className={`${styles["about__title"]}`}>Our Values</h2>
                <ul className={`${styles["about__list"]}`}>
                    <li className={`${styles["about__item"]}`}><strong>Reliability:</strong> We keep our promises by delivering materials and services on time, every time.</li>
                    <li className={`${styles["about__item"]}`}><strong>Quality:</strong> From the materials we deliver to the equipment we maintain, excellence is at the core of everything we do.</li>
                    <li className={`${styles["about__item"]}`}><strong>Safety:</strong> We prioritize the safety of our team, clients, and community by adhering to the highest safety standards in the industry.</li>
                    <li className={`${styles["about__item"]}`}><strong>Integrity:</strong> Honesty, transparency, and professionalism guide every decision and interaction.</li>
                    <li className={`${styles["about__item"]}`}><strong> Sustainability:</strong>We are dedicated to operating responsibly, minimizing our environmental impact, and supporting the long-term success of our community.</li>
                </ul>
            </section>
        </main>
    );
}