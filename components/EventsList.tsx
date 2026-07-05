import EventCard from "@/components/EventCard";
import { IEvent } from "@/database/event.model";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventsList = async () => {
  const response = await fetch(`${BASE_URL}/api/events`, {
    cache: "no-store",
  });

  const { events } = await response.json();
  const now = new Date();
  const featuredEvents = events.filter(
    (event: IEvent) => new Date(event.date) >= now,
  );

  const pastEvents = events.filter(
    (event: IEvent) => new Date(event.date) < now,
  );

  return (
    <>
      <ul className="">
        <h3 className="mb-7">Featured Events</h3>
        <div className="events">
          {featuredEvents.length > 0 ? (
            featuredEvents.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))
          ) : (
            <li className="list-none">
              <p className="text-light-200">No upcoming events listed.</p>
            </li>
          )}
        </div>
      </ul>
      <ul>
        <h3 className="mb-7">Past Events</h3>
        <div className="events">
          {pastEvents.length > 0 ? (
            pastEvents.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))
          ) : (
            <li className="list-none">
              <p className="text-light-200">No past events.</p>
            </li>
          )}
        </div>
      </ul>
    </>
  );
};

export default EventsList;
