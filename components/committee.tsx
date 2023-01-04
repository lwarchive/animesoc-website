import members from "./data/committee.json";
import parse from "html-react-parser";

interface CommitteeProps {
  name: string;
  role: string;
  portrait: string;
  description: string;
}

function CommitteeMember(props: CommitteeProps) {
  return (
    <>
      <div className="committee-member max-w-sm">
        <img src={`${props.portrait}`} alt={props.name} />
        <div className="committee-member-info">
          <p className="item-title">{props.name}</p>
          <p className="item-subtitle">{props.role}</p>
          <p className="item-description">{parse(props.description)}</p>
        </div>
      </div>
    </>
  );
}

function Committee() {
  return (
    <div className="committee-members flex flex-col " id="committee-members">
      <div className="backdrop-blur-sm rounded-sm">
        <div className="title "> Committee </div>
        <div className="committee-container flex flex-col lg:flex-row">
          {members.committeeMembers.map((item, index) => {
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
    </div>
  );
}

export default Committee;
