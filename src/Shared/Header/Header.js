import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='header-de w-100'>
                <Container>
                    <img className='logo-design' src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='link-design ' to="/home">Home</Link>
                            <Link className='link-design ' to="/products">Products</Link>


                            <Link className='link-design ' to="/blog">Blog</Link>
                            <Link className=' link-design ' to="/about">About Us</Link>
                        </Nav>
                        <Nav className="ms-auto me-5 flex items-center ">
                            {
                                user.email ?
                                    <>
                                        <NavDropdown title={
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={user.photoURL}
                                                sx={{ width: 30, height: 30 }}
                                            />
                                        } id="collasible-nav-dropdown">

                                            <NavDropdown.Item>
                                                <HashLink smooth to="/dashboard#"> Dashboard</HashLink>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={logOut}>
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>

                                        <HashLink className='btn-cart text-2xl mx-2 ' smooth to="/placeorder"> <FontAwesomeIcon icon={faBasketShopping} /> </HashLink>

                                    </>
                                    :
                                    <>
                                        <button className='btn-all mx-2' > <Link className='link-de me-auto' to='/login'> Login </Link> </button>
                                        <button className='btn-all mx-2' > <Link className='link-de me-auto' to='/signup'> Sign Up </Link> </button>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;