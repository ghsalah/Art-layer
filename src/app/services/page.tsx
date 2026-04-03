import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Custom Frames & Services - Art Layer Studio",
};

export default function ServicesPage() {
  return (
    <div className="flex-1">
      <div className="container mx-auto px-6 md:px-12 pt-12 pb-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-white">Custom Services</h1>
      </div>
      <ServicesSection />
    </div>
  );
}
