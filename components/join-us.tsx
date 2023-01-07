import { useState } from "react";
import links from "./data/join-us.json";

interface ColourProps {
  normal: string;
  hover: string;
}

interface LinkProps {
  text: string;
  link: string;
  colour: ColourProps;
  icon: string;
}

function Link(props: LinkProps) {
  const [isFocused, setFocus] = useState(false);

  return (
    <>
      <a href={props.link}>
        <div
          className="link flex flex-col h-48 items-center lg:h-full "
          onMouseOver={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
          style={{
            backgroundColor: !isFocused
              ? props.colour.normal
              : props.colour.hover,
          }}
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
      <div className="join-us flex flex-col lg:flex-row" id="join-us">
        <div className="title">Join us</div>
        &nbsp;
        <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-4 lg:gap-3">
          {links.linkList.map((item, index) => {
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
