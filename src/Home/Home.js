import './Home.css';
import {Carousel} from '3d-react-carousal';

import slider from './slider.js';
import Card from 'C:/Users/pc/Documents/Desktop folder/imp/lala-air-solution/src/Card/Card.js';

const Home = () => {
    let slides = [
    <img src= "https://source.unsplash.com/1600x900/?aeroplane,airport" alt="1" />,
        <img src="https://source.unsplash.com/1600x900/?sky,parachute" alt="2" />  ,
        <img src="https://source.unsplash.com/1600x900/?waterfall,water" alt="3" />  ,
        <img src="https://source.unsplash.com/1600x900/?nature,sky" alt="4" />   ];
        return (
            <Carousel slides={slides} />
        );
};

export default Home;