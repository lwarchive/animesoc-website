import { usePapaParse } from "react-papaparse";
import events from "./data/events.json";

const { readString } = usePapaParse();
const dataSource = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRAHUQzFuZ1O0J7soL5Wud5CEbA3MLv4T4Pqms_KhAueNoFX6h2T0DTGwgaLu92FYWdnFV50Q0F1AHY/pub?gid=0&single=true&output=csv`;

interface EventProps {
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  time: string;
}

function fetchEventData() {
  fetch(dataSource).then((response) => {
    response.text().then((text) => {
      readString(text, {
        header: true,
        worker: true,
        complete: (results) => {
          console.log(results);
          return results;
        },
      });
    });
  });
}

function Event(props: EventProps) {
  return (
    <>
      <div className="event flex flex-col lg:flex-row pb-8">
        <img src={props.image} alt={props.title} />
        <div className="item-info pt-4 pb-4">
          <p className="item-title ">
            {props.title}
            <span className="font-semibold text-xl block md:inline md:text-2xl md:font-normal md:float-right">
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
  let eventData = fetchEventData();
  return (
    <>
      <div className="events" id="events">
        <div className="title text-center md:text-right"> Upcoming Events </div>
        {events.eventList.map((item, index) => {
          const dateTime = item.date.split(" ");

          return (
            <Event
              key={index}
              title={item.title}
              date={dateTime[0]}
              time={dateTime[1]}
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
