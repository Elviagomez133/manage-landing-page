import Button from "../elements/button";
import Assets from "../../../public/images/illustration-intro.svg";
import styles from "../modules/header.module.css";

export default function Header() {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.title}>Bring everyone together to build better products.</h1>
                <p className={styles.content}>Manage makes it simple for software teams to plan day-to-day asks while keeping the larger team goals in view.</p>
                <div className={styles.input}>
                    <Button />
                </div>
            </div>
            <div className={styles.right}>
               <Assets />
            </div>
        </div>
    );
};