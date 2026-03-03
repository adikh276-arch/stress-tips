import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { tips } from "@/data/tips";
import BreathingExercise from "@/components/BreathingExercise";
import { toast } from "sonner";

const TipDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const tip = tips.find((t) => t.slug === slug);

  if (!tip) {
    return (
      <div className="min-h-screen gradient-main flex items-center justify-center">
        <p className="text-muted-foreground">Tip not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-main">
      <div className="max-w-md mx-auto px-5 py-6 pb-16">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground mb-6 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`pastel-icon ${tip.iconClass}`}>{tip.icon}</div>
          <h1 className="text-xl font-bold text-foreground">{tip.title}</h1>
        </div>

        {/* Breathing animation */}
        {tip.hasBreathing && (
          <div className="wellness-card mb-6">
            <BreathingExercise />
          </div>
        )}

        {/* Why It Helps */}
        <div className="wellness-card mb-4">
          <h2 className="text-sm font-semibold text-foreground mb-2">
            Why It Helps
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {tip.whyItHelps}
          </p>
        </div>

        {/* What You Can Do */}
        <div className="wellness-card mb-6">
          <h2 className="text-sm font-semibold text-foreground mb-3">
            What You Can Do
          </h2>
          <ul className="space-y-3">
            {tip.whatYouCanDo.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        {tip.buttonLabel && (
          <button
            onClick={() => toast.success("Reminder set! 🌙")}
            className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-soft transition-all duration-200 active:scale-[0.97]"
          >
            {tip.buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default TipDetail;
