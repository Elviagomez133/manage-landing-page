import styles from '../modules/footer.module.css';
import Logo from "../../../public/images/logo.svg";

export default function Footer() {
    return(
        <div className={styles.container}>
            <div className={styles.first}>
                <Logo />
            </div>
            <div className={styles.second}>
            </div>
            <div className={styles.third}>
            </div>
            <div className={styles.fourth}>
            </div>
        </div>
    );
}