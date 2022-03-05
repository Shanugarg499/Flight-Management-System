import "./Home.css";
import Card from "../Card/Card";
import Cor from "./Corousals/Cor";
import { Footer } from "../Footer/Footer";

function Home() {
  const state = {
    products: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHohDjGBEr5bvSC2WDXFuGzZKR4R6J14ncg&usqp=CAU",
        title: "HDFC Bank",
        offer:
          "Flat 10% off on Business Class Using HDFC Bank Credit or Debit card",
        validity: "Up To 31st January",
        color: "blue",
        id: 1,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHN_lb1tDNGihkZ11KlWOzGywDlYUZVVuTg&usqp=CAU",
        title: "First Flight",
        offer: "Flat 25% Off on First Flight on using promo code:LALA25 ",
        validity: "Once Per User",
        color: "crimson",
        id: 2,
      },
      {
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgSERISGBIVEhIVGBgREhUREhISGBQZGhoVGBocIDwlHB4rHxgYJjsmKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHhISHjQkJCs0MTExNDYxNDQ0NDE0NzQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND8xPzQ0NP/AABEIAL4BCgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xABJEAACAQIDBAYFCQUFBwUAAAABAgADEQQFEgYHITETIkFRYXEygZGhsRVCUlNicsHR4RQjkrKzJDV0osIWdYKDo9LwFzNUZHP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgEG/8QALxEBAAIBAwEFBwMFAAAAAAAAAAECAwQREiEFMVFhgRMUFUFxobEyQkMkkeHw8f/aAAwDAQACEQMRAD8A7NERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQETEQMxEQEREBERAREQEREBERAREQEREBERAREQEREBERARExAzExefD1FXizAeZtPJnYekxeRuIzqgnz9R7lF5G19pPoJ63P4CV8mswY++yemmy37qrJeedSqq8WIHmbSm184rv8/SO5Raa4o1qnHS7eNiZTv2pWemOsys10E/vtELXVzugptrv90EzcwuKSoupGBHw85RKlJkNmVgftAibWU4s0qim/VYhWHYQfykWLtK85NskREfh3fQ14b0nr+V5iYmZtMwiIgIiICIiAiIgIiICIiAiIgIiICIiAmJmYMBPl3A5kDzNpHZya2gdBe9+Onna0hlyfE1OLtb77E+6VM2ovS3ClJtP2WMeGtq8rXiPym62cUE+eCe5eMjq+0o+Yh82Npmjs0vz6hP3Rab1PKMOnNQfFzf4yGffb+FI+6T+lp42QFTN8RU4KSPBF4z4TLsTUNyrebm3xlmbG4anwD0xbsWx+E1am0VEeiGbyFvjIL6fH/Nm39U1c1/4sW3o0KOzjn03VfIajN+js9RHpFm8zYe6aVXaVvmUwPvNf4TSq55iG5OF+6o/GcRfQ4+6OX++brhq7987LRRwFFPRp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",
        title: "Amazon Pay",
        offer:
          "Make payment of your flight tickets using Amazon Pay UpTo 2000* ( Minimum 200₹ ) ",
        validity: "Up To 31st December",
        color: "green",
        id: 3,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPokyy4BPRCkUAQ3YZH1XKebl4GIq8yGzbxA&usqp=CAU",
        title: "Christmas Offer",
        offer: "Book your flight using Promo Code : LALAXMAS20 to get UPTO 20%",
        validity: "For last week of December",
        color: "purple",
        id: 4,
      },
      {
        img: "https://media.istockphoto.com/vectors/super-diwali-offer-4060-discount-offer-with-illuminated-oil-lamps-on-vector-id1030328778",
        title: "Diwali Offer",
        offer: "Get 40% to 60% Off by Lucky Draw using Promo Code:LALADIWALI",
        validity: "Dhanteras to BhaiDooj",
        color: "navy",
        id: 5,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtnVMqgi1Kwn4HrT89s26oO-oi8tu1OOrMA&usqp=CAU",
        title: "AXIS Bank",
        offer: "Get 10% instant discount using Axis Bank Credit or Debit Card",
        validity: "Once Per User",
        color: "red",
        id: 6,
      },
    ],
  };
  return (
    <>
      <div className="home">
        <Cor />
      </div>
      <h1 className="specialOffer">We're well known for our trust and services.</h1>
      <div>
        <img
          className="gif-container"
          src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/React-Images%2FWE%20ARE%20THE%20TRUSTED%20SELLER%20AT%20(1).gif?alt=media&token=0dd562e1-b1db-4880-bcb5-34dc5e55a198"
        />
      </div>
      <h1 className="specialOffer">Special Offers</h1>
      <div className="cards-div">
        {state.products.map((product) => {
          return <Card product={product} />;
        })}
      </div>
      <br></br>
      {/* <h1 className='specialOffer'>Be part of us by signing up.</h1> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
