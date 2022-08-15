import "../index.css";

const polls = require("../json/polls.json");

function Poll(props) {
  return (
    <>
      <div className="poll">
        <p className="item-title">{props.title}</p>
        <p className="item-description">{props.description}</p>
        <button className="item-button">Vote Here</button>
      </div>
    </>
  );
}

function Polls() {
  return (
    <div className="polls" id="Polls">
      <div className="title"> Polls </div>
      <div className="polls-container">
        {polls.map((item, index) => {
          if (index > 1) return <></>;

          return (
            <Poll
              key={index}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Polls;
