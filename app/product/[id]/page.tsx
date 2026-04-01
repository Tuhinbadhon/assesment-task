import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaArrowLeft,
  FaShoppingCart,
} from "react-icons/fa";
import { getProduct } from "@/app/actions/products";

function RatingStars({ rate }: { rate: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rate >= i) {
      stars.push(<FaStar key={i} className="text-[#f5a623] text-sm" />);
    } else if (rate >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-[#f5a623] text-sm" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-[#f5a623] text-sm" />);
    }
  }
  return <div className="flex items-center gap-0.5">{stars}</div>;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(Number(id));
  const discountedPrice = (product.price * 0.85).toFixed(2);

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="mx-auto max-w-300 px-4 py-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1cbbb4] transition-colors mb-6"
        >
          <FaArrowLeft className="text-xs" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product image */}
            <div className="flex items-center justify-center bg-white p-8 rounded-lg border border-gray-100">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="object-contain max-h-100 w-auto"
                priority
              />
            </div>

            {/* Product details */}
            <div className="flex flex-col">
              {/* Category badge */}
              <span className="inline-block w-fit text-[11px] uppercase tracking-wider font-medium text-[#1cbbb4] bg-[#1cbbb4]/10 px-3 py-1 rounded-full mb-3">
                {product.category}
              </span>

              <h1 className="text-2xl md:text-3xl font-bold text-[#2d2d2d] leading-tight mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-5">
                <RatingStars rate={product.rating.rate} />
                <span className="text-sm text-gray-500">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-400 line-through text-lg">
                  Rs {product.price.toFixed(2)}
                </span>
                <span className="text-3xl font-bold text-[#1cbbb4]">
                  Rs {discountedPrice}
                </span>
                <span className="text-sm font-medium text-white bg-[#e74c3c] px-2 py-0.5 rounded">
                  15% OFF
                </span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-[#2d2d2d] mb-2">
                  Description
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-auto">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#1cbbb4] text-white font-medium py-3 rounded hover:bg-[#18a8a2] transition-colors">
                  <FaShoppingCart className="text-sm" />
                  Add to Cart
                </button>
                <button className="flex-1 border-2 border-[#1cbbb4] text-[#1cbbb4] font-medium py-3 rounded hover:bg-[#1cbbb4] hover:text-white transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
