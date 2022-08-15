import "../index.css";

const members = require("../json/committee.json");

function CommitteeMember(props) {
  return (
    <>
      <div className="committee-member max-w-sm">
        <img src={`${props.portrait}`} alt={props.name} />
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
    <div className="committee-members flex flex-col " id="CommitteeMembers">
      <div className="backdrop-blur-sm rounded-sm">
        <div className="title "> Committee </div>
        <div className="committee-container flex flex-col lg:flex-row">
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
    </div>
  );
}

export default Committee;
