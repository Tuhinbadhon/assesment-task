"use client";

import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Category } from "@/app/types";

const CATEGORY_IMAGES: Record<string, string> = {
  electronics: "🖥️",
  jewelery: "💎",
  "men's clothing": "👔",
  "women's clothing": "👗",
};

const CATEGORY_LABELS: Record<string, string> = {
  electronics: "Electronics",
  jewelery: "Fashion",
  "men's clothing": "Appliances",
  "women's clothing": "Babies Store",
};

interface CategorySliderProps {
  categories: Category[];
}

export default function CategorySlider({ categories }: CategorySliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 250;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    setShowLeft(scrollRef.current.scrollLeft > 0);
  };

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-6">
      <div className="relative">
        {/* Left arrow */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-gray-600 text-xs" />
          </button>
        )}

        {/* Categories */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="flex-shrink-0 group relative w-[220px] h-[80px] rounded-lg overflow-hidden bg-[#1cbbb4] hover:bg-[#18a8a2] transition-colors"
            >
              <div className="absolute inset-0 flex items-center justify-between px-5">
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">
                    {CATEGORY_LABELS[cat.name] || cat.name}
                  </p>
                  <p className="text-white/80 text-[11px] mt-0.5">Shop</p>
                </div>
                <span className="text-3xl opacity-60">
                  {CATEGORY_IMAGES[cat.name] || "📦"}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Scroll right"
        >
          <FaChevronRight className="text-gray-600 text-xs" />
        </button>
      </div>
    </section>
  );
}
