import './Home.css';
import {Carousel} from '3d-react-carousal';

const Home = () => {
    let slides = [
        <img src= "https://source.unsplash.com/1600x900/?trekking,mountain" alt="1" />,
        <img src="https://source.unsplash.com/1600x900/?airport,aeroplane" alt="2" />  ,
        <img src="https://source.unsplash.com/1600x900/?waterfall,water,mountain" alt="3" />,
        <img src="https://source.unsplash.com/1600x900/?nature,sky" alt="4" />   ];
        return (
            <Carousel slides={slides} />
        );
};

export default Home;