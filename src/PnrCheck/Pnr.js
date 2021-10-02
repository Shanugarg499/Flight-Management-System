import '../PnrCheck/pnr.css';
import food1 from "../Images/plan.gif"; 


export default function Pnr() {
    return (

<>
<div className = "back">
<div className="centered">
<div>
<label for="pnr"><b>PNR NO.</b></label><br />
    <input type="text"  className="up" placeholder="Enter pnr no." name="Pnr" required />
    <br />
<button class="button">Button</button> 
</div>

</div>

</div>

</>


    );


}
