import { useState } from 'react';
import { Trophy, Medal, Star, Crown, Award, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { topAchievers, rollOfHonor, achieverGalleryImages } from '@/data/content';

export default function Achievements() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + achieverGalleryImages.length) % achieverGalleryImages.length
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % achieverGalleryImages.length
    );

  return (
    <section id="achievements" className="py-20 bg-navy-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-navy-800/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 bg-gold-400/10 text-gold-400 text-sm font-semibold rounded-full mb-3 border border-gold-400/30">
            2026 Highlights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Outstanding Academic Results
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            We celebrate the remarkable achievements of our students who have made The Science Scope
            proud with their exceptional academic performance.
          </p>
        </div>

        {/* Top achievers cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
          {topAchievers.map((achiever, i) => (
            <div
              key={i}
              className="group relative p-5 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl border border-navy-700 card-hover text-center"
            >
              {/* Rank badge */}
              {i < 3 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                      i === 0
                        ? 'bg-gold-400 text-navy-950'
                        : i === 1
                        ? 'bg-gray-300 text-navy-950'
                        : 'bg-amber-600 text-white'
                    }`}
                  >
                    {i === 0 ? <Crown className="w-3 h-3" /> : <Medal className="w-3 h-3" />}
                    Rank {i + 1}
                  </div>
                </div>
              )}

              <div className="mt-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-1">{achiever.name}</h3>
                <p className="text-gold-400 font-semibold text-sm">{achiever.marks}</p>
                {achiever.percentage !== '—' && (
                  <p className="text-gray-400 text-xs mt-0.5">{achiever.percentage}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Roll of Honor table */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-navy-800 to-navy-950 px-8 py-5 flex items-center gap-3">
            <Award className="w-6 h-6 text-gold-400" />
            <h3 className="font-serif text-xl font-bold text-white">High Achievers List — Roll of Honor</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-50 border-b-2 border-navy-100">
                  <th className="px-6 py-4 text-left text-xs font-bold text-navy-700 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-navy-700 uppercase tracking-wider">Roll No.</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-navy-700 uppercase tracking-wider">Student Name</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-navy-700 uppercase tracking-wider hidden sm:table-cell">Grade</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-navy-700 uppercase tracking-wider">Marks</th>
                </tr>
              </thead>
              <tbody>
                {rollOfHonor.map((student, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 hover:bg-navy-50/50 transition-colors ${
                      i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                          i === 0
                            ? 'bg-gold-100 text-gold-700'
                            : i === 1
                            ? 'bg-gray-200 text-gray-700'
                            : i === 2
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-navy-100 text-navy-700'
                        }`}
                      >
                        {i < 3 && <Trophy className="w-3 h-3" />}
                        {student.position}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{student.rollNo}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-navy-900">{student.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 hidden sm:table-cell">{student.grade}</td>
                    <td className="px-6 py-4 text-sm font-bold text-red-600">{student.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Achievers Photo Gallery */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-gold-400/10 text-gold-400 text-sm font-semibold rounded-full mb-3 border border-gold-400/30">
            <Camera className="w-4 h-4" />
            Photo Gallery
          </div>
          <h3 className="font-serif text-2xl font-bold text-white mb-2">Top Achievers in Action</h3>
          <p className="text-gray-400 text-sm">Moments of pride, dedication, and celebration from our outstanding students</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achieverGalleryImages.map((image, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover cursor-pointer block w-full text-left"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
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
              src={achieverGalleryImages[lightboxIndex].url}
              alt={achieverGalleryImages[lightboxIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-center text-white font-medium mt-4">{achieverGalleryImages[lightboxIndex].title}</p>
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
