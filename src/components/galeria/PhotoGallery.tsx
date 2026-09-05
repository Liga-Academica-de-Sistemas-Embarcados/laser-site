"use client";

import { useMemo, useState } from "react";
import { PhotoCard } from "@/components/galeria/PhotoCard";


interface Photo {
    id: string;
    url: string;
    alt: string;
    eventName: string;
    location: string;
    date: string;
}

interface EventGroup {
    id: string;
    name: string;
    photos: Photo[];
}

interface PhotosData {
    events: EventGroup[];
}

interface PhotoGalleryProps {
    dict: {
        galeria: PhotosData;
    };
}


export function PhotoGallery({ dict }: PhotoGalleryProps) {
    const [selectedEventId, setSelectedEventId] = useState<string>(
        dict.galeria.events[0]?.id ?? ""
    );

    const selectedEvent = useMemo(
        () =>
            dict.galeria.events.find(
                (event) => event.id === selectedEventId
            ),
        [dict.galeria.events, selectedEventId]
    );

    const photos = selectedEvent?.photos ?? [];

    const columns = useMemo(() => {
        const left: Photo[] = [];
        const right: Photo[] = [];

        photos.forEach((photo, index) => {
            (index % 2 === 0 ? left : right).push(photo);
        });

        return [left, right];
    }, [photos]);

    return (
        <div>
            <div className="mb-12 max-[1300px]:mx-6">
                <div className="grid w-fit grid-cols-1 items-center">
                    <select
                        value={selectedEventId}
                        onChange={(e) =>
                            setSelectedEventId(e.target.value)
                        }
                        className="
                            col-start-1 row-start-1 appearance-none
                            rounded-[8px]
                            bg-[#E4E4E4]
                            py-[10px] pl-[25px] pr-[45px]
                            text-[16px] font-normal text-solid
                            outline-none transition
                            hover:cursor-pointer hover:bg-[#CCCCCC]
                        "
                    >
                        {dict.galeria.events.map((event) => (
                            <option key={event.id} value={event.id}>
                                {event.name}
                            </option>
                        ))}
                    </select>

                    <svg
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="
                            pointer-events-none col-start-1 row-start-1
                            mr-3.5 h-4 w-4 justify-self-end text-solid
                        "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>

            {photos.length === 0 ? (
                <p className="text-neutral-500">
                    Nenhuma foto encontrada para este evento.
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-[1300px]:px-6">
                    {columns.map((column, colIndex) => (
                        <div
                            key={colIndex}
                            className="flex flex-col gap-6"
                        >
                            {column.map((photo) => (
                                <PhotoCard
                                    key={photo.id}
                                    photo={photo}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}