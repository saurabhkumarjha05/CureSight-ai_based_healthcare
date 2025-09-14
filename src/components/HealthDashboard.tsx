import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Calendar, 
  Heart, 
  Pill, 
  Target, 
  TrendingUp, 
  Users, 
  Zap 
} from "lucide-react";

const HealthDashboard = () => {
  const healthScore = 85;
  const weeklyGoals = [
    { name: "Exercise", progress: 75, target: "5 sessions", completed: "4 sessions" },
    { name: "Water Intake", progress: 90, target: "8 glasses", completed: "7.2 glasses" },
    { name: "Sleep", progress: 60, target: "8 hours", completed: "6.5 hours" },
    { name: "Meditation", progress: 45, target: "7 days", completed: "3 days" }
  ];

  const recentActivities = [
    { type: "symptom", message: "Logged headache symptoms", time: "2 hours ago", severity: "low" },
    { type: "exercise", message: "Completed 30min yoga session", time: "1 day ago", severity: "success" },
    { type: "appointment", message: "Dr. Smith consultation scheduled", time: "2 days ago", severity: "medium" },
    { type: "medication", message: "Vitamin D reminder", time: "3 days ago", severity: "low" }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "symptom": return <Activity className="w-4 h-4" />;
      case "exercise": return <Heart className="w-4 h-4" />;
      case "appointment": return <Calendar className="w-4 h-4" />;
      case "medication": return <Pill className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "success": return "severity-low";
      case "low": return "severity-low";
      case "medium": return "severity-medium";
      case "high": return "severity-high";
      default: return "severity-low";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Health Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your wellness journey with personalized insights and recommendations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Health Score & Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="card-medical text-center col-span-2 md:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Health Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2">{healthScore}</div>
                  <Progress value={healthScore} className="h-2 mb-2" />
                  <Badge className="severity-low text-xs">Excellent</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-medical text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent mr-2" />
                  <span className="text-2xl font-bold">12</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Days active</p>
              </CardContent>
            </Card>

            <Card className="card-medical text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-2xl font-bold">47</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">This month</p>
              </CardContent>
            </Card>

            <Card className="card-medical text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Rank</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary mr-2" />
                  <span className="text-2xl font-bold">#3</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Top 5%</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Weekly Goals */}
            <Card className="card-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Weekly Goals
                </CardTitle>
                <CardDescription>
                  Track your progress towards this week's health objectives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {weeklyGoals.map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{goal.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {goal.completed} / {goal.target}
                        </span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{goal.progress}% complete</span>
                        <span>{100 - goal.progress}% remaining</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 btn-secondary">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Detailed Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="card-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Your latest health actions and milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className="flex-shrink-0">
                        <Badge className={getSeverityColor(activity.severity)} variant="outline">
                          {getActivityIcon(activity.type)}
                        </Badge>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Full History
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HealthDashboard;