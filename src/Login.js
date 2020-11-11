import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(e=>alert(e.message));
    };

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(e=>alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
                    alt="Amazon Logo" 
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event=> setPassword(event.target.value) } type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                    <p>By Signing in you agree to Amazons condition of use and sale. Please see our privacy policy, our use of cookies notice and our ad notice.</p>
                    <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
