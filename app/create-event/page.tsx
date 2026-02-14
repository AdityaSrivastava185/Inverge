import React from 'react'
import Image from "next/image";

const page = () => {
    return (
        <div>
            <div className='py-7'>
                <h1>Create Event</h1>
                <p>please fill out the form to create a new event</p>
            </div>
            <form>
                <div className="flex flex-col gap-2">
                    <label htmlFor="event-title" className="text-sm font-medium text-foreground">
                        Event Title
                    </label>
                    <input
                        id="event-title"
                        type="text"
                        placeholder="Enter the event title"
                        className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Description
                    </label>
                    <input id="description"
                           type="text"
                           placeholder="Enter the event description"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Overview
                    </label>
                    <input id="overview"
                           type="text"
                           placeholder="Enter the event overview"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        venue
                    </label>
                    <input id="venue"
                           type="text"
                           placeholder="Enter the event venue"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Location
                    </label>
                    <input id="location"
                           type="text"
                           placeholder="Enter the event location"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Date
                    </label>
                    <input id="date"
                           type="text"
                           placeholder="Enter the event date"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Mode
                    </label>
                    <input id="mode"
                           type="text"
                           placeholder="Enter the event mode"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Audience
                    </label>
                    <input id="audience"
                           type="text"
                           placeholder="Enter the event audience"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Agenda
                    </label>
                    <input id="agenda"
                           type="text"
                           placeholder="Enter the event agenda"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Organizer
                    </label>
                    <input id="organizer"
                           type="text"
                           placeholder="Enter the event organizer"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Tag
                    </label>
                    <input id="tag"
                           type="text"
                           placeholder="Enter the event tags"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Time
                    </label>
                    <input id="time"
                           type="text"
                           placeholder="Enter the event time"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Website
                    </label>
                    <input id="website"
                           type="text"
                           placeholder="Enter the event website"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                    <label htmlFor="event-description" className="text-sm font-medium text-foreground">
                        Image
                    </label>
                    <input id="image"
                           type="text"
                           placeholder="Enter the event image"
                           className="w-full max-w-2xl rounded-md border
                        border-border/20 px-4 py-2 text-sm
                        text-foreground placeholder:text-foreground/50 f
                        ocus:border-foreground/40 focus:outline-none
                        focus:ring-1 focus:ring-foreground/20 bg-dark-200 margin-bottom"
                    />
                </div>
            </form>
            <button type="submit" id="explore-btn" className="mt-7 mx-auto bg-dark-100">
                Create Event

            </button>
        </div>
    )
}

export default page
