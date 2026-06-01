import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homepageFaqs } from "@/data/homepageFaqs";

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-anton mb-6 text-foreground">
            Tampa Junk Removal FAQs
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {homepageFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 font-normal">
                <h3 className="text-lg font-semibold m-0">{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="text-foreground pb-6 font-inter">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
