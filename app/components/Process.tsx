// components/Process.tsx
const steps = [
  {
    title: "Upload",
    desc: "Send us your raw footage through our secure portal.",
  },
  {
    title: "Edit",
    desc: "Our world-class editors craft your story in 48 hours.",
  },
  { title: "Review", desc: "Unlimited revisions until the frame is perfect." },
];

export default function Process() {
  return (
    <section className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {steps.map((step, i) => (
          <div key={i} className="relative pt-12 border-t border-white/10">
            <span className="font-serif text-5xl italic text-accent absolute top-[-20px]">
              0{i + 1}
            </span>
            <h3 className="font-serif text-3xl mb-4">{step.title}</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
