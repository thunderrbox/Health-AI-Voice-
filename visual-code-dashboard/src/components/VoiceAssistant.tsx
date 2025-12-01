import { Mic, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const VoiceAssistant = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <Card className="p-6 border-border/50 bg-gradient-to-br from-card to-secondary/30">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-accent" />
        <h2 className="text-xl font-semibold">AI Voice Assistant</h2>
      </div>
      
      <div className="flex flex-col items-center justify-center py-8 space-y-6">
        <button
          onClick={() => setIsRecording(!isRecording)}
          className="relative group"
        >
          <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-300 ${
            isRecording ? 'scale-110 shadow-[var(--glow-primary)]' : 'hover:scale-105'
          }`}>
            <Mic className={`w-10 h-10 ${isRecording ? 'animate-pulse' : ''}`} />
          </div>
          {isRecording && (
            <>
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
            </>
          )}
        </button>
        
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">
            {isRecording ? 'Listening...' : 'Click to start recording'}
          </h3>
          <p className="text-muted-foreground text-sm">
            Describe your symptoms or ask for doctor recommendations
          </p>
        </div>
        
        {!isRecording && (
          <div className="w-full space-y-2">
            <div className="p-3 rounded-lg bg-secondary/50 border border-border/30 text-sm text-muted-foreground italic">
              Your voice input will appear here or type manually...
            </div>
            <Button variant="default" className="w-full bg-primary hover:bg-primary/90 shadow-[var(--glow-primary)]">
              <Sparkles className="w-4 h-4 mr-2" />
              Find Suitable Doctors
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
