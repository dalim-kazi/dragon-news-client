import React, { useContext, useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../Title/Title';
const Register = () => {
    const navigate =useNavigate()
    const [error, setError] = useState(null)
    const [check, setCheck]=useState(false)
    const { EmailAndPasswordRegister, profileUpdate, EmailVarification } = useContext(AuthContext)
    useTitle('register')
    const handleSubmitSingUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm)
        if (password.length < 8) {
          return  setError('all most 8 charater pleace')
        }
        if (password !== confirm) {
          return  setError('auth/inCurrent password')
        }
        EmailAndPasswordRegister(email, password, confirm)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                form.reset()
                profileUpdateEmailAndPassword(name, photoUrl)
                handleEmailVerifiy()
                toast.success('successfull your account.pleace Verifiy your email')
                navigate('/login')
                
            })
            .catch(error => {
                console.error(error)
                 
            })
    }
    const profileUpdateEmailAndPassword = (name,photoUrl) => {
        const profile = {
            displayName: name,
            photoURL:photoUrl
        }
        profileUpdate(profile)
            .then (() => { })
        .catch(error=>console.error(error))
    }
    const handleCheck=(event) => {
        setCheck(event.target.checked)
    }
    const handleEmailVerifiy = () => {
        EmailVarification()
            .then(() => { })
        .catch(error=>console.log(error))
    }
    return (
        <div className='form-container1'>
        <p className='form-title1'>Dragon news</p>
            <form onSubmit={handleSubmitSingUp} className='form'>
            <div className="form-control1">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id=""  placeholder='enter name' required/>
                </div>
                <div className="form-control1">
                <label htmlFor="photoUrl">PhotoUrl</label>
                <input type="text" name="photoUrl" id=""  placeholder='enter your photoUrl' required/>
            </div>
            <div className="form-control1">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id=""  placeholder='enter email ' required/>
            </div>
            <div className="form-control1">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id=""  placeholder='enter password' required/>
                </div>
                <div className="form-control1">
                <label htmlFor="password">confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='enter confirm password' required />
                    <p className='errorInfo'>{error}</p>
                </div>
                <div class="mb-3 form-check">
    <input onClick={handleCheck} type="checkbox" class="form-check-input" name='checkbox' id="exampleCheck1"/>
    <label class="form-check-label text-success" for="exampleCheck1">Accpet <Link to="/termsConditions">Terms and Conditions</Link> </label>
  </div>
               
            <div className='btn-container1'>
                <button className='btn-login1' disabled={!check}>Login</button>
            </div>
            </form>
            <p className='info1'> Alredy Have an account  <Link className='underline underline-offset-5 text-red-500' to="/login">  Login</Link></p>
    </div>
    );
};

export default Register;