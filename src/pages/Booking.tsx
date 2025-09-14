import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Phone, MapPin, ArrowLeft, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
    urgency: 'normal'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM'
  ];

  useEffect(() => {
    // Check if a doctor was selected from Find Doctors page
    const storedDoctor = localStorage.getItem('selectedDoctor');
    if (storedDoctor) {
      setSelectedDoctor(JSON.parse(storedDoctor));
      localStorage.removeItem('selectedDoctor'); // Clear after use
    } else {
      // Default doctor if none selected
      setSelectedDoctor({
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        fees: "₹800",
        hospital: "City Heart Hospital",
        phone: "+91 98765 43210"
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Appointment booked:', { ...formData, doctor: selectedDoctor });
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-healing-50">
      {/* Header */}
      <div className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/find-doctors" className="flex items-center gap-2 text-medical-600 hover:text-medical-700 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                Back to Find Doctors
              </Link>
              <h1 className="text-2xl font-bold text-medical-900">Book Appointment</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-soft border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-medical-900">Appointment Details</CardTitle>
                  <CardDescription>Fill in your information to book an appointment</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                            <SelectItem value="emergency">Emergency</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="reason">Reason for Visit *</Label>
                      <Textarea
                        id="reason"
                        value={formData.reason}
                        onChange={(e) => handleInputChange('reason', e.target.value)}
                        placeholder="Describe your symptoms or reason for the appointment"
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Appointment Summary */}
            <div className="lg:col-span-1">
              <Card className="shadow-soft border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-medical-900">Appointment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-medical-500 to-healing-500 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-900">{selectedDoctor?.name}</h3>
                      <p className="text-sm text-medical-600">{selectedDoctor?.specialty}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-medical-500" />
                      <span>Date: {formData.date || 'Not selected'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-medical-500" />
                      <span>Time: {formData.time || 'Not selected'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-medical-500" />
                      <span>Fee: {selectedDoctor?.fees}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-medical-500" />
                      <span>{selectedDoctor?.hospital}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Fee</span>
                      <span className="text-lg font-bold text-medical-900">{selectedDoctor?.fees}</span>
                    </div>
                    <p className="text-xs text-medical-500 mt-1">Payment due at appointment</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <Card className="shadow-soft border-0 bg-white/90 backdrop-blur-sm text-center">
            <CardContent className="py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-medical-900 mb-2">Appointment Booked!</h2>
              <p className="text-medical-600 mb-6">
                Your appointment has been successfully booked. You will receive a confirmation email shortly.
              </p>
              <div className="space-y-2 text-sm text-medical-500 mb-6">
                <p>Appointment ID: APT-{Date.now().toString().slice(-6)}</p>
                <p>Doctor: {selectedDoctor?.name}</p>
                <p>Date: {formData.date}</p>
                <p>Time: {formData.time}</p>
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Book Another
                </Button>
                <Link to="/appointments">
                  <Button>View Appointments</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Booking;
