import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SymptomChecker from "@/components/SymptomChecker";
import HealthDashboard from "@/components/HealthDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SymptomChecker />
      <HealthDashboard />
      <Footer />
    </div>
  );
};

export default Index;
