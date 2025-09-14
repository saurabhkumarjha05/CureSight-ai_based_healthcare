import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, Phone, Video, Plus, Filter } from 'lucide-react';

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "2024-01-25",
    time: "10:30 AM",
    type: "In-person",
    location: "City Heart Hospital",
    status: "confirmed",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Dermatologist",
    date: "2024-01-28",
    time: "2:15 PM",
    type: "Video call",
    location: "Online consultation",
    status: "pending",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 3,
    doctor: "Dr. Priya Sharma",
    specialty: "Pediatrician",
    date: "2024-02-02",
    time: "11:00 AM",
    type: "In-person",
    location: "Children's Wellness Clinic",
    status: "confirmed",
    image: "https://images.unsplash.com/photo-1594824375470-d36100ddf45a?w=300&h=300&fit=crop&crop=face"
  }
];

const pastAppointments = [
  {
    id: 4,
    doctor: "Dr. John Smith",
    specialty: "General Physician",
    date: "2024-01-15",
    time: "9:00 AM",
    type: "In-person",
    location: "City General Hospital",
    status: "completed",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 5,
    doctor: "Dr. Lisa Wong",
    specialty: "Nutritionist",
    date: "2024-01-10",
    time: "3:30 PM",
    type: "Video call",
    location: "Online consultation",
    status: "completed",
    image: "https://images.unsplash.com/photo-1594824375470-d36100ddf45a?w=300&h=300&fit=crop&crop=face"
  }
];

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'Video call' ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />;
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
              <h1 className="text-2xl font-bold text-medical-900">My Appointments</h1>
            </div>
            <Link to="/find-doctors">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Book New Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-soft border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-medical-900">Calendar</CardTitle>
                <CardDescription>Select a date to view appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border-0"
                />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-6">
              <Button
                variant={activeTab === 'upcoming' ? 'default' : 'outline'}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Appointments ({upcomingAppointments.length})
              </Button>
              <Button
                variant={activeTab === 'past' ? 'default' : 'outline'}
                onClick={() => setActiveTab('past')}
              >
                Past Appointments ({pastAppointments.length})
              </Button>
            </div>

            {/* Appointments List */}
            <div className="space-y-4">
              {(activeTab === 'upcoming' ? upcomingAppointments : pastAppointments).map((appointment) => (
                <Card key={appointment.id} className="shadow-soft hover:shadow-glow transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <img
                          src={appointment.image}
                          alt={appointment.doctor}
                          className="w-16 h-16 rounded-full object-cover border-2 border-medical-200"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-medical-900">{appointment.doctor}</h3>
                          <p className="text-medical-600 mb-2">{appointment.specialty}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-medical-500">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-4 w-4" />
                              {new Date(appointment.date).toLocaleDateString('en-US', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {appointment.time}
                            </div>
                            <div className="flex items-center gap-1">
                              {getTypeIcon(appointment.type)}
                              {appointment.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <Badge className={`px-3 py-1 ${getStatusColor(appointment.status)}`}>
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </Badge>
                        
                        {activeTab === 'upcoming' && (
                          <div className="flex gap-2">
                            {appointment.type === 'Video call' ? (
                              <Button size="sm">
                                <Video className="h-4 w-4 mr-2" />
                                Join Call
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline">
                                <MapPin className="h-4 w-4 mr-2" />
                                Get Directions
                              </Button>
                            )}
                            <Button size="sm" variant="outline">
                              <Phone className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                        
                        {activeTab === 'past' && (
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              View Report
                            </Button>
                            <Button size="sm">
                              Book Again
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {((activeTab === 'upcoming' && upcomingAppointments.length === 0) ||
              (activeTab === 'past' && pastAppointments.length === 0)) && (
              <Card className="shadow-soft border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <CalendarIcon className="h-12 w-12 text-medical-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-medical-900 mb-2">
                    No {activeTab} appointments
                  </h3>
                  <p className="text-medical-600 mb-4">
                    {activeTab === 'upcoming' 
                      ? "You don't have any upcoming appointments scheduled."
                      : "You don't have any past appointments to view."}
                  </p>
                  {activeTab === 'upcoming' && (
                    <Link to="/find-doctors">
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Book Your First Appointment
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;