import "../index.css";

const events = require("../json/events.json"); //replace with api call

function Event(props) {
  return (
    <>
      <div className="event flex flex-col lg:flex-row pb-8">
        <img src={props.image} alt={props.title} />
        <div className="item-info pt-4 pb-4">
          <p className="item-title ">
            {props.title}
            <p className="md:hidden"></p>
            <span className="font-semibold text-xl md:text-2xl md:font-normal md:float-right">
              {props.location}, {props.date} / {props.time}
            </span>
          </p>

          <span className="item-description">{props.description}</span>
        </div>
      </div>
    </>
  );
}

function Events() {
  return (
    <>
      <div className="events" id="Events">
        <div className="title text-center md:text-right"> Upcoming Events </div>
        {events.map((item, index) => {
          return (
            <Event
              key={index}
              title={item.title}
              date={item.date}
              time={item.time}
              location={item.location}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default Events;
