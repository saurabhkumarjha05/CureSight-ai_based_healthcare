import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Heart, User, Bell, Search, LogOut, Stethoscope, Pill, Brain, Calendar, ChevronDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const navigationItems = [
  { name: 'Symptom Checker', href: '#symptom-checker', icon: Brain },
  { name: 'Find Doctors', href: '/find-doctors', icon: Stethoscope },
  { name: 'Medicine Store', href: '/medicine-store', icon: Pill },
  { name: 'Lifestyle Hub', href: '/lifestyle', icon: Heart },
  { name: 'Appointments', href: '/appointments', icon: Calendar },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-lg border-b border-border shadow-lg' 
        : 'bg-white/95 backdrop-blur-md border-b border-border'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-hero rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-gradient transition-all duration-300 group-hover:scale-105">CureSight</h1>
              <p className="text-xs text-muted-foreground">AI Health Companion</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-gradient">CureSight</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href || 
                (item.href === '#symptom-checker' && location.pathname === '/');
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-primary bg-primary/10 shadow-sm' 
                      : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${
                    isActive ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  <span className="whitespace-nowrap">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* User Actions */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {user && (
              <Badge variant="secondary" className="px-3 py-1 animate-pulse">
                <span className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></span>
                <span className="hidden xl:inline">Health Score: 85</span>
                <span className="xl:hidden">85</span>
              </Badge>
            )}
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground hidden xl:block">
                  Welcome, {user.user_metadata?.full_name || user.email?.split('@')[0]}
                </span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleSignOut}
                  className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20 transition-all duration-300"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </div>
            ) : (
              <>
                <Link to="/auth">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    <User className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Sign In</span>
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button 
                    size="sm" 
                    className="btn-hero px-4 xl:px-6 hover:scale-105 transition-transform duration-300"
                  >
                    <span className="hidden sm:inline">Get Started</span>
                    <span className="sm:hidden">Start</span>
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden relative z-50 hover:bg-muted/50 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              }`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              }`} />
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-border bg-white/98 backdrop-blur-lg">
            <div className="py-4 space-y-2">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href || 
                  (item.href === '#symptom-checker' && location.pathname === '/');
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 px-4 py-3 mx-2 text-sm font-medium rounded-lg transition-all duration-300 transform ${
                      isActive 
                        ? 'text-primary bg-primary/10 shadow-sm scale-105' 
                        : 'text-muted-foreground hover:text-primary hover:bg-muted/50 hover:scale-105'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <Icon className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'scale-110' : ''
                    }`} />
                    {item.name}
                  </Link>
                );
              })}
              
              <div className="px-4 pt-4 border-t border-border space-y-3">
                {user && (
                  <Badge variant="secondary" className="w-full justify-center py-2 animate-pulse">
                    <span className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></span>
                    Health Score: 85
                  </Badge>
                )}
                {user ? (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground text-center">
                      Welcome, {user.user_metadata?.full_name || user.email?.split('@')[0]}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20 transition-all duration-300" 
                      onClick={handleSignOut}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button 
                        variant="outline" 
                        className="w-full hover:scale-105 transition-transform duration-300"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button 
                        className="w-full btn-hero hover:scale-105 transition-transform duration-300"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;