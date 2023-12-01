import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
const Header = () => {
  const { user,logout} = useContext(AuthContext)
  const handleLogOut = () => {
    logout()
      .then(() => { })
    .catch(error=>console.error(error))
  }
    return (
        <>
           <Navbar style={{marginBottom:'30px'}} bg="white" expand="lg">
      <Container>
        <Navbar.Brand style={{backgroundColor:"blue", color:'white', padding:'5px',borderRadius:'5px'}}>Dragon News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                <Nav.Link style={{ color: 'red' }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></Nav.Link>
              <div className='d-lg-none'>
                <LeftSideNav></LeftSideNav>
              </div>
            </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <div className='d-flex'>
                <div className='me-5'>
                  {
                    user?.uid ? <>
                        <Button onClick={handleLogOut} style={{backgroundColor:"blue"}}>Logout</Button>
                    </> :  
                      <>
                      <Button  style={{backgroundColor:"blue", marginRight:"10px"}}><Link className='text-decoration-none text-white' to='/login'>login</Link></Button>
                       <Button  style={{backgroundColor:"blue"}}> <Link className='text-decoration-none text-white' to='/register'>Register</Link></Button>
                      </>
                       
                  }
                </div>
                <div className='d-flex'>
                    <Link to="/profileDetails">
                    {user?.uid? <Image style={{height:'45px', width:"45px"}} roundedCircle src={user.photoURL}></Image>
                  :   <FaUser ></FaUser> 
                }
                    </Link>
                {/* {
                  user?.uid ? <p className='ms-2'>{user?.displayName}</p> :
                    <p className='ms-2'>{user?.email}</p>
                } */}
                </div>
               </div>
            </Navbar.Text>
            </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;