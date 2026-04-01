import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
} from "@/app/actions/products";
import HeroBanner from "@/app/components/HeroBanner";
import CategorySlider from "@/app/components/CategorySlider";
import NewArrivals from "@/app/components/NewArrivals";
import BestDeals from "@/app/components/BestDeals";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ]);

  const initialCategory = categories[0]?.name || "electronics";
  const categoryProducts = await getProductsByCategory(initialCategory);

  return (
    <div className="bg-[#f5f5f5]">
      <HeroBanner />
      <CategorySlider categories={categories} />
      <NewArrivals products={products} />
      <BestDeals
        categories={categories}
        initialProducts={categoryProducts}
        initialCategory={initialCategory}
      />
    </div>
  );
}
