import React, { useEffect, useRef } from "react";
import { Award, BookOpen, Code, Trophy, Users, Target } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'technical' | 'personal';
  date?: string;
}

const Achievements: React.FC = () => {
  const achievementRefs = useRef<(HTMLDivElement | null)[]>([]);

  const achievements: Achievement[] = [
    {
      id: 'ictis-2025',
      title: 'International Conference Research Presentation',
      description: 'Presented research at ICTIS 2025, Bangkok on "AI-Driven Traffic Forecasting and Route Optimization", accepted for publication in Springer LNNS, contributing to AI-based intelligent transport systems.',
      icon: <BookOpen className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2025'
    },
    {
      id: 'codechef-4star',
      title: 'CodeChef 4-Star Rating Achievement',
      description: 'Achieved a CodeChef rating of 1867 (4-Star, Div 2) with a global rank of 4,207 and India rank of 3,280, competing in contests with over 10,000 participants.',
      icon: <Code className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2024'
    },
    {
      id: 'contest-commander',
      title: 'Contest Commander – Bronze Badge',
      description: 'Earned the Contest Commander – Bronze Badge on CodeChef for active participation in 10+ rated contests, solving advanced DSA problems under 3-hour timed constraints.',
      icon: <Trophy className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2024'
    },
    {
      id: 'hackerrank-5star',
      title: 'HackerRank 5-Star Problem Solving',
      description: 'Attained a 5-Star rating in Problem Solving on HackerRank, demonstrating strong algorithmic skills in sorting, strings, recursion, and searching.',
      icon: <Award className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2024'
    },
    {
      id: 'code-relay-2nd',
      title: '2nd Place in Code Relay Competition',
      description: 'Secured 2nd place in the Code Relay competition at PCCOE Techfest – Anantya, organized by ACM-W.',
      icon: <Trophy className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2024'
    },
    {
      id: 'smart-india-hackathon',
      title: 'Smart India Hackathon - College Level Rank 11',
      description: 'Smart-India hackathon Rank in College Level is 11.',
      icon: <Code className="text-teal-400" size={24} />,
      category: 'technical',
      date: '2024'
    },
    {
      id: 'hockey-national',
      title: 'National-Level Hockey Tournament',
      description: 'Represented Maharashtra in National-Level Hockey Tournament held in Odisha, India.',
      icon: <Target className="text-teal-400" size={24} />,
      category: 'personal',
      date: '2023'
    },
    {
      id: 'hockey-state',
      title: 'Two-time State Level Hockey Player',
      description: 'Previously a two-time State Level Hockey player, showcasing discipline, teamwork, and competitive spirit.',
      icon: <Trophy className="text-teal-400" size={24} />,
      category: 'personal',
      date: '2022-2023'
    },
    {
      id: 'iste-vp',
      title: 'Vice President, ISTE Students\' Chapter',
      description: 'Elected Vice President, ISTE Students\' Chapter, PCCOE – Managed 10+ technical/non-technical events, including a UI Hackathon with 150+ participants, and led 20+ members to enhance student engagement and chapter membership.',
      icon: <Users className="text-teal-400" size={24} />,
      category: 'personal',
      date: '2024'
    },
    {
      id: 'acm-membership',
      title: 'Membership Chair, PCCOE ACM Student Chapter',
      description: 'Elected Membership Chair, PCCOE ACM Student Chapter – Recruited 300+ members as ACM India Membership Ambassador, drove 100+ new sign-ups in one quarter, and built 50+ industry connections to strengthen collaborations.',
      icon: <Users className="text-teal-400" size={24} />,
      category: 'personal',
      date: '2024'
    }
  ];

  const technicalAchievements = achievements.filter(a => a.category === 'technical');
  const personalAchievements = achievements.filter(a => a.category === 'personal');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    achievementRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      achievementRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Achievements
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Achievements Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Achievements</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-teal-500/30"></div>
              
              <div className="space-y-12">
                {technicalAchievements.map((achievement, index) => (
                  <div 
                    key={achievement.id}
                    ref={el => achievementRefs.current[index] = el}
                    className={`relative flex flex-col md:flex-row md:items-center opacity-0 translate-y-10 transition-all duration-700 ease-out ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-teal-500 rounded-full border-4 border-black z-10"></div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-0 md:pr-12' : 'md:pl-12 md:pr-0'} pl-8`}>
                      <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 p-3 bg-teal-500/10 rounded-full border border-teal-500/20">
                            {achievement.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                            {achievement.date && (
                              <span className="text-teal-400 text-sm font-medium mb-2 block">{achievement.date}</span>
                            )}
                            <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Spacer for timeline */}
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Achievements Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Personal Achievements</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-teal-500/30"></div>
              
              <div className="space-y-12">
                {personalAchievements.map((achievement, index) => (
                  <div 
                    key={achievement.id}
                    ref={el => achievementRefs.current[technicalAchievements.length + index] = el}
                    className={`relative flex flex-col md:flex-row md:items-center opacity-0 translate-y-10 transition-all duration-700 ease-out ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-teal-500 rounded-full border-4 border-black z-10"></div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-0 md:pr-12' : 'md:pl-12 md:pr-0'} pl-8`}>
                      <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 p-3 bg-teal-500/10 rounded-full border border-teal-500/20">
                            {achievement.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                            {achievement.date && (
                              <span className="text-teal-400 text-sm font-medium mb-2 block">{achievement.date}</span>
                            )}
                            <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Spacer for timeline */}
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coding Platform Cards */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Coding Profiles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* CodeChef Card */}
              <a
                href="https://www.codechef.com/users/sidzp05"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center block group"
              >
                <div className="relative mb-6">
                  {/* Siddhesh Photo Circle */}
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-orange-500 group-hover:border-orange-400 transition-colors">
                    <img
                      src="/Photo/Siddhesh_Photo.png"
                      alt="Siddhesh Patil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Platform Logo Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center border-4 border-gray-900">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.5 0c-4.4 0-8 3.6-8 8 0 1.4.4 2.7 1 3.8L12 24l7.5-12.2c.6-1.1 1-2.4 1-3.8 0-4.4-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  CodeChef
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                    <p className="text-orange-400 font-bold">4-Star Rating</p>
                    <p className="text-gray-300">Rating: 1867</p>
                  </div>
                  <div className="text-gray-400">
                    <p>Global Rank: 4,207</p>
                    <p>India Rank: 3,280</p>
                  </div>
                </div>
              </a>

              {/* LeetCode Card */}
              <a
                href="https://leetcode.com/u/sidzp05/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center block group"
              >
                <div className="relative mb-6">
                  {/* Siddhesh Photo Circle */}
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-yellow-500 group-hover:border-yellow-400 transition-colors">
                    <img
                      src="/Photo/Siddhesh_Photo.png"
                      alt="Siddhesh Patil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Platform Logo Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-gray-900">
                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  LeetCode
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
                    <p className="text-yellow-400 font-bold">Active Solver</p>
                    <p className="text-gray-300">Problem Solving</p>
                  </div>
                  <div className="text-gray-400">
                    <p>Data Structures & Algorithms</p>
                    <p>Regular Contest Participation</p>
                  </div>
                </div>
              </a>

              {/* GeeksForGeeks Card */}
              <a
                href="https://auth.geeksforgeeks.org/user/sidpatixg78/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center block group"
              >
                <div className="relative mb-6">
                  {/* Siddhesh Photo Circle */}
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-green-500 group-hover:border-green-400 transition-colors">
                    <img
                      src="/Photo/Siddhesh_Photo.png"
                      alt="Siddhesh Patil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Platform Logo Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-gray-900">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.565 4.677 4.677 0 0 1-1.42.198 4.614 4.614 0 0 1-2.274-.6 4.822 4.822 0 0 1-1.657-1.421 4.904 4.904 0 0 1-.67-1.936 5.186 5.186 0 0 1-.06-1.167c.026-.394.094-.78.203-1.167a4.61 4.61 0 0 1 .397-1.056 4.834 4.834 0 0 1 .565-.865 4.632 4.632 0 0 1 .695-.668 4.446 4.446 0 0 1 .788-.484 4.637 4.637 0 0 1 .856-.286 4.756 4.756 0 0 1 .895-.094c.316 0 .624.034.923.103.299.069.584.168.856.297.272.129.532.286.78.471.248.185.478.397.691.636.213.239.407.506.582.8.175.294.328.611.459.95.131.34.238.695.322 1.067.084.372.143.758.177 1.158.034.4.043.808.026 1.224a7.373 7.373 0 0 1-.203 1.29zm-2.808-4.302a2.563 2.563 0 0 0-.275-.715 2.682 2.682 0 0 0-.479-.618 2.634 2.634 0 0 0-.668-.459 2.662 2.662 0 0 0-.824-.189 2.568 2.568 0 0 0-.859.155 2.618 2.618 0 0 0-.738.428 2.712 2.712 0 0 0-.547.636 2.75 2.75 0 0 0-.334.784 2.811 2.811 0 0 0-.112.862c.017.282.069.557.155.824.086.267.206.52.36.758.154.238.342.451.565.636.223.185.478.334.765.445.287.111.598.167.933.167.335 0 .651-.056.948-.167.297-.111.565-.26.804-.445.239-.185.451-.398.636-.636.185-.238.334-.491.445-.758.111-.267.178-.542.2-.824.022-.282.008-.565-.043-.848a2.478 2.478 0 0 0-.155-.636z"/>
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  GeeksforGeeks
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <p className="text-green-400 font-bold">Active Contributor</p>
                    <p className="text-gray-300">Problem Solving</p>
                  </div>
                  <div className="text-gray-400">
                    <p>Data Structures & Algorithms</p>
                    <p>Technical Articles</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;