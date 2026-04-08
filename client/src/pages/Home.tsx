/**
 * Home - 数字职工产品展示主页
 * Design: 赛博朋克企业感 - 深夜黑底 + 电光蓝 + 切角几何
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PositioningSection from "@/components/PositioningSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <HeroSection />
      <PositioningSection />
      <ArchitectureSection />
      <FeaturesSection />
      <SecuritySection />
      <ComparisonSection />
      <DifferentiationSection />
      <Footer />
    </div>
  );
}
