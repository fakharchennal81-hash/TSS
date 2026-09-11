import { Trophy, Swords, Zap } from 'lucide-react';
import { sportsTeams } from '@/data/content';

export default function Sports() {
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}
