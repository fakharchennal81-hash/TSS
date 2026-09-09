import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Trophy, Swords, Zap } from 'lucide-react';
import { sportsTeams, galleryImages } from '@/data/content';

export default function Sports() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));

  const teamIcons = [Swords, Trophy, Zap, Swords, Trophy, Zap];

  return (
    <section id="sports" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-3">
            Sports & Extra-Curricular
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Life at Science Scope — Sports & Champions
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beyond academics, we believe in the power of sports to build character, teamwork, and
            leadership. Our champion teams have brought home countless trophies and medals.
          </p>
        </div>

        {/* Sports teams */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sportsTeams.map((team, i) => {
            const Icon = teamIcons[i % teamIcons.length];
            return (
              <div
                key={i}
                className="group p-6 bg-gradient-to-br from-navy-50 to-white rounded-2xl border-2 border-navy-100 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy-900 mb-1">{team.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{team.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Photo gallery */}
        <div className="mb-6 text-center">
          <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">Photo Gallery</h3>
          <p className="text-gray-600 text-sm">Celebrating victories, trophies, and unforgettable sports moments</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((image, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover cursor-pointer block w-full text-left"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4">
                <h4 className="text-white font-semibold text-sm">{image.title}</h4>
              </div>
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>

          <div className="max-w-4xl w-full px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightboxIndex].url}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-center text-white font-medium mt-4">{galleryImages[lightboxIndex].title}</p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>
        </div>
      )}
    </section>
  );
}
