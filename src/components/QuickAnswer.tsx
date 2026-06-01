// QuickAnswer — short, AI-overview-friendly answer block placed near the
// top of service hub pages. Designed to be extractable by Google AI
// Overviews, Perplexity, and ChatGPT search.
import { Sparkles } from "lucide-react";

interface Props {
  question: string;
  answer: string;
}

const QuickAnswer = ({ question, answer }: Props) => {
  return (
    <section className="py-10 md:py-12 bg-background border-b border-border" aria-label="Quick answer">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-lg md:text-xl font-anton text-foreground leading-snug">
              {question}
            </h2>
          </div>
          <p className="text-foreground/90 leading-relaxed pl-11">{answer}</p>
        </div>
      </div>
    </section>
  );
};

export default QuickAnswer;
