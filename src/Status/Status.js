import '../Status/Status.css';
import { Footer } from '../Footer/Footer';
const Status = () => {
    return (

<>
<div className = "back">
<div className="centered">
<div>
<label for="pnr"><b>PNR NO.</b></label><br />
    <input type="text"  className="up" placeholder="Enter PNR No." name="Pnr" required />
    <br />
<button class="button">Enter</button> 
</div>

</div>
  
</div>
<Footer className='footer'/>
</>

    );
};

export default Status;