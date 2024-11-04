import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiSearch } from "react-icons/ci";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Badge, Button } from 'react-bootstrap';
import './header.css';

const Header = () => {
    // State to control the visibility of the search modal and cart drawer
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [showCartDrawer, setShowCartDrawer] = useState(false);

    // Functions to open and close the search modal
    const handleSearchShow = () => setShowSearchModal(true);
    const handleSearchClose = () => setShowSearchModal(false);

    // Functions to open and close the cart drawer
    const handleCartShow = () => setShowCartDrawer(true);
    const handleCartClose = () => setShowCartDrawer(false);

    return (
        <>
            <Navbar bg="white" expand="lg" className="shadow-sm">
                <Container>
                    <Navbar.Brand href="/">
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '8px' }}>SkinCare.</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="mx-auto">
                            <NavDropdown title="Home" id="home-dropdown">
                                <NavDropdown.Item href="/">Home</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Products" id="products-dropdown">
                                <NavDropdown.Item href="Allcollection">Product</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Shop" id="shop-dropdown">
                                <NavDropdown.Item href="Shop">Shop</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>

                        <div className="d-flex align-items-center">
                            {/* Search Icon - triggers search modal */}
                            <CiSearch 
                                style={{ fontSize: '1.5rem', cursor: 'pointer' }} 
                                onClick={handleSearchShow} 
                            />
                            <div className="position-relative mx-3">
                                <FaHeart style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
                                {/* <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                    0
                                </Badge> */}
                            </div>
                            <div className="position-relative">
                                {/* Cart Icon - triggers cart drawer */}
                                <FaShoppingCart 
                                    style={{ fontSize: '1.5rem', cursor: 'pointer' }} 
                                    onClick={handleCartShow} 
                                />
                                {/* <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                    0
                                </Badge> */}
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Search Modal */}
            {showSearchModal && (
                <div className="custom-modal">
                    <div className="custom-modal-content">
                        <span className="close" onClick={handleSearchClose}>&times;</span>
                        <h5>Search for product</h5>
                        <input type="text" placeholder="Search for product..." className="form-control" />
                        
                        {/* Search by options */}
                        <div className="search-by">
                            Search by:  <span>fashion</span>, <span>beauty</span>, <span>jewelry</span>
                        </div>
                        
                        <Button variant="secondary" onClick={handleSearchClose} style={{ marginTop: '15px' }}>
                            Search
                        </Button>
                    </div>
                </div>
            )}

            {/* Right-Side Cart Drawer */}
            <div className={`cart-drawer ${showCartDrawer ? 'open' : ''}`}>
                <div className="cart-drawer-content">
                    <button className="close-btn" onClick={handleCartClose}>&times;</button>
                    <h5>Shopping Cart</h5>
                    <p>Your cart is empty.</p>
                    
                    {/* Order Place Button */}
                    <div className="order-button-container">
                        <Button variant="danger" onClick={() => alert('Order placed!')}>
                            Place Order
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
