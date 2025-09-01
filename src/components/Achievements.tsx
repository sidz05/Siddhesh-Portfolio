import React from 'react';
import { Award, BookOpen, Code } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 'research',
      title: 'International Conference Research Presentation',
      description: 'Presented research at the International Conference ICTIS 2025 in Bangkok, Thailand, on "AI-Driven Traffic Forecasting and Route Optimization System for Enhanced Navigation and Emergency Response". The paper was accepted for publication in the Springer LNNS series.',
      icon: <BookOpen className="text-teal-400" size={24} />,
    },
    {
      id: 'codechef',
      title: '4-Star Rating on CodeChef',
      description: 'Achieved a CodeChef rating of 1867 (4-Star) in Division 2, demonstrating advanced skills in data structures, algorithms, and problem-solving.',
      icon: <Code className="text-teal-400" size={24} />,
    },
    {
      id: 'competitive',
      title: 'Competitive Programming Achievements',
      description: 'Secured a global rank of 4337 and a country rank of 3335 in CodeChef rated contests, competing against thousands of programmers worldwide.',
      icon: <Award className="text-teal-400" size={24} />,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Achievements
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-teal-500 transition-all duration-500 flex items-start space-x-6 hover:shadow-2xl hover:shadow-teal-500/20 transform hover:scale-[1.02]"
              >
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-full border border-teal-500/30 shadow-lg">
                  {achievement.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Coding Profiles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300 text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-full mb-6 border-2 border-teal-500/30 shadow-lg">
                <Code className="text-teal-400" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">CodeChef</h4>
              <div className="bg-teal-500/10 rounded-lg p-3 mb-4 border border-teal-500/20">
                <span className="text-teal-400 font-bold text-lg">4⭐ Rating</span>
                <p className="text-gray-300 text-sm mt-1">1867 Points</p>
              </div>
              <a 
                href="https://www.codechef.com/users/sidzp05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 hover:text-teal-300 font-medium transition-all duration-300 rounded-lg border border-teal-500/20 hover:border-teal-500/40"
              >
                <Code size={16} />
                @sidzp05
              </a>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300 text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full mb-6 border-2 border-orange-500/30 shadow-lg">
                <Code className="text-teal-400" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">LeetCode</h4>
              <div className="bg-orange-500/10 rounded-lg p-3 mb-4 border border-orange-500/20">
                <span className="text-orange-400 font-bold text-lg">Active Solver</span>
                <p className="text-gray-300 text-sm mt-1">Problem Solving</p>
              </div>
              <a 
                href="https://leetcode.com/sidzp05/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 hover:text-orange-300 font-medium transition-all duration-300 rounded-lg border border-orange-500/20 hover:border-orange-500/40"
              >
                <Code size={16} />
                @sidzp05
              </a>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300 text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full mb-6 border-2 border-green-500/30 shadow-lg">
                <Code className="text-teal-400" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">GeeksForGeeks</h4>
              <div className="bg-green-500/10 rounded-lg p-3 mb-4 border border-green-500/20">
                <span className="text-green-400 font-bold text-lg">Contributor</span>
                <p className="text-gray-300 text-sm mt-1">Articles & Solutions</p>
              </div>
              <a 
                href="https://auth.geeksforgeeks.org/user/sidpatixg78/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 hover:text-green-300 font-medium transition-all duration-300 rounded-lg border border-green-500/20 hover:border-green-500/40"
              >
                <Code size={16} />
                @sidpatixg78
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;