import { MapPin, Phone, Mail, GraduationCap, Facebook, Instagram, Youtube, ArrowRight, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Online Admission Form', href: '#admissions' },
  { label: 'Academic Results', href: '#achievements' },
  { label: 'Admission Info', href: '#admissions' },
  { label: 'Sports & Campus Life', href: '#sports' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center ring-2 ring-gold-400">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base">The Science Scope</h3>
                <p className="text-xs text-gray-400">HSS & College, Multan</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              "A Great Way of Education" — Nurturing young minds with quality education, discipline,
              and character building for a brighter tomorrow.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-navy-800 hover:bg-blue-600 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-navy-800 hover:bg-pink-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-navy-800 hover:bg-red-600 flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-gold-400">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  The Science Scope HSS & College,<br />Multan Campus, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href="tel:0312-4950133" className="text-gray-400 hover:text-white transition-colors">
                  0312-4950133
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-400">info@sciencescope.edu.pk</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Mon – Sat: 8:00 AM – 2:00 PM<br />Sunday: Closed<br />.
                </span>
              </li>
            </ul>
          </div>

          {/* Director info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-gold-400">Director</h4>
            <div className="p-5 bg-navy-900 rounded-2xl border border-navy-800">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-3 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-serif font-bold text-white">Mudassir Raza Khan</h5>
              <p className="text-xs text-gray-400 mb-2">Director, The Science Scope</p>
              <a
                href="tel:0312-4950133"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                0312-4950133
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} The Science Scope Higher Secondary School & College, Multan. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            <span className="text-gold-400 font-medium">"A Great Way of Education"</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
