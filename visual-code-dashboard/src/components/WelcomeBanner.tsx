import { Activity, Calendar, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

export const WelcomeBanner = () => {
  return (
    <Card className="relative overflow-hidden border-0 p-8" style={{ background: 'var(--gradient-hero)' }}>
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
              Welcome Back <span className="animate-pulse">👋</span> <span className="text-accent">Sarah</span>
            </h1>
            <p className="text-foreground/80 text-lg">
              Your AI-powered health companion is here to help. Get personalized doctor recommendations,
              manage your medical history, and stay informed about your wellness journey.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1.5 text-success">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span>AI Assistant Ready</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm border-2 border-accent/30 shadow-[var(--glow-accent)]">
              <Activity className="w-12 h-12 text-accent" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-foreground/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold">87/100</div>
                <div className="text-sm text-foreground/70">Health Score</div>
              </div>
            </div>
          </div>
          
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-foreground/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-info/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-info" />
              </div>
              <div>
                <div className="text-2xl font-bold">5 days</div>
                <div className="text-sm text-foreground/70">Last Checkup</div>
              </div>
            </div>
          </div>
          
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-foreground/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-warning/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm text-foreground/70">Reports Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
