import { Check, X } from "lucide-react";

const WhatWeTake = () => {
  const itemsWeRemove = [
    "Household junk & clutter",
    "Furniture & mattresses", 
    "Appliances (non-hazardous)",
    "Yard waste & debris",
    "Construction & renovation debris",
    "Electronics (small quantities)",
    "Office & commercial junk"
  ];

  const itemsWeDont = [
    "Hazardous waste & toxic materials",
    "Paints, stains & solvents",
    "Oils, fuels & flammable liquids", 
    "Asbestos or contaminated items",
    "Tires & large auto parts",
    "Batteries & chemicals",
    "Medical waste & sharps",
    "Propane tanks & pressurized containers"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-anton text-foreground mb-4">
            What We Take — and What We Don't
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At Junk in the Truck Co., we make junk removal simple. From household clutter to heavy debris, we'll haul away almost anything — with just a few exceptions for safety and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Items We Remove */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-normal text-green-800">Items We Remove</h3>
            </div>
            
            <ul className="space-y-3">
              {itemsWeRemove.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Items We Cannot Take */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-normal text-red-800">Items We Cannot Take</h3>
            </div>
            
            <ul className="space-y-3">
              {itemsWeDont.map((item, index) => (
                <li key={index} className="flex items-start">
                  <X className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Not sure if we can take your item?{" "}
            <a 
              href="tel:844-858-6546" 
              className="text-primary font-semibold hover:underline"
            >
              Call us at 844-858-6546
            </a>
            {" "}and we'll let you know right away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeTake;