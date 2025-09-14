import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Heart, Shield, Stethoscope } from "lucide-react";
import HealthcareDisclaimer from "@/components/HealthcareDisclaimer";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container-responsive relative z-10">
        <div className="text-center text-white max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">Your Trusted AI Health Companion</span>
            </div>
            
            <h1 className="text-responsive-2xl font-bold mb-4 sm:mb-6 leading-tight">
              Meet{" "}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-pulse-glow">
                CureSight
              </span>
            </h1>
            
            <p className="text-responsive-base mb-6 sm:mb-8 text-blue-100 leading-relaxed max-w-4xl mx-auto px-4">
              Advanced AI-powered health insights, symptom analysis, and personalized wellness guidance. 
              Your journey to better health starts here.
            </p>
            
            {/* Healthcare Notice */}
            <div className="mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              <HealthcareDisclaimer variant="hero" />
            </div>
            
            <div className="flex-responsive justify-center mb-8 sm:mb-12">
              <Button 
                size="lg" 
                className="btn-hero text-responsive-sm px-6 sm:px-8 py-3 sm:py-4 animate-pulse-glow btn-interactive"
                onClick={() => document.getElementById('symptom-checker')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                <span className="hidden sm:inline">Check Symptoms Now</span>
                <span className="sm:hidden">Check Symptoms</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-responsive-sm px-6 sm:px-8 py-3 sm:py-4 btn-interactive"
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                <span className="hidden sm:inline">Explore Features</span>
                <span className="sm:hidden">Explore</span>
              </Button>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid-responsive animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Card className="card-interactive bg-white/10 backdrop-blur-sm border-white/20 p-4 sm:p-6 text-center hover:bg-white/15">
              <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-accent mx-auto mb-3 sm:mb-4 animate-pulse" />
              <h3 className="text-responsive-sm font-semibold mb-2">AI Diagnosis</h3>
              <p className="text-blue-100 text-responsive-xs">Advanced symptom analysis with 95% accuracy</p>
            </Card>
            
            <Card className="card-interactive bg-white/10 backdrop-blur-sm border-white/20 p-4 sm:p-6 text-center hover:bg-white/15 delay-100">
              <Stethoscope className="w-8 h-8 sm:w-12 sm:h-12 text-secondary mx-auto mb-3 sm:mb-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <h3 className="text-responsive-sm font-semibold mb-2">Find Doctors</h3>
              <p className="text-blue-100 text-responsive-xs">Connect with verified healthcare professionals</p>
            </Card>
            
            <Card className="card-interactive bg-white/10 backdrop-blur-sm border-white/20 p-4 sm:p-6 text-center hover:bg-white/15 delay-200">
              <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-accent mx-auto mb-3 sm:mb-4 animate-pulse" style={{ animationDelay: '1s' }} />
              <h3 className="text-responsive-sm font-semibold mb-2">Wellness Hub</h3>
              <p className="text-blue-100 text-responsive-xs">Personalized health and fitness guidance</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;