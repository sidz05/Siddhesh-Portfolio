import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
}

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Placeholder photos - you can replace these with your actual photos
  const photos: Photo[] = [
    {
      id: 'photo1',
      src: '/Photo/Siddhesh_Photo.png',
      alt: 'Siddhesh Patil Professional Photo',
      title: 'Professional Portrait',
      description: 'Professional headshot for portfolio and LinkedIn'
    },
    {
      id: 'photo2',
      src: '/Photo/sid-lt.jpg',
      alt: 'Siddhesh Patil Casual Photo',
      title: 'Casual Portrait',
      description: 'Casual photo showcasing personality'
    },
    // Add more photos as needed
    {
      id: 'photo3',
      src: '/Photo/Siddhesh_Photo.png',
      alt: 'Event Photo',
      title: 'Tech Event',
      description: 'At a technology conference or event'
    },
    {
      id: 'photo4',
      src: '/Photo/sid-lt.jpg',
      alt: 'Project Work',
      title: 'Working on Projects',
      description: 'Coding and development work'
    },
    {
      id: 'photo5',
      src: '/Photo/Siddhesh_Photo.png',
      alt: 'Achievement Photo',
      title: 'Achievement Moment',
      description: 'Celebrating a milestone or achievement'
    },
    {
      id: 'photo6',
      src: '/Photo/sid-lt.jpg',
      alt: 'Team Photo',
      title: 'Team Collaboration',
      description: 'Working with team members on projects'
    }
  ];

  const openModal = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (selectedPhoto) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedPhoto, currentIndex]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'scale-100');
            entry.target.classList.remove('opacity-0', 'scale-95');
          }, index * 150);
        }
      });
    }, observerOptions);

    galleryRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      galleryRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="gallery" className="py-20 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 via-rose-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto flex items-center justify-center gap-3">
            <Camera className="text-violet-400" size={24} />
            Capturing moments from my journey in technology and life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                ref={el => galleryRefs.current[index] = el}
                onClick={() => openModal(photo, index)}
                className="cursor-pointer group opacity-0 scale-95 transition-all duration-700 ease-out"
              >
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-800 hover:border-violet-500/50">
                  {/* Image container */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-bold text-lg mb-2">{photo.title}</h3>
                        {photo.description && (
                          <p className="text-gray-300 text-sm">{photo.description}</p>
                        )}
                      </div>
                    </div>

                    {/* Hover icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <Camera className="text-white" size={20} />
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-center group-hover:text-violet-400 transition-colors duration-300">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white hover:text-violet-400 transition-colors duration-300"
              >
                <X size={20} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white hover:text-violet-400 transition-colors duration-300"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white hover:text-violet-400 transition-colors duration-300"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* Photo info */}
              <div className="p-6 bg-gray-800/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
                {selectedPhoto.description && (
                  <p className="text-gray-300">{selectedPhoto.description}</p>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {currentIndex + 1} of {photos.length}
                  </span>
                  <div className="flex space-x-2">
                    {photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          setSelectedPhoto(photos[index]);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentIndex ? 'bg-violet-400' : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;