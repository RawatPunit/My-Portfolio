import styles from './FooterStyles.module.css'

function Footer(){
    return (
        <section id="footer" className={styles.container}>
            <p>
                © 2024 Punit R. Rawat. <br/>
                All Rights Reserved
            </p>
        </section>
    );
}