import { Phone, Mail, Quote } from 'lucide-react';

const directorImage = 'https://i.ibb.co/1fghLm0F/Chat-GPT-Image-Sep-11-2026-03-01-06-PM.png';

export default function Director() {
  return (
    <section id="director" className="py-20 bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 bg-gold-50 text-gold-700 text-sm font-semibold rounded-full mb-3">
            Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Message from the Director
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Director photo */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-gold-300 to-gold-500 rounded-3xl blur-lg opacity-30" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gold-400/30">
                <img
                  src={directorImage}
                  alt="Mudassir Raza Khan, Director of The Science Scope"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border border-gray-100">
                <span className="text-sm font-serif font-bold text-navy-900">Mudassir Raza Khan</span>
              </div>
            </div>
          </div>

          {/* Director message */}
          <div className="lg:col-span-3">
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <Quote className="w-10 h-10 text-gold-300 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-4">
                At The Science Scope, we believe that every child holds the potential to achieve
                greatness. Our mission is to provide an environment where academic excellence meets
                character building, where discipline is paired with creativity, and where every
                student is empowered to dream big and work hard to turn those dreams into reality.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are committed to nurturing not just brilliant students, but responsible citizens
                who will lead with integrity and purpose. Our dedicated faculty and rigorous
                curriculum ensure that your child receives the finest education possible.
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-900">Mudassir Raza Khan</h3>
                  <p className="text-sm text-gray-500">Director, The Science Scope HSS & College</p>
                </div>
                <div className="ml-auto flex gap-3">
                  <a
                    href="tel:0312-4950133"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    0312-4950133
                  </a>
                  <a
                    href="mailto:info@sciencescope.edu.pk"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800 hover:bg-navy-900 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
