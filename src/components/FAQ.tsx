import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "How soon can you come out?",
  answer: "We offer same-day and next-day service whenever possible."
}, {
  question: "Do I need to move items outside first?",
  answer: "No — our crew handles all lifting, loading, and hauling from wherever the items are located."
}, {
  question: "What do you do with the junk?",
  answer: "We recycle and donate whenever possible, and responsibly dispose of the rest."
}, {
  question: "How do you price jobs?",
  answer: "Pricing is based on load size, type of material, and disposal fees. You'll always get an upfront quote with no hidden costs."
}, {
  question: "Are you licensed and insured?",
  answer: "Yes — Junk in the Truck Co is fully licensed and insured for your peace of mind."
}];
const FAQ = () => {
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-anton mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 font-normal">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground pb-6 font-inter">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>)}
        </Accordion>
      </div>
    </section>;
};
export default FAQ;