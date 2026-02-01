export default function Office() {
  return (
    <section id="office" className="py-20 px-8 bg-secondary">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-4xl text-primary mb-6">A Calm Space for Healing</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Located in the heart of Santa Monica, my office is a quiet, private space designed to feel calm and grounding. With natural light and a comfortable, uncluttered environment, it is a sanctuary where you can feel at ease from the moment you arrive.
          </p>
          <ul className="space-y-4 text-primary font-medium">
            <li className="flex items-center">
              <span className="mr-2">📍</span> 123th Street 45 W, Santa Monica, CA
            </li>
            <li className="flex items-center">
              <span className="mr-2">☀️</span> Sun-filled, private consultation rooms
            </li>
            <li className="flex items-center">
              <span className="mr-2">💻</span> Hybrid and In-person availability
            </li>
          </ul>
        </div>
        
        <div className="relative">
          {/* Using office2.jpeg from your public folder */}
          <img 
            src="/office2.jpeg" 
            alt="Dr. Maya's Santa Monica Office" 
            className="rounded-br-[100px] rounded-tl-[100px] shadow-2xl h-[500px] w-full object-cover"
          />
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-accent rounded-tl-[50px]"></div>
        </div>
      </div>
    </section>
  );
}