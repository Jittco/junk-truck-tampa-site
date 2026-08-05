import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqCategories = [
  {
    title: "Pricing & Estimates",
    questions: [
      {
        question: "How much does junk removal cost in Tampa Bay?",
        answer: "Pricing depends on how much space your items take up in our truck. We provide upfront, volume-based pricing with no hidden fees. The best part? Estimates are always free, and you only pay for the space you use."
      },
      {
        question: "Do you offer free, no-obligation estimates?",
        answer: "Yes! We're happy to come onsite, look at what you need removed, and give you a free, no-obligation estimate before starting the job."
      },
      {
        question: "Are there any hidden fees?",
        answer: "Never. All labor, taxes, and disposal fees are included in our upfront quote so you know exactly what to expect."
      }
    ]
  },
  {
    title: "Scheduling & Service",
    questions: [
      {
        question: "How quickly can I book a junk pickup?",
        answer: "Most jobs can be scheduled for the same day or next day, depending on availability. You can book online 24/7 or call us directly."
      },
      {
        question: "Do you offer weekend or evening service?",
        answer: "Yes, we provide flexible scheduling to fit your busy lifestyle, including select weekends."
      },
      {
        question: "What should I expect on junk removal day?",
        answer: "Our crew will call you when they're on the way, provide a firm quote after seeing the items in person, and then handle all the heavy lifting and cleanup once approved."
      }
    ]
  },
  {
    title: "What We Take (and Don't Take)",
    questions: [
      {
        question: "Do you remove single items or small loads?",
        answer: "Absolutely. We can pick up single items like couches, mattresses, appliances, or just a few bags of junk."
      },
      {
        question: "Can you take heavy furniture, appliances, or construction debris?",
        answer: "Yes, our team is trained and equipped to handle heavy items, furniture, appliances, and even light demolition debris."
      },
      {
        question: "Are there items you can't haul away?",
        answer: "For safety and legal reasons, we cannot take hazardous waste such as chemicals, paint, propane tanks, or asbestos."
      }
    ]
  },
  {
    title: "Donation & Recycling",
    questions: [
      {
        question: "Do you offer donation pickups?",
        answer: "Yes, we offer both free and fee-based donation pickup services. If your items can be donated, we'll drop them off at a local donation center."
      },
      {
        question: "What if the donation center won't accept my items?",
        answer: "No problem. Our fee-based donation service includes disposal if your items are declined — so nothing is left behind."
      },
      {
        question: "Can I get a donation receipt?",
        answer: "Absolutely. Upon request, we'll provide a donation receipt from the organization where your items were delivered."
      }
    ]
  },
  {
    title: "Service Areas",
    questions: [
      {
        question: "Do you provide junk removal in my area?",
        answer: "We serve all of Hillsborough and Pinellas Counties, including Tampa, Brandon, Riverview, Clearwater, St. Petersburg, Apollo Beach, Gibsonton, and more."
      },
      {
        question: "Which counties do you serve?",
        answer: "Our service area covers Hillsborough County and Pinellas County."
      }
    ]
  },
  {
    title: "General & Company Info",
    questions: [
      {
        question: "Are you licensed and insured?",
        answer: "Yes, Junk in the Truck Co. is fully licensed and insured for your peace of mind."
      },
      {
        question: "Do you provide upfront pricing?",
        answer: "Yes. We're committed to transparency — you'll always know the final price before we begin."
      },
      {
        question: "How do I book an appointment?",
        answer: "You can book online anytime or call us at 813-536-6298."
      },
      {
        question: "Why should I choose Junk in the Truck Co. over a national brand?",
        answer: "As a locally owned and faith-driven company, we take pride in serving our community with integrity, personalized service, and fair prices — something you don't always get from large national chains."
      }
    ]
  }
];

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>Junk Removal FAQs – Junk in the Truck Co.</title>
        <meta 
          name="description" 
          content="Answers to common Tampa Bay junk removal questions — pricing, scheduling, what we take, donations, and our Hillsborough & Pinellas service areas." 
        />
        <meta name="keywords" content="junk removal FAQ, Tampa Bay junk removal questions, pricing, scheduling, donations, service areas" />
        <link rel="canonical" href="https://www.junkinthetruckco.com/faq" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Junk Removal FAQs – Junk in the Truck Co." />
        <meta property="og:description" content="Answers to common Tampa Bay junk removal questions — pricing, scheduling, what we take, donations, and service areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.junkinthetruckco.com/faq" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does junk removal cost in Tampa Bay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pricing is volume-based and depends on how much space your items take in our truck. We provide upfront quotes with no hidden fees and free, no-obligation estimates."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer free, no-obligation estimates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We can visit onsite, review your items, and provide a free, no-obligation estimate before any work begins."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any hidden fees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Our upfront quotes include labor, taxes, and disposal so there are no surprises."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can I book a junk pickup?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most appointments can be scheduled for the same day or next day, depending on availability. You can book online 24/7 or call us."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work on Sundays?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. We do not operate on Sundays. We're available Monday through Saturday with flexible scheduling, including select evenings."
                }
              },
              {
                "@type": "Question",
                "name": "What should I expect on junk removal day?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our crew will call when they're on the way, confirm a firm price after seeing the items in person, then handle all lifting, loading, and cleanup once you approve."
                }
              },
              {
                "@type": "Question",
                "name": "Do you remove single items or small loads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We pick up small loads and single items like couches, mattresses, appliances, or just a few bags of junk."
                }
              },
              {
                "@type": "Question",
                "name": "Can you take heavy furniture, appliances, or construction debris?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our team is trained and equipped to remove heavy furniture, appliances, and light demolition or construction debris."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any items you can't haul away?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For safety and legal reasons we cannot take hazardous waste such as chemicals, paint, propane tanks, or asbestos."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer donation pickups?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer donation pickups, including a fee-based service for time-limited customers or when charities can't pick up. If items are accepted, we can request a donation receipt."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if the donation center won't accept my items?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With our fee-based donation pickup, if a charity declines your items, responsible disposal is included so nothing is left behind."
                }
              },
              {
                "@type": "Question",
                "name": "Can I get a donation receipt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Upon request we can provide a donation receipt from the organization that accepts your items."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide junk removal in my area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve Hillsborough and Pinellas Counties, including Tampa, Brandon, Riverview, Clearwater, St. Petersburg, Apollo Beach, Gibsonton, and more."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I find you on Google Maps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "View our reviews, service info, and directions on our Google Business Profile: https://g.page/r/Ca8e1x8VZL6vEB0"
                }
              },
              {
                "@type": "Question",
                "name": "Are you licensed and insured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Junk in the Truck Co. is fully licensed and insured for your peace of mind."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide upfront pricing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We provide transparent, upfront pricing before any work begins."
                }
              },
              {
                "@type": "Question",
                "name": "How do I book an appointment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Book online at https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae or call 844-858-6546."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Junk in the Truck Co. over a national brand?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We're a local, faith-driven team focused on integrity, personalized service, and fair pricing—backed by great reviews from Tampa Bay customers."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I learn more about your company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Read our story here: https://www.junkinthetruckco.com/our-story"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs items={[
        { name: "Home", url: "/" },
        { name: "FAQ", url: "/faq/" },
      ]} />

      <main className="min-h-screen bg-background">
        <div className="pt-4">
          {/* Header Section */}
          <section className="py-16 md:py-20 trust-accent">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-anton mb-6 text-foreground">
                  Junk Removal FAQs – Junk in the Truck Co.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Have questions about junk removal in Tampa Bay? You're not alone. We've collected the most common questions from our customers across Hillsborough and Pinellas counties to make booking easy and stress-free. From pricing and scheduling to donations and disposal, here's everything you need to know.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="pb-16 md:pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="space-y-8">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-card rounded-lg border shadow-sm p-6">
                    <h2 className="text-2xl font-anton mb-6 text-foreground border-b border-border pb-3">
                      {category.title}
                    </h2>
                    
                    <Accordion type="multiple" className="w-full">
                      {category.questions.map((faq, questionIndex) => (
                        <AccordionItem 
                          key={questionIndex} 
                          value={`category-${categoryIndex}-question-${questionIndex}`}
                          className="border-border"
                        >
                          <AccordionTrigger className="text-left text-foreground hover:no-underline py-4 font-medium text-base">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call-to-Action Footer */}
          <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl md:text-3xl font-anton mb-6 text-foreground">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Call us at 813-536-6298 or book online today for a free, no-obligation estimate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('tel:813-536-6298', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('https://book.junkinthetruck.com', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FAQPage;