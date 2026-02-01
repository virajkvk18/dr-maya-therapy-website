export default function TherapyDetail() {
  const approaches = [
    {
      title: "Mindfulness & Body Work",
      desc: "Focusing on the physiological side of tension to help you feel more regulated in your daily life.",
      img: "/body.png" // Reusing your existing images
    },
    {
      title: "Evidence-Based Tools",
      desc: "Structured sessions using CBT and EMDR to provide practical relief from overthinking and panic.",
      img: "/tools.png"
    }
  ];

  return (
    <section id="therapy-details" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-primary mb-4 italic">Customized For Your Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dr. Maya Reynolds believes therapy works best when it combines practical tools with depth-oriented work tailored to high-achieving individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {approaches.map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="font-serif text-2xl text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}