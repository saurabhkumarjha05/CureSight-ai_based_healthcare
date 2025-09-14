import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

interface HealthcareDisclaimerProps {
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
}

const HealthcareDisclaimer: React.FC<HealthcareDisclaimerProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const variants = {
    default: {
      container: "bg-amber-50 dark:bg-amber-500/10 border-l-4 border-amber-500 p-4 sm:p-6 rounded-lg",
      icon: "w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400",
      title: "text-responsive-sm font-semibold text-amber-800 dark:text-amber-200 mb-2",
      text: "text-responsive-xs text-amber-700 dark:text-amber-300 leading-relaxed"
    },
    compact: {
      container: "bg-amber-50 dark:bg-amber-500/10 border-l-2 border-amber-500 p-3 rounded-lg",
      icon: "w-4 h-4 text-amber-600 dark:text-amber-400",
      title: "text-xs font-semibold text-amber-800 dark:text-amber-200 mb-1",
      text: "text-xs text-amber-700 dark:text-amber-300"
    },
    hero: {
      container: "bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-lg",
      icon: "w-4 h-4 sm:w-5 sm:h-5 text-yellow-300",
      title: "text-responsive-xs font-semibold text-blue-100 mb-1",
      text: "text-responsive-xs text-blue-100 leading-relaxed"
    }
  };

  const currentVariant = variants[variant];

  const disclaimerText = {
    default: (
      <>
        <strong>Important:</strong> CureSight is an AI-powered health companion designed for informational purposes only. 
        Our symptom checker and health insights are not a substitute for professional medical advice, diagnosis, or treatment. 
        Always consult with qualified healthcare professionals for proper medical care. In case of medical emergencies, 
        call emergency services immediately. We are not responsible for any health decisions made based on our platform's information.
      </>
    ),
    compact: (
      <>
        <strong>Disclaimer:</strong> This AI analysis is for informational purposes only and should not replace professional medical advice. 
        Always consult healthcare professionals for proper diagnosis and treatment.
      </>
    ),
    hero: (
      <>
        <strong>Notice:</strong> Our AI health tools are for informational purposes only. 
        Always consult healthcare professionals for medical advice and emergencies.
      </>
    )
  };

  return (
    <div className={`${currentVariant.container} ${className}`}>
      <div className="flex items-start gap-3">
        <AlertTriangle className={`${currentVariant.icon} flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          <h4 className={currentVariant.title}>
            Healthcare Disclaimer
          </h4>
          <p className={currentVariant.text}>
            {disclaimerText[variant]}
          </p>
          {variant === 'default' && (
            <div className="mt-3 flex items-center gap-2 text-responsive-xs text-amber-600 dark:text-amber-400">
              <Phone className="w-3 h-3" />
              <span>Emergency: Call 911 or your local emergency services</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthcareDisclaimer;
