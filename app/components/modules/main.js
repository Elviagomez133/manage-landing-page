import styles from "../modules/main.module.css";

export default function Main(){
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.title}>What’s different about Manage?</h1>
                <p className={styles.content}>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
            </div>
            <div className={styles.right}>
                <div className={styles.box}>
                    <h2 className={styles.number}>01</h2>
                    <div className={styles.context}>
                        <h3 className={styles.headings}>Track company-wide progress</h3>
                        <p className={styles.paragrahs}>  See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <h2 className={styles.number}>02</h2>
                    <div className={styles.context}>
                        <h3 className={styles.headings}>Advanced built-in reports</h3>
                        <p className={styles.paragrahs}>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <h2 className={styles.number}>03</h2>
                    <div className={styles.context}>
                        <h3 className={styles.headings}>Everything you need in one place</h3>
                        <p className={styles.paragrahs}>  Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}