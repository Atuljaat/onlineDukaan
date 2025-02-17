import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import React from "react";

const reviews = [
  {
    name: "Aarav Sharma",
    username: "@aarav_s",
    body: "Fast delivery, great quality. Loved it!",
    img: "https://avatar.vercel.sh/aarav",
  },
  {
    name: "Priya Kapoor",
    username: "@priyakp",
    body: "Awesome deals, smooth shopping experience!",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Rohan Mehta",
    username: "@rohanm",
    body: "Quick support, super happy with my order!",
    img: "https://avatar.vercel.sh/rohan",
  },
  {
    name: "Ishita Verma",
    username: "@ishita_v",
    body: "Exactly as shown. Great service!",
    img: "https://avatar.vercel.sh/ishita",
  },
  {
    name: "Kunal Singh",
    username: "@kunalsingh",
    body: "Easy checkout, fast delivery. Perfect!",
    img: "https://avatar.vercel.sh/kunal",
  },
  {
    name: "Sneha Joshi",
    username: "@snehaj",
    body: "Great products, loved the packaging!",
    img: "https://avatar.vercel.sh/sneha",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function Reviews() {
  return (
    <>
    <div className=" relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </>
  )
}

export default Reviews