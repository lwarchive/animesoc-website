import "../index.css";
import Event1 from "../static/events/event1.png";
import Event2 from "../static/events/event2.png";
import Event3 from "../static/events/event3.png";

const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas neque at justo tincidunt egestas. Integer mauris diam, fringilla eget gravida condimentum, lacinia ut justo. Proin cursus dolor a laoreet luctus. Vestibulum vitae feugiat quam, condimentum dictum eros. Morbi eleifend lorem sit amet bibendum dignissim. ";

const events = [
  {
    title: "Event 1",
    date: "01/01/2020",
    time: "12:00",
    location: "Location 1",
    description: placeholderText,
    image: Event1,
  },
  {
    title: "Event 2",
    date: "01/01/2020",
    time: "12:00",
    location: "Location 2",
    description: placeholderText,
    image: Event2,
  },
  {
    title: "Event 3",
    date: "01/01/2020",
    time: "12:00",
    location: "Location 3",
    description: placeholderText,
    image: Event3,
  },
];

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
