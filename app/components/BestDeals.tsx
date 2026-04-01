"use client";

import { useState, useEffect, useTransition } from "react";
import type { Product, Category } from "@/app/types";
import { getProductsByCategory } from "@/app/actions/products";
import ProductCard from "./ProductCard";

interface BestDealsProps {
  categories: Category[];
  initialProducts: Product[];
  initialCategory: string;
}

export default function BestDeals({
  categories,
  initialProducts,
  initialCategory,
}: BestDealsProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isPending, startTransition] = useTransition();

  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
    startTransition(async () => {
      const data = await getProductsByCategory(categoryName);
      setProducts(data);
    });
  };

  return (
    <section className="mx-auto max-w-300 px-4 py-8">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-[#e74c3c]">Best</h2>
          <h2 className="text-xl font-bold text-[#2d2d2d]">Deals</h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.name)}
              className={`px-4 py-1.5 text-[12px] font-medium rounded transition-colors uppercase tracking-wide ${
                activeCategory === cat.name
                  ? "bg-[#1cbbb4] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 transition-opacity ${
          isPending ? "opacity-50" : "opacity-100"
        }`}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
