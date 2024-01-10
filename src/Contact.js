import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Contact() {
    const [email, setEmail] = useState('');
    const nav = useNavigate()
    const handleChange = e =>{
        setEmail(e.target.value)
    }
    const storeEmail = ()=>{
        alert("Whoops, No storage")
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        storeEmail(email)
        nav('/')

    }
    return(
        <div>
            <h1>Contact Page</h1>
            <p>Enter an email</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;