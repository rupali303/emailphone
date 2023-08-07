import React, { useEffect, useRef, useState } from 'react'
import classes from "./main.module.css"
import { useNavigate } from 'react-router-dom'

function Login() {

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");


    // const navigate = useNavigate();

    // const handleLoginUsername = (e) => {
    //     setUsername(e.target.value);
    // }

    // const handleLoginPassword = (e) => {
    //     setPassword(e.target.value);
    // }

    // const persons = JSON.parse(window.localStorage.getItem('registerPersons'));

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     persons.map((p) => {
    //         if (!username || !password) {
    //             alert(`Username and password is mandatory. Register first if not registered.`)
    //         }
    //         else if (username === p.username && password === p.password) {
    //                 alert(`Logged in Successfully`)
    //                 navigate('/staffLogin1')
    //         }
    //         else {
    //             alert(`Invalid Credentials`)}
    //     });
    // }

    // const handleRegisterPage = () => {
    //     navigate('/register')
    // }

    const regPersons = JSON.parse(window.localStorage.getItem('registeredDataFinal'));
    console.log(regPersons);

    // const [freshLogin, setFreshLogin] = useState({
    //     username: "",
    //     password: ""
    // });

    // const [loginData, setLoginData] = useState([])

    // const navigate = useNavigate();

    // const formRef = useRef(null);

    // const handleChange = (e) => {
    //     setFreshLogin((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    // };

    // useEffect(() => {
    //     const loginStoredData = localStorage.getItem('loginDataFinal');
    //     if (loginStoredData) {
    //         setLoginData(JSON.parse(loginStoredData));
    //     }
    // }, []);

    // const handleLoginUser = (e) => {
    //     e.preventDefault();
    //     const loginDataFinal = [...loginData, freshLogin];
    //     setLoginData(loginDataFinal);
    //     // alert(`Registered Successfully`)
    //     localStorage.setItem("loginDataFinal", JSON.stringify(loginDataFinal));

    //     formRef.current.reset();
    //     setFreshLogin({
    //         username: "",
    //         password: ""
    //     })
    //     regPersons.map((person) => {
    //         if (!loginDataFinal.username || !loginDataFinal.password) {
    //             alert(`Username and password is mandatory. Register first if not registered.`)
    //         }
    //         if (loginDataFinal.username !== person.username || loginDataFinal.password !== person.password) {
    //             alert(`Invalid Credentials`)
    //         }
    //     });
    //     const logPerson = regPersons.find((person)=>{
    //         regPersons.map((person)=>{
    //             return person.username
    //         })
    //         return person.username === loginDataFinal.username
    //     })
    //     console.log(logPerson);
    // };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        console.log(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    const logPerson = regPersons.find((person) => {
        return username === person.username;
    })

    const handleLoginUser = (e) => {
        e.preventDefault();
        // const loginDataFinal = {username : username, password : password}
        // setLoginData(loginDataFinal);
        // alert(`Registered Successfully`)
        // localStorage.setItem("loginDataFinal", JSON.stringify(loginDataFinal));

        if (!username || !password) {
            alert(`Username and password is mandatory. Register first if not registered.`)
        }
        else if (username !== logPerson.username || password !== logPerson.password) {
            alert(`Invalid Credentials`)
        }
        else if (username === logPerson.username && password === logPerson.password && logPerson.role === "staff") {
            alert(`Logged in successfully`);
            navigate('/staffLogin1')
        }
        else if (username === logPerson.username && password === logPerson.password && logPerson.role === "hod") {
            alert(`Logged in successfully`);
            navigate('/hodLogin1')
        }
        // const logPerson = regPersons.find((person)=>{
        //     return person.username === username
        // })
        // console.log(logPerson);
        // localStorage.setItem("logPerson", JSON.stringify(logPerson));
        // if(logPerson.username === username && logPerson.password === password){
        //     alert(`Logged in successfully`);
        //     navigate('/staffLogin1')
        // }
        // const logPerson = regPersons.find((person)=>{
        //     return person.username === username
        // })
        console.log(logPerson);
        localStorage.setItem("logPerson", JSON.stringify(logPerson));
    };

    const handleRegisterPage = () => {
        navigate('/register')
    }



    return (
        <>
            <div className={classes.container}>
                <form>
                    <div className={classes.group}>
                        <label>Username</label>
                        {/* <input onChange={handleLoginUsername} type='text'></input> */}
                        <input onChange={handleUsernameChange} type='text' id={username}></input>
                    </div>
                    <div className={classes.group}>
                        <label>Password</label>
                        {/* <input onChange={handleLoginPassword} type='password'></input> */}
                        <input onChange={handlePasswordChange} type='password' id={password}></input>
                    </div>
                    {/* <button onClick={handleLogin} className={classes.btn}>Login</button> */}
                    <button onClick={handleLoginUser} className={classes.btn}>Login</button>
                </form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <span>Not registered yet?</span>
                    <button onClick={handleRegisterPage} className={classes.btn2}>Register</button>
                </div>
            </div>
        </>
    )
}

export default Login