import "../index.css";

const polls = require("../json/polls.json");

function Poll(props) {
  return (
    <>
      <div className="poll w-full lg:w-1/2 ">
        <p className="item-title mt-4">{props.title}</p>
        <p className="item-description">{props.description}</p>
        <button className="item-button mt-4">Vote Here</button>
      </div>
    </>
  );
}

function Polls() {
  return (
    <div className="polls bg-cover bg-center" id="Polls">
      <div className="title"> Polls </div>
      <div className="polls-container flex flex-col w-full lg:flex-row rounded">
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
