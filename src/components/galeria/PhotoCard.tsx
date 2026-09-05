import Image from "next/image";

interface Photo {
    id: string;
    url: string;
    alt: string;
    eventName: string;
    location: string;
    date: string;
}

export function PhotoCard({ photo }: { photo: Photo }) {
    return (
        <div className="group grid w-full overflow-hidden bg-neutral-300">
        <Image
            src={photo.url}
            alt={photo.alt}
            width={800}
            height={600}
            loading="lazy"
            className="col-start-1 row-start-1 block h-auto w-full object-cover transition-transform duration-500 ease-out"
        />

        <div
            className="
            col-start-1 row-start-1 self-end
            translate-y-full
            bg-neutral-600/85
            px-5 py-4
            text-white
            transition-transform duration-300 ease-out
            group-hover:translate-y-0
            "
        >
            <p className="text-sm leading-snug">
            {photo.eventName} - {photo.location}
            </p>
            <p className="text-sm leading-snug">{photo.date}</p>
        </div>
        </div>
    );
}