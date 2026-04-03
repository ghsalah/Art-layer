import GallerySection from "@/components/GallerySection";

export const metadata = {
  title: "Shop By Category - Art Layer Studio",
};

export default function ShopPage() {
  return (
    <div className="flex-1">
      <div className="container mx-auto px-6 md:px-12 pt-12 pb-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-white">Shop By Category</h1>
      </div>
      <GallerySection />
    </div>
  );
}
