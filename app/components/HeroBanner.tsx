export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-[#e8f5e9] to-[#e0f2f1] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-4 py-8 md:py-12 flex flex-col md:flex-row items-center gap-6">
        {/* Left content */}
        <div className="flex-1 z-10">
          <p className="text-sm text-gray-500 mb-1">
            Best Computer Deals! Shop Fast Delivery 👍 for everything
          </p>
          <h1 className="text-3xl md:text-[40px] font-bold leading-tight text-[#2d2d2d] mb-3">
            Shop <span className="text-[#1cbbb4]">Computer</span>
            <br />
            &amp; experience
          </h1>
          <button className="bg-[#1cbbb4] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-[#18a8a2] transition-colors">
            Shop Now
          </button>
        </div>

        {/* Right side - hero image placeholder */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-[300px] h-[200px] md:w-[400px] md:h-[260px] bg-[#d4ece8] rounded-lg flex items-center justify-center overflow-hidden">
            <svg
              width="200"
              height="140"
              viewBox="0 0 200 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#1cbbb4] opacity-30"
            >
              <rect
                x="20"
                y="10"
                width="160"
                height="100"
                rx="8"
                stroke="currentColor"
                strokeWidth="3"
              />
              <rect
                x="70"
                y="110"
                width="60"
                height="8"
                rx="2"
                fill="currentColor"
              />
              <rect
                x="55"
                y="118"
                width="90"
                height="8"
                rx="4"
                fill="currentColor"
              />
              <circle cx="100" cy="60" r="20" fill="currentColor" />
            </svg>
          </div>
          {/* 40% off badge */}
          <div className="absolute top-2 right-2 md:top-4 md:right-8 bg-[#f5a623] text-white rounded-full w-[70px] h-[70px] md:w-[85px] md:h-[85px] flex flex-col items-center justify-center shadow-lg">
            <span className="text-lg md:text-xl font-bold leading-tight">
              40%
            </span>
            <span className="text-xs md:text-sm font-semibold -mt-0.5">
              Off
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
