import styles from './button.module.css';

export default function Button () {
    return (
        <div>
            <button type="button" className={styles.button}>Get Started</button>
        </div>
    );
};