import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, Trophy } from 'lucide-react';

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
      id: 'mht-cet',
      degree: 'MHT-CET Entrance Examination',
      institution: 'Maharashtra State Common Entrance Test Cell',
      location: 'Maharashtra',
      period: '2022',
      grade: 'Percentile: 98.30',
      details: 'Secured 98.30 percentile in MHT-CET, qualifying for admission to top engineering colleges in Maharashtra.',
      level: 'entrance'
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
          bg: 'from-indigo-500/20 to-purple-500/20',
          border: 'border-indigo-500/30',
          accent: 'text-indigo-400',
          dot: 'bg-gradient-to-r from-indigo-500 to-purple-500',
          glow: 'shadow-indigo-500/30'
        };
      case 'entrance':
        return {
          bg: 'from-emerald-500/20 to-teal-500/20',
          border: 'border-emerald-500/30',
          accent: 'text-emerald-400',
          dot: 'bg-gradient-to-r from-emerald-500 to-teal-500',
          glow: 'shadow-emerald-500/30'
        };
      case 'secondary':
        return {
          bg: 'from-cyan-500/20 to-blue-500/20',
          border: 'border-cyan-500/30',
          accent: 'text-cyan-400',
          dot: 'bg-gradient-to-r from-cyan-500 to-blue-500',
          glow: 'shadow-cyan-500/30'
        };
      case 'primary':
        return {
          bg: 'from-amber-500/20 to-orange-500/20',
          border: 'border-amber-500/30',
          accent: 'text-amber-400',
          dot: 'bg-gradient-to-r from-amber-500 to-orange-500',
          glow: 'shadow-amber-500/30'
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
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Educational Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-emerald-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic path that shaped my knowledge and passion for technology
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Straight timeline line on the left */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-emerald-500 via-cyan-500 to-amber-500 rounded-full opacity-80 shadow-lg"></div>
            
            {/* Education items */}
            <div className="space-y-16">
              {education.map((edu, index) => {
                const colors = getLevelColor(edu.level);
                return (
                  <div 
                    key={edu.id}
                    ref={el => educationRefs.current[index] = el}
                    className="relative flex items-center opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out"
                  >
                    {/* Timeline dot on the left */}
                    <div className={`absolute left-4 transform -translate-x-1/2 w-8 h-8 ${colors.dot} rounded-full border-4 border-black z-20 shadow-xl ${colors.glow}`}>
                      <div className={`absolute inset-0 ${colors.dot} rounded-full animate-ping opacity-30`}></div>
                      <div className="absolute inset-2 bg-white rounded-full opacity-20"></div>
                    </div>
                    
                    {/* Content card on the right */}
                    <div className="flex-1 pl-16">
                      <div className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-lg rounded-3xl p-8 border-2 ${colors.border} hover:border-opacity-80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 shadow-2xl ${colors.glow} group overflow-hidden`}>
                        {/* Decorative corner elements */}
                        <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors.dot} opacity-10 rounded-full blur-xl`}></div>
                        <div className={`absolute -bottom-10 -left-10 w-24 h-24 ${colors.dot} opacity-10 rounded-full blur-xl`}></div>
                        
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <div className="absolute bottom-6 left-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                          <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                        </div>
                        
                        <div className="relative z-10">
                          {/* Header with icon */}
                          <div className="flex items-start space-x-4 mb-6">
                            <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${colors.bg} rounded-2xl border-2 ${colors.border} shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                              {edu.level === 'entrance' ? (
                                <Trophy className={`${colors.accent} transition-colors duration-300`} size={28} />
                              ) : (
                                <GraduationCap className={`${colors.accent} transition-colors duration-300`} size={28} />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300 leading-tight">
                                {edu.degree}
                              </h3>
                              <h4 className={`text-lg md:text-xl font-semibold ${colors.accent} mb-1 group-hover:brightness-125 transition-all duration-300`}>
                                {edu.institution}
                              </h4>
                            </div>
                          </div>
                          
                          {/* Details section */}
                          <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-300 space-y-3 sm:space-y-0 sm:space-x-4">
                              <div className="flex items-center bg-gray-800/60 rounded-xl px-4 py-3 backdrop-blur-sm border border-gray-700/50 shadow-lg">
                                <Calendar size={16} className={`mr-2 ${colors.accent}`} />
                                <span className="font-medium">{edu.period}</span>
                              </div>
                              <div className="flex items-center bg-gray-800/60 rounded-xl px-4 py-3 backdrop-blur-sm border border-gray-700/50 shadow-lg">
                                <MapPin size={16} className={`mr-2 ${colors.accent}`} />
                                <span className="font-medium">{edu.location}</span>
                              </div>
                            </div>
                            
                            {/* Grade highlight */}
                            <div className={`bg-gradient-to-r ${colors.bg} rounded-2xl p-5 border-2 ${colors.border} shadow-xl backdrop-blur-sm`}>
                              <div className="flex items-center justify-center">
                                <div className="flex items-center">
                                  <Award size={24} className={`mr-4 ${colors.accent} group-hover:rotate-12 transition-transform duration-300`} />
                                  <span className={`${colors.accent} font-bold text-xl tracking-wide`}>{edu.grade}</span>
                                </div>
                              </div>
                            </div>
                            
                            {edu.details && (
                              <div className="bg-gray-800/40 rounded-xl p-5 backdrop-blur-sm border border-gray-700/50 shadow-lg">
                                <p className="text-gray-300 text-sm leading-relaxed italic">{edu.details}</p>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>
                      </div>
                    </div>
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