import Papa from "papaparse";
import { ParseResult } from "papaparse";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import browserLocalstorage from "browser-localstorage-expire";

// A collection of
const eventNoImage = [
  "/images/events/event1.png",
  "/images/events/event2.png",
  "/images/events/event3.png",
];

// Constant values for caching and event fetching etc
const eventSource = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRAHUQzFuZ1O0J7soL5Wud5CEbA3MLv4T4Pqms_KhAueNoFX6h2T0DTGwgaLu92FYWdnFV50Q0F1AHY/pub?gid=0&single=true&output=csv`;
const eventCalendar = `https://calendar.google.com/calendar/embed?src=c_8219055ac4671ef4f7faec2be6f2db0d38d1e3b23c3b4e94d81b71fdc3c6a0e4%40group.calendar.google.com&ctz=Europe%2FLondon`;

// Cache keys for events and images
const cacheKeyEvents = "event-data";
const cacheKeyImages = "event-images";

// How many events to display in the component
const eventDisplayLimit = 4;
// How often a client should fetch from the calendar
const eventUpdateFrequency = 30;

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
          src={
            props.image == ""
              ? eventNoImage[Math.floor(Math.random() * eventNoImage.length)]
              : props.image
          }
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

// For use when the data is still being retrieved.
function PlaceholderEvent() {
  return (
    <>
      <div className="event flex flex-col lg:flex-row pb-8">
        <img
          className="object-fill object-center md:w-64 lg:object-left"
          src={eventNoImage[Math.floor(Math.random() * eventNoImage.length)]}
          alt={"Loading..."}
        />
        <div className="item-info pt-4 pb-4">
          <p className="item-title ">
            Loading...
            <span className="font-semibold text-xl block 2xl:inline 2xl:text-2xl 2xl:font-normal 2xl:float-right"></span>
          </p>

          <span className="item-description">Fetching events...</span>
        </div>
      </div>
    </>
  );
}

// Grabbing the data from our google calendar or from cache
const Events = () => {
  const [events, updateEvents] = useState<CalendarData[]>();
  useEffect(() => {
    const fetchEvents = async () => {
      const localCache = browserLocalstorage();
      let eventData = localCache.getItem(cacheKeyEvents) as string;

      // Check if a cached version of events exist on the browser
      if (eventData == null) {
        const resp = await fetch(eventSource);
        eventData = await resp.text();

        // Cache the retrieved CSV data for 30 minutes (by default)
        localCache.setItem(
          cacheKeyEvents,
          JSON.stringify({ data: eventData }),
          eventUpdateFrequency
        );
      } else {
        // Get the CSV data from LocalStorage
        eventData = JSON.parse(eventData).data;
      }

      // Parse the CSV to JSON to use
      const parsedResult = Papa.parse(eventData, {
        header: true,
      });
      const parsedData = (parsedResult as ParseResult<CalendarData>).data;

      updateEvents(parsedData);
    };
    fetchEvents();
  }, []);

  return (
    <div className="events" id="events">
      <div className="title text-center md:text-right"> Upcoming Events </div>
      {events ? (
        <>
          {events.slice(0, eventDisplayLimit).map((item, index) => {
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
          <p className="text-center">
            <i
              className="material-icons"
              onClick={() => {
                window.location.href = eventCalendar;
              }}
            >
              event
            </i>
            <a href={eventCalendar}> View full event calendar</a>
          </p>
        </>
      ) : (
        <>
          <PlaceholderEvent />
          <PlaceholderEvent />
          <PlaceholderEvent />
        </>
      )}
    </div>
  );
};

export default Events;
