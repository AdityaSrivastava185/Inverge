import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import BookEvent from "@/components/BookEvent";
import { cacheLife } from "next/cache";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailItem = ({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) => (
  <div className="flex gap-2 items-center">
    <Image src={icon} alt={alt} width={17} height={17} />
    <p>{label}</p>
  </div>
);

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className="agenda">
    <h2 className="text-2xl md:text-4xl font-semibold py-3 md:py-4">Agenda</h2>
    <ul>
      {agendaItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap">
    {tags.map((tag) => (
      <div className="pill" key={tag}>
        {tag}
      </div>
    ))}
  </div>
);

const EventDetails = async ({ params }: { params: Promise<string> }) => {
  "use cache";
  cacheLife("hours");
  const slug = await params;

  let event;
  try {
    const request = await fetch(`${BASE_URL}/api/events/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!request.ok) {
      if (request.status === 404) {
        return notFound();
      }
      throw new Error(`Failed to fetch event: ${request.statusText}`);
    }

    const response = await request.json();
    event = response.event;

    if (!event) {
      return notFound();
    }
  } catch (error) {
    console.error("Error fetching event:", error);
    return notFound();
  }

  const {
    title,
    description,
    image,
    overview,
    date,
    time,
    location,
    mode,
    agenda,
    audience,
    tags,
    organizer,
    website,
  } = event;

  if (!description) return notFound();

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-10 border-b border-[#30302E] md:pb-17 py-7">
        <div>
          <Image
            src={image}
            className="object-contain rounded-xl"
            height={800}
            width={800}
            alt="event image"
          />
        </div>
        <div className="max-w-7xl w-full">
          <div className="md:header">
            <h1 className="text-3xl max-w-[250px] md:text-5xl md:max-w-7xl w-full">{title}</h1>
          </div>
          <div className="md:my-7 my-4">
            <p className="text-xl font-semibold text-muted-foreground">
              {location}
            </p>
          </div>
          <div>
            <p className="text-xl">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-7 md:gap-10 md:py-17 justify-between">
        <div className="max-w-xs w-full">
          <h1 className="text-2xl max-w-[200px] md:max-w-xs md:text-4xl mt-7 md:mt-0">{title}</h1>
        </div>
        <section className="flex flex-col gap-7 md:gap-17 max-w-[630px] w-full">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold pb-4">Overview</h2>
            <p>{overview}</p>
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className=" text-2xl md:text-4xl font-semibold">Event Details</h2>
            <EventDetailItem
              icon="/icons/calendar.svg"
              alt="calendar"
              label={date}
            />
            <EventDetailItem icon="/icons/clock.svg" alt="clock" label={time} />
            <EventDetailItem icon="/icons/pin.svg" alt="pin" label={location} />
            <EventDetailItem icon="/icons/mode.svg" alt="mode" label={mode} />
            <EventDetailItem
              icon="/icons/audience.svg"
              alt="audience"
              label={audience}
            />
            <EventAgenda agendaItems={agenda} />
            <section className="flex-col-gap-2">
              <h2 className=" text-2xl md:text-4xl font-semibold py-3 md:py-4">
                About the Organizer
              </h2>
              <p>{organizer}</p>
            </section>

            <EventTags tags={tags} />
            <div className="py-3 md:py-4">
              {website ? (
                <>
                  <section className="booking">
                    <div className="mb-7">
                      <h2 className="font-semibold text-2xl md:text-4xl">
                        Checkout and Register
                      </h2>
                      <p className="text-[#87867f]">Checkout their offical page and register to particiapte in the event, know more about the event</p>
                    </div>
                    <div>
                      <Link
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-background p-3 rounded-md hover:opacity-90 transition bg-foreground"
                      >
                        Register Here
                      </Link>
                    </div>
                  </section>
                </>
              ) : (
                <aside className="booking">
                  <div className="signup-card">
                    <h2>Book Your Spot</h2>

                    <BookEvent eventId={event._id} slug={event.slug} />
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default EventDetails;
