import './Home.css';
import Card from '../Card/Card';
import Cor from './Corousals/Cor';
import {Footer} from '../Footer/Footer.js';

const Home = () => {
        return (
            <div className='home'>
                <Cor className='cor'/>
                <Footer className='footer'/>
            </div>
        );
};

export default Home;