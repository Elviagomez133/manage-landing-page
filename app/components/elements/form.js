import styles from "./form.module.css";

export default function Form() {
    const newsletter = (e) => {
        //does not redirect the page.
        e.preventDefault()
    }

    return(
        <form className={styles.container} onSubmit={newsletter}>
            <label htmlFor="email"></label>
            <input className={styles.input} id="email" type="text" required  placeholder="Updates in your inbox…"/>
            <button className={styles.button} type="submit">Go</button>
        </form>
    );
}