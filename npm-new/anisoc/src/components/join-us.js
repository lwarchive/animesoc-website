import "../index.css";

const links = require('../json/join-us.json'); //TODO: fetch from api

function Link(props) {
  return (
    <>
      <a href={props.link}>
        <div className="link" style={{ backgroundColor: props.colour }}>
          <img src={props.icon} alt={props.text} className="logo" />
          {props.text}
        </div>
      </a>
    </>
  );
}

function JoinUs() {
  return (
    <>
      <div className="join-us" id="Join Us">
        <div className="title"> Join Us </div>
        &nbsp;
        <div className="links">
          {links.map((item, index) => {
            return (
              <Link
                key={index}
                text={item.text}
                link={item.link}
                icon={item.icon}
                colour={item.colour}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default JoinUs;
