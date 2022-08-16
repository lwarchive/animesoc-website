import "../index.css";

const aboutCopy = require("../json/about.json");

//TODO: fetch from api

function About() {
  return (
    <>
      <div className="about text-center lg:text-left" id="About">
        <div className="title"> About </div>
        &nbsp;
        <div className="copy"> {aboutCopy.about} </div>
      </div>
    </>
  );
}

export default About;
