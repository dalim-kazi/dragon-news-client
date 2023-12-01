import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        
        <footer className='bg-black'>
            <div className='text-center'>
                <h3><FaFacebook className='me-5 mt-5 mb-5 text-primary'></FaFacebook>
                <FaYoutube className='me-5 mt-5 mb-5 text-primary'></FaYoutube>
                <FaGoogle className='me-5 mt-5 mb-5 text-primary'></FaGoogle>
                <FaTwitter className='me-5 mt-5 mb-5 text-primary'></FaTwitter></h3>
            </div>
            <div>
                <ul className='d-flex justify-content-center text-white ps-3 pe-3'>
                    <p className='me-3'>Contact Number : 01755876658</p>
                    <p>Email : mddalim862483@gmail.com</p>
                </ul>
            </div>
          </footer>
    );
    }

export default Footer;