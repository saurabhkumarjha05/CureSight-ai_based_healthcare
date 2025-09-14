import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HealthcareDisclaimer from '@/components/HealthcareDisclaimer';
import { 
  Heart, 
  Stethoscope, 
  Pill, 
  Calendar, 
  Brain, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const quickActions = [
    {
      title: 'Book Appointment',
      description: 'Schedule with verified doctors',
      icon: Calendar,
      href: '/appointments',
      color: 'text-primary'
    },
    {
      title: 'Find Doctors',
      description: 'Connect with specialists',
      icon: Stethoscope,
      href: '/find-doctors',
      color: 'text-secondary'
    },
    {
      title: 'Medicine Store',
      description: 'Order prescribed medications',
      icon: Pill,
      href: '/medicine-store',
      color: 'text-accent'
    },
    {
      title: 'Symptom Checker',
      description: 'AI-powered health analysis',
      icon: Brain,
      href: '#symptom-checker',
      color: 'text-primary'
    },
    {
      title: 'Lifestyle Hub',
      description: 'Wellness & fitness guidance',
      icon: Heart,
      href: '/lifestyle',
      color: 'text-secondary'
    }
  ];

  const footerLinks = {
    'Health Services': [
      { name: 'Symptom Checker', href: '#symptom-checker' },
      { name: 'Find Doctors', href: '/find-doctors' },
      { name: 'Book Appointment', href: '/appointments' },
      { name: 'Medicine Store', href: '/medicine-store' },
      { name: 'Lifestyle Hub', href: '/lifestyle' }
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Help Center', href: '/help' }
    ],
    'Resources': [
      { name: 'Health Articles', href: '/articles' },
      { name: 'Medical News', href: '/news' },
      { name: 'Health Tips', href: '/tips' },
      { name: 'Emergency Contacts', href: '/emergency' },
      { name: 'Health Records', href: '/records' }
    ]
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Emergency Helpline',
      value: '108 (India)',
      href: 'tel:108'
    },
    {
      icon: Phone,
      label: 'Health Emergency',
      value: '102 (India)',
      href: 'tel:102'
    },
    {
      icon: Mail,
      label: 'Support Email',
      value: 'support@curesight.ai',
      href: 'mailto:support@curesight.ai'
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'Roorkee, UK, India',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Support Hours',
      value: '24/7 Available',
      href: '#'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSymptomChecker = () => {
    const element = document.getElementById('symptom-checker');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-48 translate-y-48" />
      
      <div className="container-responsive relative z-10">
        {/* Quick Actions Section */}
        <section className="py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-xl font-bold mb-3 sm:mb-4 text-gradient">
              Quick Actions
            </h2>
            <p className="text-responsive-sm text-slate-300 max-w-2xl mx-auto">
              Access our most popular health services with just one click
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card 
                  key={action.title}
                  className="card-interactive bg-white/5 backdrop-blur-sm border-white/10 p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.5s ease-out forwards'
                  }}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center ${action.color} transition-transform duration-300 hover:scale-110`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="text-responsive-xs font-semibold mb-1">{action.title}</h3>
                      <p className="text-responsive-xs text-slate-400 mb-3">{action.description}</p>
                    </div>
                    <Link to={action.href}>
                      <Button 
                        size="sm" 
                        className="btn-interactive bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 w-full"
                        onClick={action.href === '#symptom-checker' ? scrollToSymptomChecker : undefined}
                      >
                        <span className="hidden sm:inline">Get Started</span>
                        <span className="sm:hidden">Start</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Main Footer Content */}
        <div className="border-t border-white/10 pt-8 sm:pt-12 pb-6 sm:pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-hero rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gradient">CureSight</h3>
                  <p className="text-responsive-xs text-slate-400">AI Health Companion</p>
                </div>
              </div>
              <p className="text-responsive-xs text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                Empowering individuals with AI-driven health insights, personalized wellness guidance, 
                and seamless access to healthcare professionals.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div 
                      key={contact.label}
                      className="flex items-center gap-3 text-responsive-xs text-slate-300 hover:text-white transition-colors duration-300"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.4s ease-out forwards'
                      }}
                    >
                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="font-medium">{contact.label}:</span>
                        {contact.href.startsWith('tel:') || contact.href.startsWith('mailto:') ? (
                          <a href={contact.href} className="ml-1 hover:text-primary transition-colors">
                            {contact.value}
                          </a>
                        ) : (
                          <span className="ml-1">{contact.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={category} className="space-y-4">
                <h4 className="text-responsive-sm font-semibold text-white mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-responsive-xs text-slate-300 hover:text-white transition-colors duration-300 flex items-center group"
                        onClick={link.href === '#symptom-checker' ? scrollToSymptomChecker : undefined}
                        style={{ 
                          animationDelay: `${(categoryIndex * 100) + (linkIndex * 50)}ms`,
                          animation: 'fadeInUp 0.4s ease-out forwards'
                        }}
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Healthcare Disclaimer */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <HealthcareDisclaimer 
            variant="default" 
            className="bg-white/5 backdrop-blur-sm border-white/10 text-white"
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <p className="text-responsive-xs text-slate-400">
                © 2025 CureSight. All rights reserved.
              </p>
              <p className="text-responsive-xs text-slate-500 mt-1">
                Made by <span className="text-primary font-semibold">Byte CodeX</span>
              </p>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-[-90deg]" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
