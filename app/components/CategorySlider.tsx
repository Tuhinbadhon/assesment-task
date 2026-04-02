"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLaptop,
  FaGem,
  FaTshirt,
} from "react-icons/fa";
import { GiDress } from "react-icons/gi";
import type { Category } from "@/app/types";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  electronics: <FaLaptop className="text-2xl" />,
  jewelery: <FaGem className="text-2xl" />,
  "men's clothing": <FaTshirt className="text-2xl" />,
  "women's clothing": <GiDress className="text-2xl" />,
};

const CATEGORY_COLORS: Record<string, { bg: string; hover: string }> = {
  electronics: {
    bg: "from-[#1cbbb4] to-[#0e8c87]",
    hover: "shadow-[#1cbbb4]/30",
  },
  jewelery: { bg: "from-[#f5a623] to-[#d4891a]", hover: "shadow-[#f5a623]/30" },
  "men's clothing": {
    bg: "from-[#3b82f6] to-[#2563eb]",
    hover: "shadow-[#3b82f6]/30",
  },
  "women's clothing": {
    bg: "from-[#ec4899] to-[#db2777]",
    hover: "shadow-[#ec4899]/30",
  },
};

interface CategorySliderProps {
  categories: Category[];
}

export default function CategorySlider({ categories }: CategorySliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateArrowVisibility = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    updateArrowVisibility();
  };

  useEffect(() => {
    updateArrowVisibility();
  }, [categories]);

  return (
    <section className="mx-auto max-w-300 px-4 py-6">
      <div className="relative">
        {/* Left arrow */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-gray-600 text-xs" />
          </button>
        )}

        {/* Categories */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-1 py-2"
        >
          {categories.map((cat) => {
            const colors = CATEGORY_COLORS[cat.name] || {
              bg: "from-[#1cbbb4] to-[#0e8c87]",
              hover: "shadow-[#1cbbb4]/30",
            };

            return (
              <Link
                key={cat.id}
                href={`#`}
                className={`shrink-0 group relative w-65 h-22.5 rounded-xl overflow-hidden bg-linear-to-br ${colors.bg} hover:shadow-xl ${colors.hover} hover:-translate-y-0.5 transition-all duration-300`}
              >
                {/* Decorative circle */}
                <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -right-2 -bottom-6 w-16 h-16 rounded-full bg-white/5" />

                <div className="absolute inset-0 flex items-center justify-between px-5">
                  <div className="text-left">
                    <p className="text-white font-bold text-[15px] capitalize">
                      {cat.name}
                    </p>
                    <p className="text-white/70 text-[11px] mt-1 font-medium tracking-wide uppercase">
                      Shop Now →
                    </p>
                  </div>
                  <div className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {CATEGORY_ICONS[cat.name] || (
                      <FaLaptop className="text-2xl" />
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Right arrow */}
        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-gray-600 text-xs" />
          </button>
        )}
      </div>
    </section>
  );
}
