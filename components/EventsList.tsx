import EventCard from "@/components/EventCard";
import { IEvent } from "@/database/event.model";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventsList = async () => {
  const response = await fetch(`${BASE_URL}/api/events`, {
    cache: "no-store",
  });

  const { events } = await response.json();

  return (
    <ul className="events">
      {events && events.length > 0 ? (
        events.map((event: IEvent) => (
          <li key={event.title} className="list-none">
            <EventCard {...event} />
          </li>
        ))
      ) : (
        <li className="list-none">
          <p className="text-light-200">
            No events listed for now
          </p>
        </li>
      )}
    </ul>
  );
};

export default EventsList;