import Navbar from "../modules/navbar";
import Header from "../modules/header";
import Main from "../modules/main";
import Testimonial from "../modules/testimonial.js";
import Section from "../modules/section";
import Footer from "../modules/footer";
import styles from "../layouts/default.module.css";


export default function Default () {
    return(
        <div>
           <div className={styles.container}>
                <Navbar /> 
                <Header />
           </div>
           <div className={styles.section}>
            <Main />
            <Testimonial />
           </div>
           <Section />
           <Footer />
        </div>
    );
}