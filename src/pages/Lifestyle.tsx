import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Play, Clock, Star, Trophy, Flame, Target, TrendingUp } from 'lucide-react';

const workoutCategories = [
  { name: 'Yoga', color: 'bg-purple-500', count: 25 },
  { name: 'Cardio', color: 'bg-red-500', count: 18 },
  { name: 'Strength', color: 'bg-blue-500', count: 22 },
  { name: 'Meditation', color: 'bg-green-500', count: 15 },
];

const featuredWorkouts = [
  {
    id: 1,
    title: "Morning Yoga Flow",
    instructor: "Sarah Johnson",
    duration: "20 min",
    difficulty: "Beginner",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
    category: "Yoga"
  },
  {
    id: 2,
    title: "HIIT Fat Burner",
    instructor: "Mike Chen",
    duration: "15 min",
    difficulty: "Advanced",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    category: "Cardio"
  },
  {
    id: 3,
    title: "Full Body Strength",
    instructor: "Alex Rivera",
    duration: "30 min",
    difficulty: "Intermediate",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=250&fit=crop",
    category: "Strength"
  },
  {
    id: 4,
    title: "Mindfulness Meditation",
    instructor: "Emma Wilson",
    duration: "10 min",
    difficulty: "Beginner",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    category: "Meditation"
  }
];

const achievements = [
  { title: "Yoga Master", description: "Complete 30 yoga sessions", progress: 78, icon: Trophy },
  { title: "Cardio King", description: "Burn 10,000 calories", progress: 45, icon: Flame },
  { title: "Consistency Champion", description: "30-day streak", progress: 90, icon: Target },
];

const Lifestyle = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredWorkouts = selectedCategory === 'All' 
    ? featuredWorkouts 
    : featuredWorkouts.filter(workout => workout.category === selectedCategory);

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
              <h1 className="text-2xl font-bold text-medical-900">Lifestyle Hub</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-medical-600">Current Streak</p>
                  <p className="text-2xl font-bold text-medical-900">27 days</p>
                </div>
                <Flame className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-medical-600">Total Workouts</p>
                  <p className="text-2xl font-bold text-medical-900">156</p>
                </div>
                <Trophy className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-medical-600">Calories Burned</p>
                  <p className="text-2xl font-bold text-medical-900">4,520</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-medical-600">This Week</p>
                  <p className="text-2xl font-bold text-medical-900">5 of 7</p>
                </div>
                <Target className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <Card className="mb-8 shadow-soft border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-medical-900">Workout Categories</CardTitle>
            <CardDescription>Choose your fitness journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                variant={selectedCategory === 'All' ? 'default' : 'outline'}
                className="h-20 flex-col gap-2"
                onClick={() => setSelectedCategory('All')}
              >
                <div className="w-8 h-8 bg-medical-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">All</span>
                </div>
                <span>All Workouts</span>
              </Button>
              {workoutCategories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? 'default' : 'outline'}
                  className="h-20 flex-col gap-2"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className={`w-8 h-8 ${category.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">{category.count}</span>
                  </div>
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-8 shadow-soft border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-medical-900">Your Achievements</CardTitle>
            <CardDescription>Track your fitness milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="p-4 border border-medical-200 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="h-6 w-6 text-medical-600" />
                      <div>
                        <h4 className="font-medium text-medical-900">{achievement.title}</h4>
                        <p className="text-sm text-medical-600">{achievement.description}</p>
                      </div>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                    <p className="text-sm text-medical-500 mt-1">{achievement.progress}% complete</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Featured Workouts */}
        <Card className="shadow-soft border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-medical-900">
              {selectedCategory === 'All' ? 'Featured Workouts' : `${selectedCategory} Workouts`}
            </CardTitle>
            <CardDescription>Start your fitness journey today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredWorkouts.map((workout) => (
                <Card key={workout.id} className="shadow-soft hover:shadow-glow transition-all duration-300 border-0 bg-white hover:scale-105">
                  <div className="relative">
                    <img
                      src={workout.image}
                      alt={workout.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-t-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-white/90 text-medical-900 hover:bg-white">
                        <Play className="h-4 w-4 mr-2" />
                        Play Now
                      </Button>
                    </div>
                    <Badge className="absolute top-2 right-2" variant="secondary">
                      {workout.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-medical-900 mb-1">{workout.title}</h3>
                    <p className="text-sm text-medical-600 mb-2">by {workout.instructor}</p>
                    
                    <div className="flex items-center justify-between text-sm text-medical-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {workout.duration}
                      </div>
                      <Badge variant={
                        workout.difficulty === 'Beginner' ? 'secondary' :
                        workout.difficulty === 'Intermediate' ? 'default' : 'destructive'
                      }>
                        {workout.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{workout.rating}</span>
                      </div>
                      <Button size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Start
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Lifestyle;