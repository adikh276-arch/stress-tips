import MoodSelector from "@/components/MoodSelector";
import TipCard from "@/components/TipCard";
import { tips } from "@/data/tips";

const Index = () => {
  return (
    <div className="min-h-screen gradient-main">
      <div className="max-w-md mx-auto px-5 py-10 pb-16">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-2">Take a deep breath 🌿</p>
          <h1 className="text-2xl font-bold text-foreground leading-tight">
            Manage Your Stress
          </h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Simple daily habits to help you feel calmer and more in control.
          </p>
        </div>

        {/* Mood */}
        <div className="mb-8">
          <MoodSelector />
        </div>

        {/* Tips */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-4">
            Daily Stress Relief Tips
          </h2>
          <div className="flex flex-col gap-3">
            {tips.map((tip, i) => (
              <TipCard
                key={tip.slug}
                icon={tip.icon}
                iconClass={tip.iconClass}
                title={tip.title}
                description={tip.description}
                slug={tip.slug}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
