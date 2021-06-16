import styles from "./form.module.css";
import { useState } from "react";

export default function Form() {

    const [ mail, setMail] = useState('');
    const [ message, setMessage ] = useState('');

    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // const handleChangeMail = e => {
    //     e.preventDefault();
    //     const email = e.target.value;
    //     if(emailReg.test(email)) {
    //         console.log(e)
    //         setMail(email)
    //         setMessage('');
            
    //     } else {
    //         setMail('');
    //         setMessage("Please insert a valid email");
    //     }
    // }

    function handleChangeMail(e) {
        e.preventDefault();
        setMail(e.target.value)
        console.log(e)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <label htmlFor="email"></label>
            <input 
            className={styles.input} 
            type="email" 
            placeholder="Updates in your inbox…"
            value={mail}
            onChange={handleChangeMail}
            />
            <button className={styles.button} type="submit">Go</button>
            <div className={styles.msg}>
                {message}
            </div>
        </form>
    );
}


