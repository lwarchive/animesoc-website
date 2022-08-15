import "../index.css";

//TODO: fetch from api
const titleCopy = require("../json/home.json");

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-title-bg">
          <div className="home-title flex flex-col text-center lg:flex-row pt-8 pb-8">
            <img
              className="w-40 lg:w-2/12"
              src="static/logo.png"
              alt="AniSoc Logo"
            />
            <div className="my-5 mx-5 lg:w-1/2">
              <div className="text-lg lg:text-4xl">
                Royal Holloway, University of London
              </div>
              <div className="text-5xl lg:text-6xl">
                Anime &amp; Manga Society
              </div>
              <div className="text-base lg:text-lg"> {titleCopy.desc} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
