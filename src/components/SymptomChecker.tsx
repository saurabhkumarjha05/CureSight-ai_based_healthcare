import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import HealthcareDisclaimer from "@/components/HealthcareDisclaimer";

const commonSymptoms = [
  { id: "fever", label: "Fever", category: "general" },
  { id: "headache", label: "Headache", category: "neurological" },
  { id: "cough", label: "Cough", category: "respiratory" },
  { id: "fatigue", label: "Fatigue", category: "general" },
  { id: "nausea", label: "Nausea", category: "gastrointestinal" },
  { id: "diarrhea", label: "Diarrhea", category: "gastrointestinal" },
  { id: "muscle-aches", label: "Muscle Aches", category: "musculoskeletal" },
  { id: "sore-throat", label: "Sore Throat", category: "respiratory" },
  { id: "runny-nose", label: "Runny Nose", category: "respiratory" },
  { id: "chest-pain", label: "Chest Pain", category: "cardiac" },
  { id: "dizziness", label: "Dizziness", category: "neurological" },
  { id: "rash", label: "Skin Rash", category: "dermatological" },
];

const mockPredictions = [
  {
    condition: "Common Cold",
    confidence: 87,
    severity: "low",
    description: "Viral upper respiratory infection",
    recommendations: ["Rest and hydration", "OTC pain relievers", "Monitor symptoms"]
  },
  {
    condition: "Seasonal Allergies",
    confidence: 73,
    severity: "low", 
    description: "Allergic reaction to environmental triggers",
    recommendations: ["Avoid allergens", "Antihistamines", "Consider allergy testing"]
  },
  {
    condition: "Viral Gastroenteritis",
    confidence: 65,
    severity: "medium",
    description: "Stomach flu with GI symptoms",
    recommendations: ["Stay hydrated", "BRAT diet", "Seek care if severe"]
  }
];

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const analyzeSymptoms = async () => {
    if (selectedSymptoms.length === 0) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    
    // Simulate AI analysis with progress
    for (let i = 0; i <= 100; i += 5) {
      setAnalysisProgress(i);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low": return "severity-low";
      case "medium": return "severity-medium";
      case "high": return "severity-high";
      default: return "severity-low";
    }
  };

  return (
    <section id="symptom-checker" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-responsive-xl font-bold mb-3 sm:mb-4 text-gradient animate-fade-in">AI Symptom Checker</h2>
          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto px-4">
            Select your symptoms below and let our advanced AI provide personalized health insights
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="card-medical mb-6 sm:mb-8 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-responsive-sm">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
                Select Your Symptoms
              </CardTitle>
              <CardDescription className="text-responsive-xs">
                Choose all symptoms you're currently experiencing. The more accurate information you provide, 
                the better our AI can assist you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid-responsive mb-6 sm:mb-8">
                {commonSymptoms.map((symptom, index) => (
                  <div
                    key={symptom.id}
                    className={`flex items-center space-x-3 p-3 sm:p-4 rounded-lg border hover:bg-muted/50 transition-all duration-300 cursor-pointer btn-interactive ${
                      selectedSymptoms.includes(symptom.id) 
                        ? 'bg-primary/10 border-primary/30 shadow-sm scale-105' 
                        : 'hover:scale-105'
                    }`}
                    onClick={() => handleSymptomToggle(symptom.id)}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: 'fadeInUp 0.4s ease-out forwards'
                    }}
                  >
                    <Checkbox
                      id={symptom.id}
                      checked={selectedSymptoms.includes(symptom.id)}
                      onChange={() => handleSymptomToggle(symptom.id)}
                      className="transition-all duration-300"
                    />
                    <label htmlFor={symptom.id} className="font-medium cursor-pointer flex-1 text-responsive-xs">
                      {symptom.label}
                    </label>
                  </div>
                ))}
              </div>

              {selectedSymptoms.length > 0 && (
                <div className="mb-4 sm:mb-6 animate-fade-in-up">
                  <p className="text-responsive-xs text-muted-foreground mb-2">
                    Selected symptoms ({selectedSymptoms.length}):
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedSymptoms.map((symptomId, index) => {
                      const symptom = commonSymptoms.find(s => s.id === symptomId);
                      return (
                        <Badge 
                          key={symptomId} 
                          variant="secondary" 
                          className="px-2 sm:px-3 py-1 animate-bounce-in transition-all duration-300 hover:scale-110"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {symptom?.label}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              )}

              <Button
                onClick={analyzeSymptoms}
                disabled={selectedSymptoms.length === 0 || isAnalyzing}
                className={`w-full btn-hero text-responsive-sm py-3 sm:py-4 btn-interactive ${
                  isAnalyzing ? 'btn-loading' : ''
                }`}
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                    <span className="hidden sm:inline">Analyzing Symptoms...</span>
                    <span className="sm:hidden">Analyzing...</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="hidden sm:inline">Analyze Symptoms ({selectedSymptoms.length})</span>
                    <span className="sm:hidden">Analyze ({selectedSymptoms.length})</span>
                  </>
                )}
              </Button>

              {isAnalyzing && (
                <div className="mt-4 sm:mt-6 animate-fade-in-up">
                  <div className="flex items-center justify-between text-responsive-xs mb-2">
                    <span>AI Analysis Progress</span>
                    <span className="font-semibold text-primary">{analysisProgress}%</span>
                  </div>
                  <Progress value={analysisProgress} className="h-2 sm:h-3 transition-all duration-300" />
                </div>
              )}
            </CardContent>
          </Card>

          {showResults && (
            <Card className="card-medical animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-responsive-sm">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
                  AI Analysis Results
                </CardTitle>
                <CardDescription className="text-responsive-xs">
                  Based on your symptoms, here are the most likely conditions. 
                  This is not a medical diagnosis - please consult a healthcare professional.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="spacing-responsive">
                  {mockPredictions.map((prediction, index) => (
                    <div 
                      key={index} 
                      className="card-interactive border rounded-lg p-4 sm:p-6 hover:shadow-md transition-all duration-300"
                      style={{ 
                        animationDelay: `${index * 200}ms`,
                        animation: 'fadeInUp 0.5s ease-out forwards'
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-3">
                        <h3 className="text-responsive-sm font-semibold">{prediction.condition}</h3>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Badge className={`${getSeverityColor(prediction.severity)} text-responsive-xs`}>
                            {prediction.severity.toUpperCase()}
                          </Badge>
                          <div className="text-right">
                            <div className="text-lg sm:text-2xl font-bold text-primary">{prediction.confidence}%</div>
                            <div className="text-responsive-xs text-muted-foreground">Confidence</div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-3 sm:mb-4 text-responsive-xs">{prediction.description}</p>
                      
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2 text-responsive-xs">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          Recommendations:
                        </h4>
                        <ul className="space-y-1">
                          {prediction.recommendations.map((rec, i) => (
                            <li key={i} className="text-responsive-xs text-muted-foreground flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <HealthcareDisclaimer 
                  variant="compact" 
                  className="mt-6 sm:mt-8 animate-fade-in-up" 
                />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SymptomChecker;