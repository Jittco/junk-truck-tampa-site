import { useEffect, useRef } from 'react';

const CustomerReviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scriptSrc = 'https://cdn.trustindex.io/loader.js?70ae7c528dd947220a166ea296a';

    // Prevent duplicate loads (React StrictMode / remounts)
    if (container.querySelector(`script[src="${scriptSrc}"]`)) return;

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.defer = true;
    script.async = true;

    script.onload = () => {
      console.debug('[TrustIndex] loader loaded');
    };

    script.onerror = () => {
      console.error('[TrustIndex] loader failed to load');
    };

    // Small delay improves reliability when the section is near the top of the page
    const timer = window.setTimeout(() => {
      container.appendChild(script);
    }, 250);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-anton mb-4" style={{ color: '#444444' }}>
          What Our Customers Say
        </h2>
        <p className="font-inter text-lg mb-12 max-w-3xl mx-auto" style={{ color: '#444444' }}>
          Real reviews from Tampa Bay homeowners, contractors, and businesses we've helped.
        </p>
        
        <div ref={containerRef} className="max-w-4xl mx-auto" id="trustindex-widget">
          {/* TrustIndex widget will be loaded here */}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;