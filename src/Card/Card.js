import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import '../Card/Card.css';
import { Footer } from '../Footer/Footer';
export default function Card(props) {
  console.log(props);
  return (
<>

    <div className="shift">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">


            <img className="card-image" src={props.product.img} alt="Logo" />

          </div>
          <div class="flip-card-back">
            <h1>HDFC BANK</h1>
            <p>Credit / Debit  Card</p>
            <p>Valid Today</p>
          </div>
        </div>
      </div>

    </div>
   
</>

  );
}