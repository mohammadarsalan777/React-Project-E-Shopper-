import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    return (
        <Form className='container mt-5 mb-4'>
            <div className=''>
                <div className=" row justify-content-center p-3">
                    <div className="col-lg-6 shadow  mb-4 bg-white rounded">
                        <h1 className='text-center text-danger'>Login</h1>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                                <a href="#" style={{ textDecoration: 'none' }} className='text-secondary'>Forget Password?</a>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I am agree Privacy & Policy" />
                        </Form.Group>
                        <br />
                        <div className='d-flex justify-content-between mb-4'>
                            <Button variant="danger" type="submit">
                                Log In
                            </Button>
                            <p> Create an Account, <a href="/signup " style={{ textDecoration: 'none' }} className='text-secondary'><span
                                className='text-danger'> Register!</span></a></p>
                        </div>


                    </div>
                </div>
            </div>
        </Form>
    );
}

export default Login;