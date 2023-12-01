import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {FaWhatsapp} from "react-icons/fa";
import { FcGoogle} from "react-icons/fc";
import {AiFillGithub,AiFillFacebook,AiFillTwitterSquare,AiFillYoutube } from "react-icons/ai";
import { ButtonGroup } from 'react-bootstrap';
import Cracaul from '../cracaul/Cracaul';
import Vidoes from '../Vidoes/Vidoes';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const RightSideNav = () => {
    const { googleSingUp } = useContext(AuthContext)
const googleProvider =new GoogleAuthProvider()
    const handleGoogle = () => {
        googleSingUp(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
        .catch(error=>console.log(error))
     }
    return (
        <div>
            <ButtonGroup className='w-100 mb-5' vertical>
            <Button onClick={handleGoogle} className='mb-2' variant="outline-success"><FcGoogle></FcGoogle> Login with google</Button>
             
            <Button variant="outline-secondary"><AiFillGithub></AiFillGithub> Login with github</Button>
            </ButtonGroup>
            <div>
            <ListGroup className='mb-2'>
               <ListGroup.Item className='mb-3'><FcGoogle></FcGoogle> Google</ListGroup.Item>
               <ListGroup.Item className='mb-3'><AiFillFacebook></AiFillFacebook> Facebook</ListGroup.Item>
               <ListGroup.Item className='mb-3'><AiFillYoutube></AiFillYoutube>  Youtube</ListGroup.Item>
               <ListGroup.Item className='mb-3'><AiFillTwitterSquare></AiFillTwitterSquare>         Twitter</ListGroup.Item>  
              <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
            </ListGroup>
            </div>
            <div>
                <Cracaul></Cracaul>
            </div>
            <div>
                <Vidoes></Vidoes>
            </div>
        </div>
    );
};

export default RightSideNav;