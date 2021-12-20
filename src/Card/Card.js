import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import '../Card/Card.css';
import { Footer } from '../Footer/Footer';
export default function Card(props) {
  console.log(props);
  let color=props.product.color;
  console.log(color);
  return (
<>

    <div className="shift">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">


            <img className="card-image" src={props.product.img} alt="Logo" />

          </div>
          <div  style={{backgroundColor:color ,color:'white'}} className="flip-card-back">
            <h2 style={{color:'orange'}}>{props.product.title}</h2>
            <h5>{props.product.offer}</h5>
            <h6 style={{color:'yellow'}}>{props.product.validity}</h6>
          </div>
        </div>
      </div>

    </div>
   
</>

  );
}
