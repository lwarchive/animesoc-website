import "../index.css";

const links = [
  {
    text: "Membership",
    link: "https://www.su.rhul.ac.uk/societies/a-z/animeandmanga/",
    icon: "/static/rhsu-logo.png",
    colour: "#F59E45",
  },
  {
    text: "Discord",
    link: "https://rhulani.me/discord",
    icon: "/static/discord-logo.png",
    colour: "#646673",
  },
  {
    text: "Facebook",
    link: "https://www.facebook.com/groups/animemangarhul",
    icon: "/static/facebook-logo.png",
    colour: "#16356C",
  },
  {
    text: "Instagram",
    link: "https://www.instagram.com/rhulanime/",
    icon: "/static/instagram-logo.png",
    colour: "#784784",
  },
]; //TODO: fetch from api

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
