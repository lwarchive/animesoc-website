import { parse, ParseResult } from "papaparse";
import React, { useEffect, useState } from "react";

const dataSource = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRAHUQzFuZ1O0J7soL5Wud5CEbA3MLv4T4Pqms_KhAueNoFX6h2T0DTGwgaLu92FYWdnFV50Q0F1AHY/pub?gid=0&single=true&output=csv`;
//const dataSource = "";

interface EventProps {
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  time: string;
}

interface CalendarData {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  imageURL: string;
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

// export default async function Events() {
//   let eventData = parse(await fetchEventData());
//   console.log(eventData);
//   return (
//     <>
//       <div className="events" id="events">
//         <div className="title text-center md:text-right"> Upcoming Events </div>
//         {/* {eventData.map((item, index) => {
//           const dateTime = new Date(item.startDate);

//           return (
//             <Event
//               key={index}
//               title={item.title}
//               date={dateTime.toLocaleDateString()}
//               time={dateTime.toLocaleTimeString()}
//               location={item.location}
//               description={item.description}
//               image={item.imageURL}
//             />
//           );
//         })} */}
//       </div>
//     </>
//   );
// }

function test(data: CalendarData[]) {
  console.log(data);

  return <span>d</span>;
}

const Events = () => {
  const [events, updateEvents] = useState<CalendarData[]>();
  useEffect(() => {
    const fetchEvents = async () => {
      const resp = await fetch(dataSource);
      const data = await resp.text();

      // TODO: Handle errors
      const parsedResult = await parse(data, {
        header: true,
      });
      const parsedData = (parsedResult as ParseResult<CalendarData>).data;

      updateEvents(parsedData);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <div className="events" id="events">
        <div className="title text-center md:text-right"> Upcoming Events </div>
        {events ? (
          <>
            {events.map((item, index) => {
              const dateTime = new Date(item.startDate);

              return (
                <Event
                  key={index}
                  title={item.title}
                  date={dateTime.toLocaleDateString()}
                  time={dateTime.toLocaleTimeString()}
                  location={item.location}
                  description={item.description}
                  image={item.imageURL}
                />
              );
            })}
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </>
  );
};

export default Events;
