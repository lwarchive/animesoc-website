import '../index.css';
import logo from '../static/logo.png';


//TODO: fetch from api
const titleCopy = "We are the Anime & Manga Society. \nWe're a friendly, open, and inclusive society, who gather weekly to watch Japanese animation (also known as anime) and discuss our interests in manga. \nOur main weekly activities consist of watching anime and other associated media together.";

function Home() {

    return (
        <>
        <div className="home">
            <div className="home-title-bg">
                    <div className="home-title">
                        <img src={logo} /> 
                        <div className="home-title-copy">
                            <div className="subtitle"> Royal Holloway, University of London </div>
                            <div className="title"> Anime &amp; Manga Society </div>
                            <div className="copy"> {titleCopy} </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;