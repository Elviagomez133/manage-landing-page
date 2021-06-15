import SecondButton from '../elements/secondButton';
import styles from '../modules/section.module.css';

export default function Section() {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Simplify how your team works today.</h2>
            <div className={styles.button}>
                <SecondButton />
            </div>
        </div>
    );
}