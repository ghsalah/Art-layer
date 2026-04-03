import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Traditional Art & Story - Art Layer Studio",
};

export default function AboutPage() {
  return (
    <div className="flex-1">
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
}
