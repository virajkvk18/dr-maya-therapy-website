export default function Hero() {
  const scrollToDetail = () => {
    const element = document.getElementById('therapy-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-10 md:px-8 md:py-16 max-w-7xl mx-auto">
      {/* Mobile: Image comes first but is smaller */}
      <div className="order-1 md:order-2 flex justify-center">
        <img 
          src="/hero.png" 
          alt="Dr. Maya Reynolds" 
          className="w-48 h-48 md:w-full md:h-[500px] object-cover rounded-full md:rounded-t-[200px] md:rounded-b-lg shadow-xl"
        />
      </div>

      {/* Mobile: Text is centered and prominent */}
      <div className="order-2 md:order-1 text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-6xl text-primary leading-tight mb-6">
          Find Your <span className="italic">Calm</span> in the Midst of High Pressure.
        </h1>
        <p className="text-md md:text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
          Evidence-based therapy for anxiety, trauma, and burnout in Santa Monica. Helping high-achievers move from exhaustion to grounded resilience.
        </p>
        <button 
          onClick={scrollToDetail}
          className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition font-semibold"
        >
          LEARN MORE
        </button>
      </div>
    </section>
  );
}