import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skills: Skill[] = [
    { name: 'C++', level: 90, category: 'languages' },
    { name: 'Java', level: 85, category: 'languages' },
    { name: 'Python', level: 80, category: 'languages' },
    { name: 'HTML', level: 95, category: 'web' },
    { name: 'CSS', level: 85, category: 'web' },
    { name: 'JavaScript', level: 85, category: 'web' },
    { name: 'Node.js', level: 80, category: 'frameworks' },
    { name: 'Express', level: 75, category: 'frameworks' },
    { name: 'React', level: 70, category: 'frameworks' },
    { name: 'MongoDB', level: 75, category: 'databases' },
    { name: 'MySQL', level: 80, category: 'databases' },
    { name: 'Data Structures', level: 90, category: 'cs' },
    { name: 'Algorithms', level: 85, category: 'cs' },
    { name: 'Git/GitHub', level: 85, category: 'tools' },
    { name: 'VS Code', level: 90, category: 'tools' },
    { name: 'Problem Solving', level: 90, category: 'soft' },
    { name: 'Team Leadership', level: 85, category: 'soft' },
  ];
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Web Technologies' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'databases', label: 'Databases' },
    { id: 'cs', label: 'CS Fundamentals' },
    { id: 'tools', label: 'Tools' },
    { id: 'soft', label: 'Soft Skills' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-teal-500 text-black font-semibold'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-teal-500 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-teal-500 to-teal-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;