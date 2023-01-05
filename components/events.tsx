import { ParseResult } from "papaparse";
import { usePapaParse } from "react-papaparse";

import events from "./data/events.json";

const { readString } = usePapaParse();
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

interface CSVBuilderProps {
  [key: string]: string;
}

// async function fetchEventData(): Promise<ParseResult<CalendarData>> {
//   return new Promise((resolve, reject) => {
//     fetch(dataSource)
//       .then((response) => {
//         response.text().then((text) => {
//           readString(text, {
//             header: true,
//             worker: true,
//             complete: (results: ParseResult<CalendarData>) => {
//               console.log(results.data);
//               resolve(results);
//             },
//           });
//         });
//       })
//       .catch(() => {
//         reject(new Error(`Cannot retrieve CSV`));
//       });
//     return [];
//   });
// }

function csvToMap(data: string, delimiter: string) {
  const headers = data.slice(0, data.indexOf("\n")).split(delimiter);
  const rows = data.slice(data.indexOf("\n") + 1).split("\n");

  const output = rows.map(function (row) {
    const values = row.split(delimiter);
    const elem = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {} as CSVBuilderProps);
    return elem;
  });

  return output;
}

async function fetchEventData(): Promise<string> {
  const result = await fetch(dataSource);

  if (!result.ok) {
    throw new Error("Failed to fetch event data.");
  }

  const dataText = await result.text();
  return dataText;
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

async function Events() {
  let eventData = csvToMap(await fetchEventData(), ",");
  console.log(eventData);
  return (
    <>
      <div className="events" id="events">
        <div className="title text-center md:text-right"> Upcoming Events </div>
        {/* {eventData.map((item, index) => {
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
        })} */}
      </div>
    </>
  );
}

export default Events;
