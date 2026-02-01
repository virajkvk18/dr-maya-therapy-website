export default function FAQ() {
  const faqs = [
    {
      q: "Who do you typically work with?",
      a: "I specialize in working with high-achieving adults, creatives, and entrepreneurs who appear 'functional' on the outside but feel internally exhausted or stuck in overthinking."
    },
    {
      q: "What can I expect from a session?",
      a: "Our work is a mix of depth-oriented reflection and practical tools. We integrate CBT, EMDR, and mindfulness to address both your emotional and physiological needs."
    },
    {
      q: "Do you offer remote therapy?",
      a: "Yes. I offer in-person sessions at my Santa Monica sanctuary and secure telehealth sessions for clients located anywhere in California."
    }
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl text-center text-primary mb-12 italic">Common Questions</h2>
        <div className="space-y-8">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-secondary pb-6">
              <h4 className="font-bold text-lg text-primary mb-2 italic">Q: {item.q}</h4>
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}