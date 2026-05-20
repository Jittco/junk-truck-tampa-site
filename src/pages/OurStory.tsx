import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Heart, Users, Star, MapPin, Phone, Mail, Linkedin } from "lucide-react";
import carlosHeadshot from "@/assets/carlos-headshot.jpg";
import s10Pickup from "@/assets/s10-pickup.jpg";
import { serviceCategories } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Sample services for quick display
const featuredServices = ["Furniture Removal", "Appliance Hauling", "Garage & Attic Cleanouts", "Demolition Debris Removal", "Yard Waste Pickup", "Estate Cleanouts", "Commercial Cleanouts", "Construction Debris"];

// Sample service areas for quick display
const featuredAreas = ["Tampa", "Brandon", "Riverview", "Gibsonton", "South Tampa", "St. Petersburg", "Clearwater", "Wesley Chapel"];
const faqData = [{
  question: "What items do you take?",
  answer: "We remove almost everything including furniture, appliances, electronics, yard waste, construction debris, and general household items. We cannot remove hazardous materials like paint, chemicals, or asbestos."
}, {
  question: "Do you recycle or donate items?",
  answer: "Yes! We prioritize donation and recycling whenever possible. Items in good condition go to local charities, and we ensure eco-friendly disposal of everything else."
}, {
  question: "How much does junk removal cost?",
  answer: "Our pricing is based on volume and provided upfront with no hidden fees. We offer free estimates and competitive rates throughout the Tampa Bay area."
}];
const OurStory = () => {
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Story | Faith, Family & Service – Junk in the Truck Co.</title>
        <meta name="description" content="Meet the family behind Junk in the Truck Co. — a Tampa Bay junk removal company built on faith, hard work, and serving our community with integrity." />
        <link rel="canonical" href="https://junkinthetruckco.com/our-story" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://junkinthetruckco.com/our-story" />
        <meta property="og:title" content="Our Story – Junk in the Truck Co." />
        <meta property="og:description" content="The family-owned Tampa Bay junk removal team built on faith, hard work, and community service." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Junk in the Truck Co",
          "url": "https://junkinthetruckco.com/",
          "telephone": "+1-844-858-6546",
          "areaServed": "Tampa Bay, FL",
          "sameAs": ["https://junkinthetruckco.com/"]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        })}</script>
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-anton mb-6 text-foreground">
            More Than Junk Removal —<br />
            <span className="text-primary">We're Here to Serve</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Built on faith, family, and hard work. We believe in serving our Tampa Bay community 
            with integrity, excellence, and a heart for helping others reclaim their space.
          </p>
          <Button size="lg" variant="cta" asChild>
            <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae">
              Book Service Today
            </a>
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It all started in 2019 when our founder Carlos Diaz was working at Barnes & Noble 
                  off Kennedy and Dale Mabry. What began as a simple side hustle — picking up furniture 
                  in a Chevy S10 with a trailer and reselling on Facebook Marketplace — would grow into 
                  something much bigger.
                </p>
                <p>
                  Friends and family kept asking about "that junk in the truck," and the phrase stuck. 
                  As word spread through Facebook advertising, more customers began reaching out for 
                  junk removal services. What started as one truck soon expanded into multiple trucks 
                  and a dedicated team.
                </p>
                <p>
                  But 2018 marked a turning point. When Carlos encountered God, everything changed. 
                  This divine encounter inspired our bold mission: <strong>"Serving Christ through Junk Removal."</strong>
                </p>
                <p>
                  Today, we approach every job with a heart posture of service — working with integrity, 
                  praying for our customers, striving for excellence, and honoring the Lord through our work. 
                  We're not just removing junk; we're serving our community and making a difference, one truck at a time.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden">
                <img src={s10Pickup} alt="The original Chevy S10 pickup truck with trailer that started Junk in the Truck Co." className="w-full h-64 object-cover" />
              </div>
              <Card className="p-6 border-l-4 border-l-primary">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-primary" />
                  <h3 className="text-foreground font-medium">Our Heart</h3>
                </div>
                <p className="text-muted-foreground">
                  Serving with integrity, praying for people, and honoring God through excellent work.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-primary">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-foreground font-medium">Our Values</h3>
                </div>
                <p className="text-muted-foreground">
                  Faith-centered, family-oriented, and committed to serving our Tampa Bay community.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-primary">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-6 h-6 text-primary" />
                  <h3 className="text-foreground font-medium">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  Boldly serving Christ through junk removal — making a difference one truck at a time.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Carlos Diaz Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-8 lg:p-12 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <img src={carlosHeadshot} alt="Carlos Diaz, Founder of Junk in the Truck Co." className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-anton mb-4 text-foreground">Carlos Diaz</h3>
              <p className="text-lg font-semibold text-primary mb-2">Founder & Owner</p>
              <p className="text-muted-foreground mb-4">Tampa Native • Plant High School Graduate</p>
              <a href="https://www.linkedin.com/in/carlos-diaz-abba0a180/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">Connect with me on LinkedIn</span>
              </a>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
                Meet Our Founder
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Carlos Diaz is a Tampa native and Plant High School graduate who has deep roots 
                  in the community he serves. As a man of God, Carlos finds joy in serving people, 
                  his church, and the greater Tampa Bay area.
                </p>
                <p>
                  Family-centered and faith-led, Carlos built Junk in the Truck Co. on the belief 
                  that success isn't just measured in jobs completed, but in lives impacted. Every 
                  interaction is an opportunity to serve with excellence and show God's love in action.
                </p>
                <p>
                  When Carlos isn't running the business, you can find him spending time with family, 
                  serving at church, or finding new ways to give back to the Tampa Bay community that 
                  has given him so much.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
              Learn More About Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From single-item pickups to complete property cleanouts, we handle it all with 
              the same commitment to excellence and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map((service, index) => <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-2">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-medium text-foreground">{service}</h3>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
              Service Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proudly serving Tampa Bay and surrounding communities with reliable, 
              professional junk removal services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {featuredAreas.map((area, index) => <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-2">
                  <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-foreground">{area}</h3>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">...and more!</p>
            <Button size="lg" variant="outline" asChild>
              <a href="/service-areas">Explore Service Areas</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
              FAQ: Junk Removal Basics
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our junk removal services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4 mb-8">
            {faqData.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 font-normal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>

          <div className="text-center">
            <Button variant="outline" asChild>
              <a href="/#faq">View Full FAQ</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to reclaim your space? Get in touch with us today for fast, 
              reliable junk removal service throughout Tampa Bay.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your junk removal needs..." rows={4} />
                </div>
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Call Us Now</p>
                        <a href="tel:844-858-6546" className="text-primary hover:underline text-lg font-semibold">
                          844-858-6546
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email Us</p>
                        <p className="text-muted-foreground">Available 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Service Area</p>
                        <p className="text-muted-foreground">Tampa Bay & Surrounding Areas</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-primary/10 border-primary/20">
                <CardContent className="p-0 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Book Online in 60 Seconds
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get your junk removed today with our easy online booking system.
                  </p>
                  <Button size="lg" variant="cta" className="w-full" asChild>
                    <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae">
                      Book Online Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default OurStory;