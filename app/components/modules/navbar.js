import Button from "../elements/button";
import Logo from "../../../public/images/logo.svg";
import styles from './navbar.module.css';

export default function Navbar () {
    return(
        <div className={styles.container}>
            <Logo />
            <ul className={styles.items}>
                <li className={styles.navitems}>Pricing</li>
                <li className={styles.navitems}>Product</li>
                <li className={styles.navitems}> About Us</li>
                <li className={styles.navitems}>Careers</li>
                <li className={styles.navitems}>Community</li>
            </ul>
            <div className={styles.button}>
                <Button />
            </div>
        </div>
    );
};