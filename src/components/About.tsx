import { BookOpen, Users, TrendingUp, ShieldCheck, Target, Eye, Heart } from 'lucide-react';
import { aboutImages } from '@/data/content';

const stats = [
  { value: '1100+', label: 'Students Enrolled' },
  { value: '50+', label: 'Expert Teachers' },
  { value: '97%', label: 'Top Results' },
  { value: '15+', label: 'Years of Excellence' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 bg-navy-50 text-navy-700 text-sm font-semibold rounded-full mb-3">
            About Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Excellence in Education Since Inception
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The Science Scope Higher Secondary School & College, Multan, stands as a beacon of
            quality education, nurturing young minds with dedication, discipline, and a passion
            for learning. Our motto, "A Great Way of Education," reflects our unwavering commitment
            to academic excellence and character building.
          </p>
        </div>

        {/* Image grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg card-hover">
            <img
              src={aboutImages.building}
              alt="Modern school campus building"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="text-white font-semibold text-lg">Our Campus</h3>
              <p className="text-gray-300 text-sm">Modern facilities & green spaces</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg card-hover">
            <img
              src={aboutImages.classroom}
              alt="Students engaged in classroom learning"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="text-white font-semibold text-lg">Quality Learning</h3>
              <p className="text-gray-300 text-sm">Interactive & focused classrooms</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg card-hover">
            <img
              src={aboutImages.graduation}
              alt="Graduates celebrating academic success"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="text-white font-semibold text-lg">Bright Futures</h3>
              <p className="text-gray-300 text-sm">Graduates ready for the world</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-navy-50 rounded-2xl border border-navy-100 card-hover"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-navy-800 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-7 bg-white rounded-2xl border-2 border-navy-100 card-hover">
            <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide quality education that empowers students with knowledge, skills, and
              values needed to succeed in a rapidly changing world.
            </p>
          </div>

          <div className="p-7 bg-white rounded-2xl border-2 border-navy-100 card-hover">
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be the leading educational institution in the region, recognized for academic
              excellence, character development, and innovation.
            </p>
          </div>

          <div className="p-7 bg-white rounded-2xl border-2 border-navy-100 card-hover">
            <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">Our Values</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Integrity, discipline, respect, and a lifelong love for learning guide everything
              we do at The Science Scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
