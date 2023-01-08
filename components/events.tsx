import React, { useEffect, useState } from "react";

import Papa from "papaparse";
import { ParseResult } from "papaparse";

import parse from "html-react-parser";

import browserLocalstorage from "browser-localstorage-expire";

import { createBlobFromImage, fetchImageFromCache } from "./util";

interface EventsProps {
  dataSource: string;
  calendar: string;
  imageBase?: string;
  cacheKeyEvents?: string;
  displayLimit?: number;
  updateFrequency?: number;
}

// Our event data should be structured like this
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
  imageID: string;
}

// A collection of placeholder images
const eventNoImage = [
  "/images/events/event1.png",
  "/images/events/event2.png",
  "/images/events/event3.png",
];

// Values for caching and event fetching etc
let eventImageBase = `https://lh3.googleusercontent.com/d/`;
// Cache keys for events and images
let cacheKeyEvents = "event-data";
// How many events to display in the component
let eventDisplayLimit = 4;
// How often a client should fetch from the calendar
let eventUpdateFrequency = 30;

/**
 * Creates a new event block with the details specified
 * @param props what details to display in the event block
 * @returns an event block
 */
function Event(props: EventProps) {
  return (
    <>
      <div className="event flex flex-col lg:flex-row pb-8">
        <img
          className="object-fill object-center md:w-64 lg:object-left"
          src={
            props.image == null
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

/**
 * Creates a placeholder whilst event data and images are being loaded
 * @returns renders a placeholder
 */
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

/**
 * Fetches and renderers events specified on the provided event calendar.
 * @returns a set of an upcoming events on an event calendar.
 */
const Events = (props: EventsProps) => {
  const [events, updateEvents] = useState<CalendarData[]>();
  const [images, updateImages] = useState<any>();

  if (props.imageBase != null) eventImageBase = props.imageBase;
  if (props.displayLimit != null) eventDisplayLimit = props.displayLimit;
  if (props.updateFrequency != null)
    eventUpdateFrequency = props.updateFrequency;

  useEffect(() => {
    const fetchData = async () => {
      const localCache = browserLocalstorage();
      let eventData = localCache.getItem(cacheKeyEvents) as string;

      // Check if a cached version of events exist on the browser
      if (eventData == null) {
        const resp = await fetch(props.dataSource);
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
      const imageData = {} as any;

      // Pre-render and caches the event images as URI blobs
      for (var i = 0; i < parsedData.length; i++) {
        const cEvent = parsedData[i];
        if (cEvent.imageID != "") {
          const cached = fetchImageFromCache(cEvent.imageID);

          imageData[cEvent.imageID] =
            cached == ""
              ? await createBlobFromImage(
                  `${eventImageBase}${cEvent.imageID}`,
                  cEvent.imageID,
                  eventDisplayLimit
                )
              : cached;
        }
      }

      // Set the new data into the variables
      updateImages(imageData);
      updateEvents(parsedData);
    };
    fetchData();
  }, [props.dataSource]);

  return (
    <div className="events" id="events">
      <div className="title text-center md:text-right"> Upcoming Events </div>
      {events ? (
        <>
          {events.slice(0, eventDisplayLimit).map((item, index) => {
            const dateTime = new Date(item.startDate);
            const imageURL = images[item.imageID];

            return (
              <Event
                key={index}
                title={item.title}
                date={dateTime.toLocaleDateString()}
                time={dateTime.toLocaleTimeString()}
                location={item.location}
                description={item.description}
                image={imageURL}
              />
            );
          })}
          <p className="text-center md:text-2xl lg:text-4xl">
            <i
              className="material-icons md:text-2xl lg:text-4xl"
              onClick={() => {
                window.location.href = props.calendar;
              }}
            >
              event
            </i>
            <a href={props.calendar}> View full event calendar</a>
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
