export default function Services() {
  const services = [
    {
      title: "Trauma & PTSD",
      description: "Specialized care using EMDR and somatic approaches to help you process past experiences and feel safe in the present.",
      icon: "🌿"
    },
    {
      title: "Anxiety & Panic",
      description: "Practical CBT tools to manage overthinking, physical tension, and the high-pressure demands of your professional life.",
      icon: "⚓"
    },
    {
      title: "Burnout Recovery",
      description: "Helping high-achievers transition from exhaustion to grounded resilience by setting boundaries and restoring energy.",
      icon: "🔋"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Areas of Expertise</h2>
          <div className="w-20 h-1 bg-accent mx-auto opacity-50"></div>
        </div>

        {/* This grid handles the mobile stacking (1 column) and desktop layout (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/50 hover:shadow-md transition text-center md:text-left">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="font-serif text-xl md:text-2xl text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}