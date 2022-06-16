import styles from './styles.module.css';
import success  from '../../images/success.png'
import { useState,useEffect,Fragment } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
const EmailVerify=()=>{
    const[validUrl,setValidUrl]=useState(false);
    const param=useParams();
    useEffect(()=>{
        const verifyEmailUrl=async()=>{
            try {
                const url=`http://localhost:8080/api/users/${param.id}/verify/${param.token}`;
                const {data}=await axios.get(url);
                console.log(data);
                console.log("In Email verify section");
                setValidUrl(true);
            } catch (error) {
                console.log(error);
                setValidUrl(false);
            }
        };
        verifyEmailUrl();
    },[param]);
    return(
        <Fragment>
            {validUrl?(
                <div className={styles.container}>
                    <img src={success} alt="succeess_img" className={styles.success_img} />
                    <h1>Email Verified Successfully</h1>
                    <Link to="/login">
                        <button className={styles.green_btn}>Login</button>
                    </Link>
                </div>
            ):(
                <h1> 404 Not Found</h1>
            )}
        </Fragment>
    )
};
export default EmailVerify;