import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection";
import SummaryTab from "../components/SummaryTab/SummaryTab";

const HomePage = () => {
  return (
    <div className="py-4">
      <HeroSection />
      <SummaryTab />
      <Footer />
    </div>
  );
};

export default HomePage;
