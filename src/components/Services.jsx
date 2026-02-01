const services = [
  {
    title: "Trauma & EMDR",
    desc: "A carefully paced, body-oriented approach to processing past experiences and finding safety in the present."
  },
  {
    title: "Anxiety & Burnout",
    desc: "Practical tools for high-achieving professionals to quiet overthinking and reclaim emotional energy."
  },
  {
    title: "Relationship Support",
    desc: "Helping couples and individuals build resilient connections through depth-oriented communication."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-serif text-4xl text-center mb-16 text-primary">Specialized Support</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <div key={i} className="group p-8 border border-secondary hover:border-accent transition-all duration-300 rounded-xl">
              <div className="h-1 w-12 bg-accent mb-6 group-hover:w-full transition-all"></div>
              <h3 className="font-serif text-2xl mb-4 text-primary">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}