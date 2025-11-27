"use client"

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialProps {
  testimonials: TestimonialItem[];
}

export default function Testimonial({ testimonials }: TestimonialProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[index] || {};

  return (
  <section className="relative flex items-center justify-center bg-[#ef8b7a] rounded-[30px] max-w-[1440px] mx-auto w-full h-[600px] p-8">
      <div className="max-w-5xl text-center flex flex-col items-center gap-8">
        {/* Quote */}
        <p className="text-3xl md:text-4xl font-medium leading-snug">
          &#34;{t.quote}&#34;
        </p>

        {/* Author */}
        <div>
          <p className="font-semibold text-xl">{t.author}</p>
          <p className="text-lg opacity-80">{t.role}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-10 w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md transition hover:scale-105"
      >
        <BiChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-10 w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md transition hover:scale-105"
      >
        <BiChevronRight />
      </button>
    </section>
  );
}
