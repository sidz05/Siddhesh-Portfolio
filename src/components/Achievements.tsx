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
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300 flex items-start space-x-6"
              >
                <div className="flex-shrink-0 p-4 bg-teal-500/10 rounded-full border border-teal-500/20">
                  {achievement.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300 text-center">
              <div className="inline-flex justify-center items-center w-12 h-12 bg-teal-500/10 rounded-full mb-4 border border-teal-500/20">
                <Code className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Active on CodeChef</h3>
              <a 
                href="https://www.codechef.com/users/sidzp05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
              >
                @sidzp05
              </a>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300 text-center">
              <div className="inline-flex justify-center items-center w-12 h-12 bg-teal-500/10 rounded-full mb-4 border border-teal-500/20">
                <Code className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">LeetCode Profile</h3>
              <a 
                href="https://leetcode.com/sidzp05/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
              >
                @sidzp05
              </a>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300 text-center">
              <div className="inline-flex justify-center items-center w-12 h-12 bg-teal-500/10 rounded-full mb-4 border border-teal-500/20">
                <Code className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GeeksForGeeks</h3>
              <a 
                href="https://auth.geeksforgeeks.org/user/sidpatixg78/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
              >
                @sidpatixg78
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;