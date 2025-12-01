import { Calendar, Upload, MessageCircle, FileText, Activity, User } from "lucide-react";
import { Card } from "@/components/ui/card";

const actions = [
  { icon: Calendar, label: "Book Appointment", color: "text-info", bg: "bg-info/10" },
  { icon: Upload, label: "Upload Report", color: "text-accent", bg: "bg-accent/10" },
  { icon: MessageCircle, label: "Chat Support", color: "text-success", bg: "bg-success/10" },
  { icon: FileText, label: "Prescriptions", color: "text-warning", bg: "bg-warning/10" }
];

const stats = [
  { icon: User, label: "Consultations", value: "12", subtext: "This year", color: "text-primary" },
  { icon: FileText, label: "Prescriptions", value: "8", subtext: "Active", color: "text-info" },
  { icon: Activity, label: "Reports", value: "24", subtext: "Total", color: "text-warning" },
  { icon: Calendar, label: "Health Score", value: "87%", subtext: "Excellent", color: "text-success" }
];

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6 border-border/50 bg-gradient-to-br from-card to-secondary/20">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.label}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/50 hover:bg-secondary/70 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg ${action.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${action.color}`} />
                </div>
                <span className="text-sm font-medium text-center">{action.label}</span>
              </button>
            );
          })}
        </div>
      </Card>
      
      <Card className="p-6 border-border/50 bg-gradient-to-br from-card to-secondary/20">
        <h3 className="text-lg font-semibold mb-4">Health Statistics</h3>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="p-4 rounded-xl bg-secondary/50 border border-border/30">
                <Icon className={`w-5 h-5 ${stat.color} mb-2`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.subtext}</div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};
