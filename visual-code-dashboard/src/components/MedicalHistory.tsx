import { FileText, Activity, Pill, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const historyItems = [
  {
    id: 1,
    title: "Hypertension Diagnosis",
    subtitle: "Primary Condition",
    date: "Mar 15, 2024",
    doctor: "Dr. Sarah Chen",
    status: "In Progress",
    statusColor: "bg-warning/20 text-warning border-warning/30",
    icon: Activity,
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    details: [
      { label: "Diagnosed", value: "Mar 15, 2024" },
      { label: "Specialist", value: "Dr. Sarah Chen" },
      { label: "Status", value: "Monitoring" }
    ]
  },
  {
    id: 2,
    title: "Blood Test Results",
    subtitle: "Lab Report",
    date: "Mar 20, 2024",
    doctor: "Central Diagnostics",
    status: "Completed",
    statusColor: "bg-success/20 text-success border-success/30",
    icon: FileText,
    iconBg: "bg-info/20",
    iconColor: "text-info",
    details: [
      { label: "Completed", value: "Mar 20, 2024" },
      { label: "Lab", value: "Central Diagnostics" },
      { label: "Status", value: "Normal" }
    ]
  },
  {
    id: 3,
    title: "Active Medications",
    subtitle: "Prescription",
    date: "Mar 15, 2024",
    doctor: "Dr. Sarah Chen",
    status: "Ongoing",
    statusColor: "bg-info/20 text-info border-info/30",
    icon: Pill,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    details: [
      { label: "Prescribed", value: "Mar 15, 2024" },
      { label: "Doctor", value: "Dr. Sarah Chen" },
      { label: "Next Refill", value: "In 8 days" }
    ]
  },
  {
    id: 4,
    title: "Follow-up Checkup",
    subtitle: "Appointment",
    date: "Apr 15, 2024",
    doctor: "Dr. Sarah Chen",
    status: "Scheduled",
    statusColor: "bg-accent/20 text-accent border-accent/30",
    icon: Calendar,
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-400",
    details: [
      { label: "Date", value: "Apr 15, 2024" },
      { label: "Time", value: "2:00 PM - 3:00 PM" },
      { label: "Mode", value: "Video Consultation" }
    ]
  }
];

export const MedicalHistory = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <FileText className="w-5 h-5 text-accent" />
        <h2 className="text-xl font-semibold">Medical History</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {historyItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} className="p-5 border-border/50 bg-gradient-to-br from-card to-secondary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-3">
                  <div className={`w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
                <Badge variant="outline" className={item.statusColor}>
                  {item.status}
                </Badge>
              </div>
              
              <div className="space-y-2">
                {item.details.map((detail, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{detail.label}:</span>
                    <span className="font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-4 text-sm text-accent hover:text-accent/80 flex items-center gap-1 group-hover:gap-2 transition-all">
                View Details →
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
