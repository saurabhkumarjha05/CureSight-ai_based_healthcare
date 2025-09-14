import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Search, MapPin, Star, Calendar, Phone, Clock } from 'lucide-react';

const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.8,
    reviews: 127,
    distance: "0.8 km",
    availability: "Available Today",
    fees: "₹800",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    hospital: "City Heart Hospital",
    experience: "12 years",
    languages: ["English", "Hindi"],
    phone: "+91 98765 43210"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    rating: 4.9,
    reviews: 89,
    distance: "1.2 km",
    availability: "Available Tomorrow",
    fees: "₹600",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    hospital: "Skin Care Center",
    experience: "8 years",
    languages: ["English", "Hindi", "Tamil"],
    phone: "+91 98765 43211"
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    specialty: "Pediatrician",
    rating: 4.7,
    reviews: 156,
    distance: "2.1 km",
    availability: "Available Today",
    fees: "₹500",
    image: "https://images.unsplash.com/photo-1594824375470-d36100ddf45a?w=300&h=300&fit=crop&crop=face",
    hospital: "Children's Wellness Clinic",
    experience: "15 years",
    languages: ["English", "Hindi", "Gujarati"],
    phone: "+91 98765 43212"
  },
  {
    id: 4,
    name: "Dr. Rajesh Kumar",
    specialty: "Orthopedic",
    rating: 4.6,
    reviews: 203,
    distance: "3.5 km",
    availability: "Available This Week",
    fees: "₹900",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
    hospital: "Bone & Joint Hospital",
    experience: "20 years",
    languages: ["English", "Hindi"],
    phone: "+91 98765 43213"
  }
];

const specialties = [
  "All Specialties",
  "Cardiologist",
  "Dermatologist", 
  "Pediatrician",
  "Orthopedic",
  "Neurologist",
  "Gynecologist",
  "ENT Specialist"
];

const FindDoctors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [filteredDoctors, setFilteredDoctors] = useState(mockDoctors);

  const handleSearch = () => {
    let filtered = mockDoctors;
    
    if (searchQuery) {
      filtered = filtered.filter(doctor => 
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedSpecialty !== 'All Specialties') {
      filtered = filtered.filter(doctor => doctor.specialty === selectedSpecialty);
    }
    
    setFilteredDoctors(filtered);
  };

  React.useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedSpecialty]);

  const handleBookAppointment = (doctorId: number) => {
    // Store doctor info in localStorage and redirect to booking page
    const doctor = mockDoctors.find(d => d.id === doctorId);
    if (doctor) {
      localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
      window.location.href = '/booking';
    }
  };

  const handleCallDoctor = (doctorId: number) => {
    const doctor = mockDoctors.find(d => d.id === doctorId);
    if (doctor) {
      // Create a phone call link
      const phoneLink = `tel:${doctor.phone}`;
      window.open(phoneLink, '_self');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-healing-50">
      {/* Header */}
      <div className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-medical-600 hover:text-medical-700 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Link>
              <h1 className="text-2xl font-bold text-medical-900">Find Doctors</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8 shadow-soft border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-medical-900">Search for Doctors</CardTitle>
            <CardDescription>Find the right healthcare professional for your needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medical-400 h-4 w-4" />
                <Input
                  placeholder="Search by doctor name, specialty, or hospital"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={handleSearch} className="w-full md:w-auto">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="shadow-soft hover:shadow-glow transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-medical-200"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg text-medical-900">{doctor.name}</CardTitle>
                    <CardDescription className="text-medical-600">{doctor.specialty}</CardDescription>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-sm text-medical-500">({doctor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-medical-600">
                  <MapPin className="h-4 w-4" />
                  <span>{doctor.hospital} • {doctor.distance}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-medical-600">
                  <Clock className="h-4 w-4" />
                  <span>{doctor.experience} experience</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {doctor.languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-center">
                    <div className="text-lg font-bold text-medical-900">{doctor.fees}</div>
                    <div className="text-xs text-medical-500">Consultation Fee</div>
                  </div>
                  <Badge 
                    variant={doctor.availability.includes('Today') ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {doctor.availability}
                  </Badge>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleBookAppointment(doctor.id)}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleCallDoctor(doctor.id)}
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-medical-400 mb-2">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-medical-900 mb-2">No doctors found</h3>
            <p className="text-medical-600">Try adjusting your search criteria or browse all doctors.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctors;