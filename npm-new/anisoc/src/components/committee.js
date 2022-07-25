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

function CommitteeMember(props) {
  return (
    <>
      <div className="committee-member">
        <img src={props.portrait} alt={props.name} />
        <div className="committee-member-info">
          <p className="item-title">{props.name}</p>
          <p className="item-subtitle">{props.role}</p>
          <p className="item-description">{props.description}</p>
        </div>
      </div>
    </>
  );
}

function Committee() {
  return (
    <div className="committee-members" id="CommitteeMembers">
      <div className="title"> Committee </div>
      <div className="committee-container">
        {members.map((item, index) => {
          return (
            <CommitteeMember
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

export default Committee;
