import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database/event.model";
import { cacheLife } from "next/cache";
import { Suspense } from "react";
import EventsList from "@/components/EventsList";

const Page = async () => {
  return (
    <section>
      <h1 className="text-center text-balance max-w-sm md:max-w-2xl mx-auto w-full text-3xl md:text-5xl">
        Technical Space Where Developers Find Their Next Opportunity.
      </h1>
      <p className="text-center mt-5 md:max-w-xl text-balance mx-auto text-[#87867f]">
        Explore hackathons, meetups, conferences, workshops, and community events - all curated for developers, indie-hackers, and technical builders
      </p>

      <div className="max-w-xs md:max-w-xl w-full mx-auto ">
        <ExploreBtn />
      </div>

      <div className="mt-20 space-y-7">
        <Suspense fallback={<p>Loading Events .... </p>}>
          <EventsList />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
