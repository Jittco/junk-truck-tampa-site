const TrustStrip = () => {
  const trustItems = [
    { icon: "⭐", text: "5-Star Rated by Local Customers" },
    { icon: "⏱", text: "Same-Day / Next-Day Service Available" },
    { icon: "🛡", text: "Licensed & Insured" },
    { icon: "🏠", text: "Locally Owned & Operated" },
  ];

  return (
    <section className="bg-secondary py-4 md:py-6 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 text-secondary-foreground font-inter text-sm md:text-base whitespace-nowrap"
            >
              <span className="text-lg md:text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
