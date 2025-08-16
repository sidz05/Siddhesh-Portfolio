import React, { useEffect, useRef,  } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details?: string;
}

const Experience: React.FC = () => {
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const experiences: Experience[] = [
    {
      id: 'iste',
      role: 'Vice President',
      organization: 'ISTE Students\' Chapter, PCCOE',
      location: 'Pune, Maharashtra, India',
      period: 'October 2024 – Present',
      description: [
        'Managed and executed 10+ technical and non-technical events, including a UI Hackathon with 150+ participants, enhancing technical skills and fostering collaboration.',
        'Led a team of 20+ core members to implement high-impact initiatives, resulting in a 35% increase in student engagement and a 25% growth in chapter membership through mentorship programs, hands-on workshops, networking events, and targeted outreach campaigns.'
      ]
    },
    {
      id: 'acm',
      role: 'Membership Chair',
      organization: 'PCCOE ACM Student Chapter',
      location: 'Pune, Maharashtra, India',
      period: 'September 2024 – Present',
      description: [
        'Elected as Membership Ambassador of ACM India and successfully recruited 300+ members, strengthening the chapter\'s engagement and presence.',
        'Spearheaded membership marketing and relations by designing compelling promotional materials and hosting engaging events, leading to the recruitment of 100+ new members in one academic quarter.',
        'Strengthened internal networking and cultivated relationships with 50+ industry professionals, resulting in a 30% increase in collaborative projects and enhanced opportunities for chapter members.'
      ]
    },
  ];

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
    
    experienceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      experienceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Experience
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-teal-500/30"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  ref={el => experienceRefs.current[index] = el}
                  className={`relative flex flex-col md:flex-row md:items-center opacity-0 translate-y-10 transition-all duration-700 ease-out ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-teal-500 rounded-full border-4 border-black z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-0 md:pr-12' : 'md:pl-12 md:pr-0'} pl-8`}>
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-teal-400 mb-4">{exp.organization}</h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400 mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 text-gray-300">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-teal-400 mr-2 pt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Spacer for timeline */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-4 border-teal-500 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
                    <h4 className="text-lg font-medium text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-teal-400 font-medium text-sm">{edu.period}</span>
                  </div>
                  <p className="text-gray-300 mb-1">
                    {edu.institution}, {edu.location}
                  </p>
                  <p className="text-gray-400 font-medium">{edu.grade}</p>
                  {edu.details && (
                    <p className="text-gray-400 text-sm mt-2">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures', 
                  'Algorithms Analysis', 
                  'Object Oriented Programming',
                  'Database Management', 
                  'Computer Networking', 
                  'Operating System',
                  'Machine Learning', 
                  'Software Methodology'
                ].map((course) => (
                  <span 
                    key={course}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs border border-gray-600"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;