import styles from '../modules/footer.module.css';
import Logo from "../../../public/images/logo-white.svg";
import Form from "../elements/form";
import Facebook from "../../../public/images/icon-facebook.svg";
import Youtube from "../../../public/images/icon-youtube.svg";
import Twitter from "../../../public/images/icon-twitter.svg";
import Pinterest from "../../../public/images/icon-pinterest.svg";
import Instagram from "../../../public/images/icon-instagram.svg";


export default function Footer() {
    return(
        <div className={styles.container}>
            <div className={styles.first}>
                <Logo />
                <ul className={styles.items}>
                    <li className={styles.navitems}>Home</li>
                    <li className={styles.navitems}>Pricing</li>
                    <li className={styles.navitems}>Products</li>
                    <li className={styles.navitems}>About Us</li>
                </ul>
                <ul className={styles.items}>
                    <li className={styles.navitems}>Careers</li>
                    <li className={styles.navitems}>Community</li>
                    <li className={styles.navitems}>Privacy Policy</li>
                </ul>
                <Form />
            </div>
            <div className={styles.second}>
                <div className={styles.icons}>
                    <div>
                        <Facebook />
                    </div>
                    <div>
                        <Youtube />
                    </div>
                    <div>
                        <Twitter />
                    </div>
                    <div>
                        <Pinterest />
                    </div>
                    <div>
                        <Instagram />
                    </div>
                </div>
                <p className={styles.copy}>Copyright 2020. All Rights Reserved</p>
            </div>
        </div>
    );
}