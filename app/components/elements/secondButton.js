import styles from './secondButton.module.css';

export default function SecondButton () {
    return (
        <div>
            <button type="button" className={styles.button}>Get Started</button>
        </div>
    );
};