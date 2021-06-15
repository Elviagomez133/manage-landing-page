import Navbar from "../modules/navbar";
import Header from "../modules/header";
import Main from "../modules/main";
import Testimonial from "../modules/testimonial.js";
import Section from "../modules/section";
import Footer from "../modules/footer";


export default function Default () {
    return(
        <div>
           <Navbar /> 
           <Header />
           <Main />
           <Testimonial />
           <Section />
           <Footer />
        </div>
    );
}