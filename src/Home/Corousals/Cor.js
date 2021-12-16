import {Carousel} from '3d-react-carousal';

export default function Cor() {
    let slides = [
        <img src= "https://source.unsplash.com/1600x900/?airport,aeroplane" alt="1" />,
        <img src= "https://source.unsplash.com/1600x900/?trekking,mountain" alt="2" />  ,
        <img src="https://source.unsplash.com/1600x900/?waterfall,water,mountain" alt="3" />,
        <img src="https://source.unsplash.com/1600x900/?nature,sky" alt="4" />   ];
    return (
        <div>
            <Carousel slides={slides} className='cor'/>
        </div>
    )
}
