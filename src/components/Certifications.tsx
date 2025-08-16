import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const Certifications: React.FC = () => {
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certifications: Certification[] = [
  {
    id: 'java-oop',
    title: 'Java Object-Oriented Programming',
    issuer: 'LinkedIn Learning Community',
    date: 'August 2025',
    image: '/certificates/java-oop.png'
  },
  {
    id: 'java-foundations',
    title: 'Oracle Java Foundations',
    issuer: 'LinkedIn Learning Community',
    date: 'August 2025',
    image: '/certificates/java-foundations.png'
  },
  {
    id: 'aws',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'January 2024',   // ✅ Fixed spelling
    image: '/certificates/aws.png'
  },
  {
    id: 'google',
    title: 'C++ Programming',
    issuer: 'Udemy',
    date: 'February 2025',  // ✅ Fixed spelling
    image: '/certificates/google.png'
  },
  {
    id: 'meta',
    title: 'Machine Learning using Python',
    issuer: 'Udemy',
    date: 'March 2025',     // ✅ Capitalized
    image: '/certificates/meta.png'
  }
];


  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-x-0');
          entry.target.classList.remove('opacity-0', 'translate-x-[-100px]');
        }
      });
    }, observerOptions);

    certRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      certRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                ref={el => certRefs.current[index] = el}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer bg-gray-900 rounded-xl shadow-xl overflow-hidden transform opacity-0 translate-x-[-100px] transition-all duration-700 ease-out hover:shadow-2xl border border-gray-800 hover:border-teal-500"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-teal-400 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal with smooth pop-out */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full p-4"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 bg-gray-800 text-white rounded-full px-3 py-1 hover:bg-red-500 transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
