import "../index.css";

const polls = require("../json/polls.json");

function Poll(props) {
  return (
    <>
      <div className="poll w-full backdrop-blur-sm rounded-sm lg:w-1/2 ">
        <p className="item-title mt-4">{props.title}</p>
        <p className="item-description">{props.description}</p>
        <div className="flex justify-center">
          <button className="item-button mt-4">Vote Here</button>
        </div>
      </div>
    </>
  );
}

function Polls() {
  return (
    <div className="polls bg-cover bg-center" id="Polls">
      <div className="title text-center text-white md:text-left md:text-black transition-all duration-300">
        Polls
      </div>
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
