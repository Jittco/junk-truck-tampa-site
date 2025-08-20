import { Clock, Truck, Recycle } from "lucide-react";
const shortFaqs = [{
  icon: Clock,
  question: "How fast can you get here?",
  answer: "Same-day and next-day service available."
}, {
  icon: Truck,
  question: "Do I need to move stuff outside first?",
  answer: "No, we handle all the lifting and loading."
}, {
  icon: Recycle,
  question: "What happens to the junk?",
  answer: "We donate, recycle, and responsibly dispose."
}];
const QuickFAQ = () => {
  return <section className="py-16 md:py-20 bg-[z#] bg-[#222222]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-anton mb-6 text-slate-50">
            Top Questions We Hear
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {shortFaqs.map((faq, index) => <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <faq.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-normal text-slate-50">
                {faq.question}
              </h3>
              <p className="font-inter leading-relaxed text-slate-50">
                {faq.answer}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default QuickFAQ;