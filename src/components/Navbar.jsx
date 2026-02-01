export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-secondary/80 backdrop-blur-md sticky top-0 z-50">
      <div className="font-serif text-2xl tracking-tighter text-primary font-bold">
        DR. MAYA REYNOLDS
      </div>
      <div className="hidden md:flex space-x-8 items-center text-sm font-semibold tracking-wide">
        <a href="#services" className="hover:text-accent transition">SERVICES</a>
        <a href="#about" className="hover:text-accent transition">ABOUT</a>
        <a href="#office" className="hover:text-accent transition">OFFICE</a>
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition duration-300">
          BOOK A SESSION
        </button>
      </div>
    </nav>
  );
}