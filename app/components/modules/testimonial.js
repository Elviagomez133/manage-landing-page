import styles from "../modules/testimonial.module.css";
import Button from "../elements/button";
import Image from "next/image";

export default function Testimonial() {
    return(
       <div className={styles.container}>
            <h2 className={styles.title}>What they’ve said</h2>
            <div className={styles.sliders}>
                <div className={styles.box}>
                    <div className={styles.img}>
                        <Image src="/images/avatar-anisha.png" alt="anisha li" width={100} height={100}/>
                    </div>
                    <h3 className={styles.top}>Anisha Li</h3>
                    <p className={styles.bottom}>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                </div>
                <div className={styles.box}>
                    <div className={styles.img}>
                        <Image src="/images/avatar-ali.png" alt="ali bravo" width="100" height="100"/>
                    </div>
                    <h3 className={styles.top}>Ali Bravo</h3>
                    <p className={styles.bottom}>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                </div>
                <div className={styles.box}>
                    <div className={styles.img}>
                        <Image src="/images/avatar-richard.png" alt="richard watts" width="100" height="100"/>
                    </div>
                    <h3 className={styles.top}> Richard Watts</h3>
                    <p className={styles.bottom}>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
                </div>
            </div>
            <div className={styles.button}>
                <Button />
            </div>
       </div>
    );
}