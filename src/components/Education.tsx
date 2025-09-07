import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, Star } from 'lucide-react';

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details?: string;
  level: 'undergraduate' | 'secondary' | 'primary';
}

const Education: React.FC = () => {
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const education: Education[] = [
    {
      id: 'btech',
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Pimpri Chinchwad College of Engineering',
      location: 'Pune',
      period: 'November 2022 – June 2026',
      grade: 'CGPA: 7.85 (out of 10)',
      level: 'undergraduate'
    },
    {
      id: 'hsc',
      degree: 'Higher Secondary Certificate (HSC) – Science',
      institution: 'The New College',
      location: 'Kolhapur',
      period: '2020 – 2022',
      grade: '76.17%',
      level: 'secondary'
    },
    {
      id: 'ssc',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'D.C. Narke Vidyaniketan',
      location: 'Kolhapur',
      period: '2019 – 2020',
      grade: '96.20%',
      level: 'primary'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'undergraduate':
        return {
          bg: 'from-purple-500/20 to-blue-500/20',
          border: 'border-purple-500/30',
          accent: 'text-purple-400',
          dot: 'bg-purple-500',
          glow: 'shadow-purple-500/20'
        };
      case 'secondary':
        return {
          bg: 'from-teal-500/20 to-green-500/20',
          border: 'border-teal-500/30',
          accent: 'text-teal-400',
          dot: 'bg-teal-500',
          glow: 'shadow-teal-500/20'
        };
      case 'primary':
        return {
          bg: 'from-orange-500/20 to-yellow-500/20',
          border: 'border-orange-500/30',
          accent: 'text-orange-400',
          dot: 'bg-orange-500',
          glow: 'shadow-orange-500/20'
        };
      default:
        return {
          bg: 'from-gray-500/20 to-gray-600/20',
          border: 'border-gray-500/30',
          accent: 'text-gray-400',
          dot: 'bg-gray-500',
          glow: 'shadow-gray-500/20'
        };
    }
  };
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'scale-95');
          }, index * 200);
        }
      });
    }, observerOptions);
    
    educationRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      educationRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="education" className="py-20 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Educational Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-teal-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic path that shaped my knowledge and passion for technology
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced timeline line with gradient */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-teal-500 to-orange-500 rounded-full opacity-60"></div>
            
            {/* Education items */}
            <div className="space-y-16">
              {education.map((edu, index) => {
                const colors = getLevelColor(edu.level);
                return (
                  <div 
                    key={edu.id}
                    ref={el => educationRefs.current[index] = el}
                    className={`relative flex flex-col md:flex-row md:items-center opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Enhanced timeline dot with pulsing animation */}
                    <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 ${colors.dot} rounded-full border-4 border-black z-20 shadow-lg ${colors.glow} animate-pulse`}>
                      <div className={`absolute inset-0 ${colors.dot} rounded-full animate-ping opacity-20`}></div>
                    </div>
                    
                    {/* Enhanced content card */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-0 md:pr-16' : 'md:pl-16 md:pr-0'} pl-12`}>
                      <div className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-2xl p-8 border-2 ${colors.border} hover:border-opacity-60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl ${colors.glow} group`}>
                        {/* Decorative corner elements */}
                        <div className={`absolute top-0 right-0 w-20 h-20 ${colors.accent} opacity-10 transform rotate-45 translate-x-10 -translate-y-10`}></div>
                        <div className={`absolute bottom-0 left-0 w-16 h-16 ${colors.accent} opacity-10 transform rotate-45 -translate-x-8 translate-y-8`}></div>
                        
                        <div className="relative z-10">
                          {/* Header with icon */}
                          <div className="flex items-start space-x-4 mb-6">
                            <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${colors.bg} rounded-2xl border ${colors.border} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <GraduationCap className={`${colors.accent} transition-colors duration-300`} size={28} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                                {edu.degree}
                              </h3>
                              <h4 className={`text-lg md:text-xl font-semibold ${colors.accent} mb-1 group-hover:brightness-110 transition-all duration-300`}>
                                {edu.institution}
                              </h4>
                            </div>
                          </div>
                          
                          {/* Details section */}
                          <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-300 space-y-3 sm:space-y-0 sm:space-x-6">
                              <div className="flex items-center bg-gray-800/50 rounded-lg px-3 py-2 backdrop-blur-sm">
                                <Calendar size={16} className={`mr-2 ${colors.accent}`} />
                                <span className="font-medium">{edu.period}</span>
                              </div>
                              <div className="flex items-center bg-gray-800/50 rounded-lg px-3 py-2 backdrop-blur-sm">
                                <MapPin size={16} className={`mr-2 ${colors.accent}`} />
                                <span className="font-medium">{edu.location}</span>
                              </div>
                            </div>
                            
                            {/* Grade highlight */}
                            <div className={`bg-gradient-to-r ${colors.bg} rounded-xl p-4 border ${colors.border} shadow-inner`}>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Award size={20} className={`mr-3 ${colors.accent}`} />
                                  <span className={`${colors.accent} font-bold text-lg`}>{edu.grade}</span>
                                </div>
                                <div className="flex space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      size={16} 
                                      className={`${i < (edu.level === 'primary' ? 5 : edu.level === 'undergraduate' ? 4 : 3) ? colors.accent : 'text-gray-600'} transition-colors duration-300`}
                                      fill="currentColor"
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            {edu.details && (
                              <div className="bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50">
                                <p className="text-gray-300 text-sm leading-relaxed">{edu.details}</p>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
                      </div>
                    </div>
                    
                    {/* Spacer for timeline */}
                    <div className="md:w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;