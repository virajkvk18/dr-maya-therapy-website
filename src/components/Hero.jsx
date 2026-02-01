export default function Hero() {
  const scrollToDetail = () => {
    document.getElementById('therapy-details').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="grid md:grid-cols-2 gap-10 items-center px-8 py-16 max-w-7xl mx-auto">
      <div className="order-2 md:order-1">
        <h1 className="font-serif text-5xl md:text-6xl text-primary leading-tight mb-6">
          Find Your <span className="italic">Calm</span> in the Midst of High Pressure.
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Evidence-based therapy for anxiety, trauma, and burnout in Santa Monica. Helping high-achievers move from exhaustion to grounded resilience.
        </p>
        <div className="flex space-x-4">
          {/* Updated Button with onClick */}
          <button 
            onClick={scrollToDetail}
            className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition cursor-pointer font-semibold"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img 
          src="/hero.png" 
          alt="Dr. Maya Reynolds" 
          className="w-full h-[500px] object-cover rounded-t-[200px] rounded-b-lg shadow-2xl"
        />
      </div>
    </section>
  );
}