import React, { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import axios from "axios";
import { useHistory } from 'react-router-dom';

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory()


    const loginHandler = async (e) => {
        e.preventDefault();

        try {

            const loginData = {
                email,
                password
            };

            await axios.post("http://localhost:5000/user/login", loginData);
            await getLoggedIn();
            history.push("/customer");
            
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandler}>            
                <input type="email" placeholder="email" name="email"
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                 />
                <input type="password" placeholder="password" name="password" 
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;