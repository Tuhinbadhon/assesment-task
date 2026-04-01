import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import type { Product } from "@/app/types";

interface ProductCardProps {
  product: Product;
}

function RatingStars({ rate }: { rate: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rate >= i) {
      stars.push(<FaStar key={i} className="text-[#f5a623] text-[10px]" />);
    } else if (rate >= i - 0.5) {
      stars.push(
        <FaStarHalfAlt key={i} className="text-[#f5a623] text-[10px]" />,
      );
    } else {
      stars.push(<FaRegStar key={i} className="text-[#f5a623] text-[10px]" />);
    }
  }
  return <div className="flex items-center gap-0.5">{stars}</div>;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = (product.price * 0.85).toFixed(2);

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-3 flex flex-col group hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative aspect-square mb-3 flex items-center justify-center bg-white p-2">
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
          className="object-contain max-h-32.5 w-auto group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1">
        <p className="text-[11px] text-gray-400 mb-0.5 truncate">
          {product.title}
        </p>
        <h3 className="text-[13px] font-medium text-[#2d2d2d] line-clamp-2 mb-2 leading-tight">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <RatingStars rate={product.rating.rate} />
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[13px] text-gray-400 line-through">
            Rs {product.price.toFixed(2)}
          </span>
          <span className="text-[14px] font-bold text-[#1cbbb4]">
            Rs {discountedPrice}
          </span>
        </div>

        {/* Add to Cart */}
        <button className="mt-auto w-full bg-[#1cbbb4] text-white text-[12px] font-medium py-2 rounded hover:bg-[#18a8a2] transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
