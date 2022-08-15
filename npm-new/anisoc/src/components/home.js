import "../index.css";

//TODO: fetch from api
const titleCopy = require("../json/home.json");

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-title-bg">
          <div className="home-title">
            <img src="static/logo.png" alt="AniSoc Logo" />
            <div className="home-title-copy">
              <div className="subtitle">
                Royal Holloway, University of London
              </div>
              <div className="title"> Anime &amp; Manga Society </div>
              <div className="copy"> {titleCopy.desc} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
