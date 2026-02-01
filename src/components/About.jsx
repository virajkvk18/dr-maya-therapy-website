export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* Matches your file name 'office1.jpeg' in the public folder */}
          <img 
            src="/maya.png" 
            alt="Dr. Maya's Counseling Space" 
            className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
          />
          {/* Decorative element to match the 'Lilac' template aesthetic */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full -z-10"></div>
        </div>
        
        <div>
          <h2 className="font-serif text-4xl text-primary mb-6 leading-tight">
            A Warm, Grounded Approach to <span className="italic text-accent">Personal Growth</span>
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            I’m a licensed clinical psychologist based in Santa Monica, California. My work is dedicated to helping high-achieving, thoughtful, and self-aware adults who find themselves feeling overwhelmed by anxiety, burnout, or the lingering effects of past trauma.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Many of the people I work with appear "functional" on the outside while quietly struggling with constant worry, tension, or a sense of always bracing for something to go wrong. I integrate evidence-based methods such as **CBT, EMDR, and mindfulness-based practices** to address both the emotional and physiological sides of your experience.
          </p>
          
          <div className="bg-secondary/30 p-6 border-l-4 border-accent rounded-r-xl">
            <p className="italic text-primary font-medium">
              "I believe therapy works best when clients feel respected, understood, and actively involved in the process."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}