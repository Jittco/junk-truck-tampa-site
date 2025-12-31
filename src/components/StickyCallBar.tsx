import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const StickyCallBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 280;
      setIsVisible(shouldShow);
    };

    const observeForm = () => {
      const contactSection = document.getElementById("contact");
      if (!contactSection) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsFormVisible(entry.isIntersecting);
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(contactSection);
      return () => observer.disconnect();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const cleanup = observeForm();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanup?.();
    };
  }, []);

  const shouldDisplay = isVisible && !isFormVisible;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 hidden lg:block transition-all duration-300 ease-out ${
        shouldDisplay
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-background/98 backdrop-blur-md border-t border-border/50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Messaging */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">
                Junk That's Got to Go?
              </span>
              <span className="text-muted-foreground text-sm">
                We'll Handle It Today
              </span>
            </div>

            {/* Right - Action */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground hidden xl:block">
                844-858-6546 · Mon–Sat: 8am–6pm
              </span>
              <a
                href="tel:8448586546"
                className="inline-flex items-center gap-2 bg-cta hover:bg-cta/90 text-cta-foreground font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCallBar;
