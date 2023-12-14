import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUp() {
    return (
        <Form className='container mt-5 mb-4'>
            <div className=''>
                <div className="row justify-content-center p-3">
                    <div className="col-lg-6  shadow mb-5 bg-white rounded mt-5">
                        <h1 className='text-center text-danger'>Register</h1>

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
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="confirmFormBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="confirm password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I am agree Privacy & Policy" />
                        </Form.Group>
                        <br />
                        <div className='d-flex justify-content-between mb-4'>
                            <Button variant="danger" type="submit">
                                Register & Sign-Up
                            </Button>
                            <p> Already have an account, <a href="/login " style={{ textDecoration: 'none' }} className='text-secondary'><span
                                className='text-danger'>Log-in </span></a></p>
                        </div>


                    </div>
                </div>
            </div>
        </Form>
    )
}

export default SignUp;