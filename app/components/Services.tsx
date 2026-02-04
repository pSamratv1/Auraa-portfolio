// components/Services.tsx
export default function Services() {
  const services = [
    "Creative Direction",
    "Cinematography",
    "Post-Production",
    "Color Grading",
  ];

  return (
    <section className="py-40 bg-white text-black">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest border-b border-black pb-2">
              Capabilities
            </span>
            <p className="font-serif text-4xl mt-12 leading-relaxed">
              We specialize in creating visual experiences that resonate. From
              the first frame to the final cut, Auraa brings a cinematic eye to
              every brand story.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            {services.map((s, i) => (
              <div
                key={i}
                className="border-b border-black/10 py-6 flex justify-between items-center group cursor-pointer hover:px-4 transition-all duration-300"
              >
                <span className="font-serif text-2xl italic">0{i + 1}</span>
                <span className="font-sans text-xl uppercase tracking-tighter group-hover:italic">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
