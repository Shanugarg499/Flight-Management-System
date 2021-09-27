import '../Card/Card.css';
import food from "../Images/landscape.jpg"; 
export default function Card() {
    return (


<div className="shift">
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">


    <img className="card-image" src={food} alt="Logo" />

    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect and Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>

</div>


    );
}