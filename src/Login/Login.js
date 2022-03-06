import * as rb from 'react-bootstrap';
import './Login.css';
import {Footer} from '../Footer/Footer';


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
            <rb.Button variant="primary" type="submit">
                Submit
            </rb.Button>
            <br />
            <br />
            <br />
            {/* <rb.Button variant="primary" type="submit" className='submitbutton' onClick={() => adduser('Shanu Garg', '181220050@nitdelhi.ac.in', '9876543210', '9876543210')}>
                Create test account
            </rb.Button> */}
            </rb.Form>
            </div>
            <Footer className='footer'/>
        </>
    );
};

export default Login;
