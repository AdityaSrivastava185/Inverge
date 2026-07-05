import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database/event.model";
import { cacheLife } from "next/cache";
import { Suspense } from "react";
import EventsList from "@/components/EventsList";

const Page = async () => {

  return (
    <section>
      <h1 className="text-center text-balance text-3xl md:text-5xl">
        The Hub for Every Git Togther <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5 text-balance text-[#87867f]">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
          <Suspense fallback={<p>Loading Events .... </p>}>
            <EventsList/>
          </Suspense>
      </div>
    </section>
  );
};

export default Page;
