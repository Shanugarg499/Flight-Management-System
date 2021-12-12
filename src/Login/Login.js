import * as rb from 'react-bootstrap';
import './Login.css';
import firebase from '../utils/firebase';
import 'firebase/firestore';

// signup method

const adduser = (name, email, phone_num, password) => {
    
    const date = new Date();
    const user_id = 'Shanu_garg'+date.getDate()+date.getMonth()+date.getFullYear()+date.getHours()+date.getMinutes()+date.getSeconds();
    const user_data = { name, email, phone_num, password  }
    const map_data = { [email] : user_id }
    const data_map = { [user_id] : email }

  
    console.log('function called')
    const db = firebase.firestore();
    try{

        // console.log(map_data)
        db.collection('maps').doc('user_map').set(map_data);
        // console.log('done map_data')
        db.collection('users').doc(user_id).set(user_data);
        console.log('done user_data')
        db.collection('maps').doc('user_map').set(data_map);
        // console.log('done data_map')
    }catch(e) {
        console.log('Error: '+e)
    }
  }

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
            {/* <rb.Button variant="primary" type="submit" className='submitbutton' onClick={() => adduser('Shanu Garg', '181220050@nitdelhi.ac.in', '9876543210', '9876543210')}>
                Create test account
            </rb.Button> */} // ye code ft jaata h just after function is invoked so, it's commented.
            </rb.Form>
            </div>
            {/* <Footer className='footer'/> */}
        </>
    );
};

export default Login;
