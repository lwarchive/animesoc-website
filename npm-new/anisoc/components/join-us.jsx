import links from "./data/join-us.json";

function Link(props) {
  return (
    <>
      <a href={props.link}>
        <div
          className="link flex flex-col items-center lg:h-full "
          style={{ backgroundColor: props.colour }}
        >
          <img src={props.icon} alt={props.text} className="logo w-10" />
          <span className="block">{props.text}</span>
        </div>
      </a>
    </>
  );
}

function JoinUs() {
  return (
    <>
      <div className="join-us flex flex-col lg:flex-row" id="Join Us">
        <div className="title"> Join Us </div>
        &nbsp;
        <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-4 lg:gap-3">
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
