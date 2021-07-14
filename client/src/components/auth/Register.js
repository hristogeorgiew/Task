import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import axios from "axios";
import AuthContext from '../../context/AuthContext';

export function Register(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory()

    const registerHandler = async (e) => {
        e.preventDefault();

        try {

            const registerData = {
                name,
                email,
                password
            };

            await axios.post("http://localhost:5000/user/register", registerData);
            await getLoggedIn();
            history.push("/");
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerHandler}>
                <input type="text" placeholder="name" name="name" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="email" placeholder="email" name="email"
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                 />
                <input type="password" placeholder="password" name="password" 
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;