export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#e0f7f5] via-[#f0faf9] to-[#dff0ed]">
      {/* Background decorations */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#1cbbb4]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 right-10 w-56 h-56 bg-[#f5a623]/10 rounded-full blur-3xl" />
      <div className="absolute top-10 right-1/3 w-3 h-3 bg-[#1cbbb4] rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-14 left-1/4 w-2 h-2 bg-[#f5a623] rounded-full opacity-50 animate-pulse" />
      <div className="absolute top-20 left-[15%] w-1.5 h-1.5 bg-[#1cbbb4] rounded-full opacity-30 animate-ping" />

      <div className="relative mx-auto max-w-300 px-4 py-10 md:py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Left content */}
        <div className="flex-1 z-10">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <p className="text-xs font-medium text-gray-600">
              Best Computer Deals — Fast Delivery for everything
            </p>
          </div>

          <h1 className="text-4xl md:text-[52px] font-extrabold leading-[1.1] text-[#2d2d2d] mb-2 tracking-tight">
            Shop{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1cbbb4] to-[#0e8c87]">
              Computer
            </span>
          </h1>
          <h1 className="text-4xl md:text-[52px] font-extrabold leading-[1.1] text-[#2d2d2d] mb-5 tracking-tight">
            &amp; experience
          </h1>

          <p className="text-sm text-gray-500 mb-6 max-w-sm leading-relaxed">
            Discover the latest tech at unbeatable prices. Premium quality,
            delivered to your doorstep.
          </p>

          <div className="flex items-center gap-3">
            <button className="bg-linear-to-r from-[#1cbbb4] to-[#0e9e98] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-[#1cbbb4]/30 hover:-translate-y-0.5 transition-all duration-300">
              Shop Now
            </button>
            <button className="border-2 border-[#1cbbb4] text-[#1cbbb4] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1cbbb4] hover:text-white transition-all duration-300">
              View Deals
            </button>
          </div>
        </div>

        {/* Right side — laptop illustration */}
        <div className="flex-1 flex justify-center relative">
          {/* Glow behind the image area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-[#1cbbb4]/15 rounded-full blur-2xl" />
          </div>

          <div className="relative w-[320px] h-55 md:w-110 md:h-75 flex items-center justify-center">
            {/* Laptop SVG (more detailed) */}
            <svg
              width="320"
              height="230"
              viewBox="0 0 320 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-xl"
            >
              {/* Screen */}
              <rect
                x="50"
                y="15"
                width="220"
                height="145"
                rx="10"
                fill="#2d2d2d"
              />
              <rect
                x="58"
                y="23"
                width="204"
                height="129"
                rx="4"
                fill="#1cbbb4"
                opacity="0.15"
              />
              {/* Screen content lines */}
              <rect
                x="78"
                y="55"
                width="80"
                height="6"
                rx="3"
                fill="#1cbbb4"
                opacity="0.5"
              />
              <rect
                x="78"
                y="68"
                width="120"
                height="4"
                rx="2"
                fill="#1cbbb4"
                opacity="0.3"
              />
              <rect
                x="78"
                y="78"
                width="100"
                height="4"
                rx="2"
                fill="#1cbbb4"
                opacity="0.3"
              />
              <rect
                x="78"
                y="95"
                width="55"
                height="20"
                rx="6"
                fill="#1cbbb4"
                opacity="0.6"
              />
              {/* Image placeholder on screen */}
              <rect
                x="180"
                y="50"
                width="65"
                height="55"
                rx="4"
                fill="#1cbbb4"
                opacity="0.25"
              />
              {/* Camera dot */}
              <circle cx="160" cy="19" r="2" fill="#555" />
              {/* Base hinge */}
              <path d="M40 160 L280 160 L300 185 L20 185 Z" fill="#3a3a3a" />
              {/* Base bottom */}
              <rect
                x="15"
                y="185"
                width="290"
                height="8"
                rx="4"
                fill="#2d2d2d"
              />
              {/* Trackpad */}
              <rect
                x="130"
                y="168"
                width="60"
                height="10"
                rx="3"
                fill="#555"
                opacity="0.4"
              />
            </svg>

            {/* 40% off badge */}
            <div className="absolute top-0 right-0 md:top-2 md:-right-2">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f5a623] rounded-full blur-md opacity-40 animate-pulse" />
                <div className="relative bg-linear-to-br from-[#f5a623] to-[#e8941a] text-white rounded-full w-18.75 h-18.75 md:w-22.5 md:h-22.5 flex flex-col items-center justify-center shadow-xl">
                  <span className="text-xl md:text-2xl font-extrabold leading-none">
                    40%
                  </span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider -mt-0.5">
                    Off
                  </span>
                </div>
              </div>
            </div>
            {/* Top Rated chip */}
            <div
              className="absolute bottom-8 -left-2 md:bottom-12 md:-left-4 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 animate-bounce"
              style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
            >
              <span className="text-lg">⭐</span>
              <span className="text-[10px] font-bold text-gray-700">
                Top Rated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
