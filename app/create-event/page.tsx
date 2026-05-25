'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const page = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState<string | null>(null)

    useEffect(() => {
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview)
            }
        }
    }, [imagePreview])

    const fallbackImage = '/images/gitevent.jpg'

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]

        if (!file) {
            setImagePreview(null)
            setSelectedImage(null)
            return
        }

        const nextUrl = URL.createObjectURL(file)
        setSelectedImage(file)
        // console.log(file.name)
        setImagePreview((prev) => {
            if (prev) {
                URL.revokeObjectURL(prev)
            }
            return nextUrl
        })
    }

    const parseListInput = (value: string) => {
        if (!value) return []
        return value
            .replace(/[\[\]]/g, '')
            .split(',')
            .map((item) => item.replace(/['"]/g, '').trim())
            .filter(Boolean)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        setSubmitMessage(null)

        const formElement = event.currentTarget
        const formData = new FormData(formElement)

        if (selectedImage) {
            formData.set('image', selectedImage)
        }

        const agendaInput = (formData.get('agenda') as string) || ''
        const tagsInput = (formData.get('tags') as string) || ''

        formData.set('agenda', JSON.stringify(parseListInput(agendaInput)))
        formData.set('tags', JSON.stringify(parseListInput(tagsInput)))

        try {
            const response = await fetch('/api/events', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                const data = await response.json().catch(() => null)
                throw new Error(data?.message || 'Event creation failed')
            }

            setSubmitMessage('Event created successfully.')
            formElement.reset()
            setImagePreview(null)
            setSelectedImage(null)
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Event creation failed'
            setSubmitMessage(message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen w-full  text-white">
            <form
                className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 lg:flex-row"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <div className="w-full lg:w-[38%]">
                    <div className="rounded-[22px]  p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px]">
                            <label
                                htmlFor="event-image"
                                className="absolute left-3 top-3 z-10 cursor-pointer rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#043b35]"
                            >
                                Upload
                            </label>
                            <input
                                id="event-image"
                                name="image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                                className="sr-only"
                            />
                            <Image
                                src={imagePreview ?? fallbackImage}
                                alt="Event cover"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[62%]">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                            <span className="inline-block h-2 w-2 rounded-full bg-emerald-300"></span>
                            GitTogether Event
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                            Public
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4">
                        <input
                            id="event-title"
                            name="title"
                            type="text"
                            placeholder="Event Name"
                            className="w-full rounded-2xl bg-white/5 px-5 py-4 text-2xl font-semibold text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                        />

                        <div className="grid gap-3 rounded-2xl bg-white/5 px-4 py-4 text-sm">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-white/60">Start</span>
                                <input
                                    id="date"
                                    name="date"
                                    type="text"
                                    placeholder="2025-12-12"
                                    className="flex-1 rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                                />
                                <input
                                    id="time"
                                    name="time"
                                    type="text"
                                    placeholder="12:00 PM"
                                    className="w-32 rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                                />
                            </div>
                        </div>

                        <input
                            id="location"
                            name="location"
                            type="text"
                            placeholder="Online or Address"
                            className="w-full rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                        />

                        <input
                            id="description"
                            name="description"
                            type="text"
                            placeholder="Add Description"
                            className="w-full rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                        />

                        <div className="grid gap-3 rounded-2xl bg-white/5 p-4 text-sm">
                            <p className="text-xs font-semibold text-white/60">Event Options</p>
                            <input
                                id="overview"
                                name="overview"
                                type="text"
                                placeholder="Overview"
                                className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                            <input
                                id="venue"
                                name="venue"
                                type="text"
                                placeholder="Venue"
                                className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                            <input
                                id="mode"
                                name="mode"
                                type="text"
                                placeholder="Online or Offline or Hybrid"
                                className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                            <input
                                id="audience"
                                name="audience"
                                type="text"
                                placeholder="Working professionals and students"
                                className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                            <input
                                id="agenda"
                                name="agenda"
                                type="text"
                                placeholder="['MLH' , 'Global Hack Week' , 'AI/ML']"
                                className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                            <input
                                id="organizer"
                                name="organizer"
                                type="text"
                                placeholder="Vipul , Chavi , shivay"
                                className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                            <input
                                id="tag"
                                name="tags"
                                type="text"
                                placeholder="['open source' , 'MLH' , 'AI/ML']"
                                className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                            <input
                                id="website"
                                name="website"
                                type="text"
                                placeholder="https://mlh.io"
                                className="w-full rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                        </div>

                        <button
                            type="submit"
                            id="explore-btn"
                            className="flex w-full items-center justify-center bg-foreground text-dark-200"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Creating...' : 'Create Event'}
                        </button>
                        {submitMessage ? (
                            <p className="text-sm text-white/70">{submitMessage}</p>
                        ) : null}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default page
