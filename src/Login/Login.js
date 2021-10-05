import * as rb from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <>
            <div className="formcover">
            <rb.Form className="form">
            <rb.Form.Group className="mb-3" controlId="formBasicEmail">
                <rb.Form.Label>Email address</rb.Form.Label>
                <rb.Form.Control type="email" placeholder="Enter email" />
                <rb.Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </rb.Form.Text>
            </rb.Form.Group>

            <rb.Form.Group className="mb-3" controlId="formBasicPassword">
                <rb.Form.Label>Password</rb.Form.Label>
                <rb.Form.Control type="password" placeholder="Password" />
            </rb.Form.Group>
            <rb.Form.Group className="mb-3" controlId="formBasicCheckbox">
                <rb.Form.Check type="checkbox" label="Check me out" />
            </rb.Form.Group>
            <rb.Button variant="primary" type="submit">
                Submit
            </rb.Button>
            <br />
            <br />
            <br />
            {/* <rb.Button variant="secondary" onClick={()=> alert('Sorry! Currently account creation service is inactive. Try sometime later.')} >
                New here ? Click to create New Account
            </rb.Button> */}
            </rb.Form>
            </div>
        </>
    );
};

export default Login;
