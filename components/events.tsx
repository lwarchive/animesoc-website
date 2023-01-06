import Papa from "papaparse";
import { ParseResult } from "papaparse";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import browserLocalstorage from "browser-localstorage-expire";

const dataSource = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRAHUQzFuZ1O0J7soL5Wud5CEbA3MLv4T4Pqms_KhAueNoFX6h2T0DTGwgaLu92FYWdnFV50Q0F1AHY/pub?gid=0&single=true&output=csv`;

// Our event component
interface EventProps {
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  time: string;
}

// How the data retrieved from the CSV should look
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
        <img
          className="object-fill object-center md:w-64 lg:object-left"
          src={props.image == "" ? "/images/events/event1.png" : props.image}
          alt={props.title}
        />
        <div className="item-info pt-4 pb-4">
          <p className="item-title ">
            {props.title}
            <span className="font-semibold text-xl block 2xl:inline 2xl:text-2xl 2xl:font-normal 2xl:float-right">
              {props.location}, {props.date} / {props.time}
            </span>
          </p>

          <span className="item-description">{parse(props.description)}</span>
        </div>
      </div>
    </>
  );
}

const Events = () => {
  const [events, updateEvents] = useState<CalendarData[]>();
  useEffect(() => {
    const fetchEvents = async () => {
      const localCache = browserLocalstorage();
      let eventData = localCache.getItem("event-data") as string;

      if (eventData == null) {
        const resp = await fetch(dataSource);
        eventData = await resp.text();

        localCache.setItem(
          "event-data",
          JSON.stringify({ data: eventData }),
          30
        );
      } else {
        eventData = JSON.parse(eventData).data;
      }
      // TODO: Handle errors
      const parsedResult = Papa.parse(eventData, {
        header: true,
      });
      console.log(parsedResult);
      const parsedData = (parsedResult as ParseResult<CalendarData>).data;
      console.log(parsedData);
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
