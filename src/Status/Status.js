import '../Status/Status.css';

const Status = () => {
    return (

<>
<div className = "back">
<div className="centered">
<div>
<label for="pnr"><b>PNR NO.</b></label><br />
    <input type="text"  className="up" placeholder="Enter pnr no." name="Pnr" required />
    <br />
<button class="button">Enter</button> 
</div>

</div>

</div>

</>

    );
};

export default Status;