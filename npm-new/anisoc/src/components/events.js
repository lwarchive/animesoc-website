import "../index.css";

const events = require('../json/events.json'); //replace with api call

function Event(props) {
  return (
    <>
      <div className="event">
        <img src={props.image} alt={props.title} />
        <div className="item-info">
          <p className="item-title">
            {props.title}
            <span className="item-quantum">
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
        <div className="title"> Upcoming Events </div>
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
