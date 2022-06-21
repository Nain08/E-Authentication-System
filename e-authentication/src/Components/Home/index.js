import './styles.css';
import React from 'react'
import background from './image/background.jpg'
import { Link,Route,Routes,Navigate } from 'react-router-dom';
import Main from '../Main';
import Login from '../Login';
import SignUp from '../Sign';

function Home() {
    
    return (
        <>
            
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
            <div>
                <img className="bg" src={background} alt="Background" />
            </div>
            
            <div className='heading'>
                EAT.
                <br />
                SLEEP.
                <br />
                {"<"}CODE{"/>"}
                <br />
                REPEAT .
            </div>
            
                <Link to="/login">
                <div className="home_btn_login">
                <button type="button" className="btn btn-secondary btn-lg ">Login</button>
            </div>
                </Link>
            <Link to="/signup">
            <div className="home_btn_signup">
            <button type="button" className="btn btn-secondary  btn-lg">Sign Up</button>
            </div>
            </Link>
            
            
        </>
    )
}

export default Home
