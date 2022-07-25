import "../index.css";
import Event1 from "../static/events/event1.png";
import Event2 from "../static/events/event2.png";
import Event3 from "../static/events/event3.png";

const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas neque at justo tincidunt egestas. Integer mauris diam, fringilla eget gravida condimentum, lacinia ut justo. Proin cursus dolor a laoreet luctus. Vestibulum vitae feugiat quam, condimentum dictum eros. Morbi eleifend lorem sit amet bibendum dignissim. ";

const events = [
  {
    Title: "Event 1",
    Date: "01/01/2020",
    Time: "12:00",
    Location: "Location 1",
    Description: placeholderText,
    Image: Event1,
  },
  {
    Title: "Event 2",
    Date: "01/01/2020",
    Time: "12:00",
    Location: "Location 2",
    Description: placeholderText,
    Image: Event2,
  },
  {
    Title: "Event 3",
    Date: "01/01/2020",
    Time: "12:00",
    Location: "Location 3",
    Description: placeholderText,
    Image: Event3,
  },
];

function Event(props) {
  return (
    <>
      <div className="event">
        <img src={props.Image} alt={props.Title} />
        <div className="item-info">
          <p className="item-title">
            {props.Title}
            <span className="item-quantum">
              {props.Location}, {props.Date} / {props.Time}
            </span>
          </p>

          <span className="item-description">{props.Description}</span>
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
              Title={item.Title}
              Date={item.Date}
              Time={item.Time}
              Location={item.Location}
              Description={item.Description}
              Image={item.Image}
            />
          );
        })}
      </div>
    </>
  );
}

export default Events;
