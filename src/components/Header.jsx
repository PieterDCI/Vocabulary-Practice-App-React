import { useState, useContext } from "react";
import UserModeContext from './contexts/UserModeContext';
import {wordsDE } from "./../localStorageDE"

import "../styling/header.css"


function Header(){

    const {user, setUser} = useContext(UserModeContext);

    const [loginState, setLoginState] = useState('Login')
    const [display, setDisplay] = useState(false);
    const [loginVisible, setLoginVisible] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const displayLogin = () => {setDisplay(!display); setLoginVisible(!loginVisible)};
    const updateUser = (e) => {setUsername(e.target.value.toLowerCase())};
    const updatePassword = (e) => {setPassword(e.target.value)};

    const checkUser = () => {
        if(wordsDE.users[username] === password) {
           setUser(username); setUsername(''); setPassword('');
           setLoginState(username)
           displayLogin();

        } else {
            alert('Incorrect user/password. Please try again');
            setUsername(''); setPassword('');
        }
    }

    return (
        <header>
            <div className="brand">Artikelz practice app</div>
            {display? <div className="loginForm">
                <input className="userInput" type="text" placeholder="Username..." value={username} onChange={updateUser} />
                <input className="userInput" type="password" placeholder="Password..." value={password} onChange={updatePassword} />
                <button className="loginBtn" onClick={checkUser}>Log in</button>
            </div> : null}
            {loginVisible? <button className="loginBtn" onClick={displayLogin}>{loginState}</button> : null}
            
        </header>
    )
}

export default Header;