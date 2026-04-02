import type { Product } from "@/app/types";
import ProductCard from "./ProductCard";

interface NewArrivalsProps {
  products: Product[];
}

export default function NewArrivals({ products }: NewArrivalsProps) {
  const recentProducts = products.slice(0, 10);

  return (
    <section className="mx-auto max-w-300 px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-bold text-[#e74c3c]">New</h2>
        <h2 className="text-xl font-bold text-[#2d2d2d]">Arrivals</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {recentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
