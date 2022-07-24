import '../index.css';
import Event1 from '../static/events/event1.png';
import Event2 from '../static/events/event2.png';
import Event3 from '../static/events/event3.png';

const events = [
    {"Title" : "Event 1",
    "Date" : "01/01/2020",
    "Time" : "12:00",
    "Location" : "Location 1",
    "Description" : "Description 1",
    "Image" : Event1},
    {"Title" : "Event 2",
    "Date" : "01/01/2020",
    "Time" : "12:00",
    "Location" : "Location 2",
    "Description" : "Description 2",
    "Image" : Event2},
    {"Title" : "Event 3",
    "Date" : "01/01/2020",
    "Time" : "12:00",
    "Location" : "Location 3",
    "Description" : "Description 3",
    "Image" : Event3}
]

function Event(props) {
    return (
        <>
        <div className="event">
            <img src={props.Image} alt={props.Title} />
            {props.Title}
            {props.Date}
            {props.Time}
            {props.Location}
        </div>
        </>
    )
}

function Events() {

    return (
        <>
        <div className="events" id="Events">
            <div className="title"> Events </div>
            &nbsp;
            {events.map((item, index)=>{
                return <Event key={index} Title={item.Title} Date={item.Date} Time={item.Time} Location={item.Location} Description={item.Description} Image={item.Image} />
            })}
        </div>
        </>
    )
}

export default Events;