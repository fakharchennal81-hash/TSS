import { ArrowRight, Trophy, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background Video (Cloudinary Link Connected) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://res.cloudinary.com/h32sev5y/video/upload/v1790072034/the_school.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 hero-gradient bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-400/20 backdrop-blur border border-gold-400/40 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium">Admissions Open for 2026</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 text-shadow-lg animate-fade-in-up">
            Welcome to The Science Scope
            <span className="block text-gold-400 mt-1">Higher Secondary School & College</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-200 mb-2 text-shadow animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Your journey toward a bright future starts here!
          </p>
          <p className="text-base text-gold-300 font-medium mb-8 text-shadow animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            "A Great Way of Education"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => scrollTo('#admissions')}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-red-600 text-white font-semibold rounded-xl shadow-xl hover:bg-red-700 transition-all hover:scale-105 hover:shadow-2xl"
            >
              Admissions Open 2026 — Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#achievements')}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all hover:scale-105"
            >
              <Trophy className="w-5 h-5 text-gold-400" />
              Explore Achievements
            </button>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 100V40L60 35L120 45L180 30L240 40L300 25L360 35L420 20L480 30L540 15L600 25L660 10L720 20L780 5L840 15L900 0L960 10L1020 25L1080 15L1140 30L1200 20L1260 35L1320 25L1380 40L1440 30V100H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}