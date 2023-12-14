import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiCart } from 'react-icons/bi';
import Item from '../../Item.json'
import product from '../../product.json'
import { Link } from 'react-router-dom';

function BasicExample() {
    const category = []
    const itemCategory = () => {
        for (const item of Item) {
            category.push(item.category)
        }
    }
    itemCategory()

    const productCategory = () => {
        for (const item of product) {
            category.push(item.category)
        }
    }
    productCategory()
    const categorySet = new Set(category)
    const categoryData = Array.from(categorySet)
    return (
        <Navbar expand="xl" className="bg-body-tertiary shadow bg-white rounded" >
            {/* <Container> */}
            <Navbar.Brand href="/">
                <img src={'/src/Images/logo.png'} className='' alt="" height={'120px'} title='E-Shopper' />

            </Navbar.Brand>
            <Navbar.Brand href='/' className='text-danger text-sm-center'><h2>E-Shopper</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/product">Product</Nav.Link>
                    <NavDropdown title="Category" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/All">
                            All
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        {
                            categoryData.map((val, i) => (
                                <NavDropdown.Item key={i} href={`/category/${val}`}>
                                    <p>{val}</p>
                                </NavDropdown.Item>
                            ))

                        }



                    </NavDropdown>
                    <Nav.Link href="/about">
                        About Us
                    </Nav.Link >
                    <Nav.Link eventKey={2} href="/contact">
                        Contact Us
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="/privacy">
                        Privacy & Policy
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">
                        <Button variant='danger'>Login</Button>
                    </Nav.Link>
                    <Nav.Link href="/cart">
                        <BiCart size={40} className='text-dark' />

                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    );
}

export default BasicExample;