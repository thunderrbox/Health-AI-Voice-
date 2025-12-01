import { DashboardHeader } from "@/components/DashboardHeader";
import { WelcomeBanner } from "@/components/WelcomeBanner";
import { VoiceAssistant } from "@/components/VoiceAssistant";
import { RecommendedDoctors } from "@/components/RecommendedDoctors";
import { MedicalHistory } from "@/components/MedicalHistory";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container px-6 py-8 space-y-8">
        <WelcomeBanner />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <VoiceAssistant />
          </div>
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </div>
        
        <RecommendedDoctors />
        
        <MedicalHistory />
      </main>
    </div>
  );
};

export default Index;
