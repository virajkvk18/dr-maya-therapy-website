export default function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-secondary/20 pb-12">
        {/* Practice Info */}
        <div>
          <h3 className="font-serif text-2xl mb-4 tracking-tighter uppercase">Dr. Maya Reynolds, PsyD</h3>
          <p className="text-sm leading-relaxed opacity-80 max-w-xs">
            A collaborative and grounded therapy practice helping high-achieving adults find resilience through evidence-based care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Practice</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#about" className="hover:text-accent transition">About Maya</a></li>
            <li><a href="#services" className="hover:text-accent transition">Specialties</a></li>
            <li><a href="#office" className="hover:text-accent transition">Santa Monica Office</a></li>
            <li><a href="#" className="hover:text-accent transition">Client Portal</a></li>
          </ul>
        </div>

        {/* Location & Contact */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Location</h4>
          <address className="not-italic text-sm opacity-80 space-y-2">
            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>
            <p className="pt-2 font-semibold">In-person & Telehealth sessions available</p>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-50">
        <p>© 2026 Dr. Maya Reynolds, PsyD. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-accent">Privacy Policy</a>
          <a href="#" className="hover:text-accent">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}