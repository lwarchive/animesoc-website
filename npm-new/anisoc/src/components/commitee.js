import "../index.css";
import ***REMOVED*** from "../static/oscar.png";

const placeholderText =
  "***REMOVED*** is a big stinky smelly boy and this is a little bit about him as the stinky president of stinky smelly anime society i am tired of starting at lroem ipsum what the fuck";

const members = [
  {
    name: "***REMOVED***",
    role: "President",
    description: placeholderText,
    portrait: ***REMOVED***,
  },
  {
    name: "***REMOVED***",
    role: "Secretary",
    description: placeholderText,
    portrait: ***REMOVED***,
  },
  {
    name: "***REMOVED***",
    role: "Treasurer",
    description: placeholderText,
    portrait: ***REMOVED***,
  },
];

function CommiteeMember(props) {
  return (
    <>
      <div className="commitee-member">
        <img src={props.portrait} alt={props.name} />
        <div className="commitee-member-info">
          <p className="event-title">{props.name}</p>
          <p className="event-subtitle">{props.role}</p>
          <p className="event-description">{props.description}</p>
        </div>
      </div>
    </>
  );
}

function Commitee() {
  return (
    <div className="commitee-members" id="CommiteeMembers">
      <div className="title"> Commitee </div>
      <div className="commitee-container">
        {members.map((item, index) => {
          return (
            <CommiteeMember
              key={index}
              name={item.name}
              role={item.role}
              portrait={item.portrait}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Commitee;
