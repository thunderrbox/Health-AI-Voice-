import { Star, MessageCircle, User as UserIcon, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    specialty: "Cardiology Specialist",
    rating: 4.95,
    reviews: 267,
    experience: "15+ years",
    availability: "Available Today",
    badge: "AI Recommended",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
    avatar: "SC"
  },
  {
    id: 2,
    name: "Dr. Mark Johnson",
    specialty: "Neurology Specialist",
    rating: 4.92,
    reviews: 156,
    experience: "12+ years",
    availability: "Available in 2 hrs",
    badge: "Highly Rated",
    badgeColor: "bg-warning/20 text-warning border-warning/30",
    avatar: "MJ"
  },
  {
    id: 3,
    name: "Dr. Emily Mitchell",
    specialty: "General Practitioner",
    rating: 4.76,
    reviews: 312,
    experience: "8+ years",
    availability: "Available Now",
    badge: "Quick Response",
    badgeColor: "bg-success/20 text-success border-success/30",
    avatar: "EM"
  }
];

export const RecommendedDoctors = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UserIcon className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-semibold">Recommended Specialists</h2>
        </div>
        <Button variant="ghost" className="text-accent hover:text-accent/80">
          View All
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="p-5 border-border/50 bg-gradient-to-br from-card to-secondary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold">
                    {doctor.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{doctor.name}</h3>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  </div>
                </div>
                <Badge variant="outline" className={doctor.badgeColor}>
                  {doctor.badge}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-warning text-warning" />
                  <span className="font-semibold">{doctor.rating}</span>
                  <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{doctor.experience} experience</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-success text-xs">{doctor.availability}</span>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button className="flex-1 bg-primary hover:bg-primary/90 shadow-[var(--glow-primary)] transition-all duration-300">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                  Profile
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
