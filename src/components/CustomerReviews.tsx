const CustomerReviews = () => {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-anton mb-4" style={{ color: '#444444' }}>
          What Our Customers Say
        </h2>
        <p className="font-inter text-lg mb-12 max-w-3xl mx-auto" style={{ color: '#444444' }}>
          Real reviews from Tampa Bay homeowners, contractors, and businesses we've helped.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <script 
            defer 
            async 
            src="https://cdn.trustindex.io/loader.js?ad799af54562474f8957f26a85"
            onLoad={() => {}}
          ></script>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;