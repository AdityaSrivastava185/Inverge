import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import Image from "next/image";
import { IEvent } from "@/database/event.model";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Home() {

  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();


  return (
    <>
      <section>
        <h1 className="text-center"> The space for every dev <br /> Event you can not miss</h1>
        <p className="text-center mt-5">Hackathons , Meetups , and Conferences , Everything in one place </p>
        <ExploreBtn />
        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>

          <ul className="events">
            {events && events.length > 0 && events.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
