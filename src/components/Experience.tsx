import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details?: string;
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
      grade: 'CGPA: 7.85 (out of 10)'
    },
    {
      id: 'hsc',
      degree: 'Higher Secondary Certificate (HSC) – Science',
      institution: 'The New College',
      location: 'Kolhapur',
      period: '2020 – 2022',
      grade: '76.17%'
    },
    {
      id: 'ssc',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'D.C. Narke Vidyaniketan',
      location: 'Kolhapur',
      period: '2019 – 2020',
      grade: '96.20%'
    }
  ];
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
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
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Education
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-teal-500/30"></div>
            
            {/* Education items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div 
                  key={edu.id}
                  ref={el => educationRefs.current[index] = el}
                  className={`relative flex flex-col md:flex-row md:items-center opacity-0 translate-y-10 transition-all duration-700 ease-out ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-teal-500 rounded-full border-4 border-gray-900 z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-0 md:pr-12' : 'md:pl-12 md:pr-0'} pl-8`}>
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 bg-teal-500/10 rounded-full border border-teal-500/20">
                          <GraduationCap className="text-teal-400" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                          <h4 className="text-lg font-medium text-teal-400 mb-4">{edu.institution}</h4>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400 mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-2" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-2" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                          
                          <div className="bg-teal-500/10 rounded-lg p-3 border border-teal-500/20">
                            <p className="text-teal-400 font-bold">{edu.grade}</p>
                          </div>
                          
                          {edu.details && (
                            <p className="text-gray-300 text-sm mt-3">{edu.details}</p>
                          )}
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
      </div>
    </section>
  );
};

export default Education;