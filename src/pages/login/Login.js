import React, { useContext, useState } from 'react';
 import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { Button } from 'react-bootstrap';
import useTitle from '../../Title/Title';
const Login = () => {
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate =useNavigate()
    const [error, setError] = useState(null)
    const [userEmail ,setUserEmail]=useState()
    const { EmailAndPasswordLogin, setLoading, PasswordReset } = useContext(AuthContext)
    useTitle('login')
    const handleLogin = (event) => {
        event.preventDefault() 
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        EmailAndPasswordLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('successful login your account')
                setError('')
                form.reset()
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('con not your email verify')
                }
            })
            .catch(error => {
                const massageError = error.code;
                toast.error('unsuccessful login your account . please try again???')
                setError(massageError)
            })
            .finally(() => {
            setLoading(false)
            })
        
    }
    const handlePasswordBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email)
        console.log(email)
    }
        const handlePasswordReset = () => {
            PasswordReset(userEmail)
                .then(() => { 
                    toast.success('success your password reset . please check your email')
                })
                .catch(error => {
                    toast.error('please enter your current email.')
                    console.error(error)
            })
        }
    return (
        <>
            <div className='form-container'>
            <p className='form-title'>Dragon news</p>
            <form onSubmit={handleLogin}  className='form'>
                <div className="form-control border-0">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handlePasswordBlur} type="email" name="email" id=""  placeholder='enter email' required/>
                </div>
                <div className="form-control border-0">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='enter password' required />
                        <p className='errorInfo'> {error}</p>
                        <Button onClick={handlePasswordReset} variant="link">Forget password</Button>
                </div>
                <div className='btn-container'>
                    <button className='btn-login'>Login</button>
                </div>
            </form>
            <p className='info'>Dragon news <Link to="/register" className='underline underline-offset-4 text-red-500'  > create a new account</Link></p>
        </div>
      </>
    );
};

export default Login;