import '../index.css';

import RHSU from '../static/rhsu-logo.png';
import Discord from '../static/discord-logo.png';
import Facebook from '../static/facebook-logo.png';
import Instagram from '../static/instagram-logo.png';

const links = [
    {"Text" : "Membership",
    "Link" : "https://www.su.rhul.ac.uk/societies/a-z/animeandmanga/",
    "Icon" : RHSU,
    "Colour" : "#F59E45"},
    {"Text" : "Discord",
    "Link" : "https://rhulani.me/discord",
    "Icon" : Discord,
    "Colour" : "#646673"},
    {"Text" : "Facebook",
    "Link" : "https://www.facebook.com/groups/animemangarhul",
    "Icon" : Facebook,
    "Colour" : "#16356C"},
    {"Text" : "Instagram",
    "Link" : "https://www.instagram.com/rhulanime/",
    "Icon" : Instagram,
    "Colour" : "#784784"}
] //TODO: fetch from api

function Link(props) {
    return (
        <>
            <a href={props.Link}>
                <div className="link" style={{backgroundColor: props.Colour}}>
                    <img src={props.Icon} alt={props.Text} className="logo" />
                    {props.Text}
                </div>
            </a>
        </>
    );
}

function JoinUs() {
    return (
        <>
        <div className="joinus" id="Join Us">
            <div className="title"> Join Us </div>
            &nbsp;
            <div className="links">
                {links.map((item, index)=>{
                    return <Link key={index} Text={item.Text} Link={item.Link} Icon={item.Icon} Colour={item.Colour} />
                }
                )}
            </div>
        </div>
        </>
    );
}

export default JoinUs;