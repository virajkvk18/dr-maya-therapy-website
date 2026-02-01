export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative flex justify-center">
          <img 
            src="/maya.png" 
            alt="Dr. Maya's Counseling Space" 
            className="rounded-3xl shadow-lg h-64 w-full md:h-[500px] object-cover"
          />
        </div>
        
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 leading-tight">
            A Warm, Grounded Approach to <span className="italic text-accent">Personal Growth</span>
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
            I’m a licensed clinical psychologist based in Santa Monica. My work is dedicated to helping high-achieving, thoughtful, and self-aware adults who feel overwhelmed by anxiety or burnout.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
            I integrate evidence-based methods such as **CBT, EMDR, and mindfulness-based practices** to address both the emotional and physiological sides of your experience.
          </p>
          
          <div className="bg-secondary/30 p-4 md:p-6 border-l-4 border-accent rounded-r-xl">
            <p className="italic text-primary font-medium text-sm md:text-base">
              "I believe therapy works best when clients feel respected, understood, and actively involved."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}