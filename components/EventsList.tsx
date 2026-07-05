import EventCard from "@/components/EventCard";
import { IEvent } from "@/database/event.model";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

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
      <Tabs defaultValue="FeaturedEvent" className="mx-auto md:max-w-7xl">
        <div className="flex justify-center w-full">
          <TabsList className="mx-auto bg-secondary-foreground border border-[#30302E]">
            <TabsTrigger
              className="data-[state=active]:bg-foreground data-[state=active]:text-background text-foreground"
              value="FeaturedEvent"
            >
              View Featured Events
            </TabsTrigger>
            <TabsTrigger
              className="text-foreground data-[state=active]:bg-foreground data-[state=active]:text-background"
              value="PastEvent"
            >
              View Past Events
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="FeaturedEvent" className="mt-7">
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
        </TabsContent>
        <TabsContent value="PastEvent" className="mt-7">
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
        </TabsContent>
      </Tabs>
    </>
  );
};

export default EventsList;
