import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const SLIDE_DURATION = 5000;

const CarouselDot = ({ active, onClick }) => (
  <button
    className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
      active ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
    }`}
    onClick={onClick}
    aria-label={`Aller au slide ${active ? 'actif' : ''}`}
  />
);

const CarouselButton = ({ direction, onClick, children }) => (
  <button
    className="absolute top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full 
               transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
    style={{ [direction]: '1rem' }}
    onClick={onClick}
    aria-label={`Slide ${direction === 'left' ? 'précédent' : 'suivant'}`}
  >
    {children}
  </button>
);

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  
  const slides = [
    {
      image: "/api/placeholder/1920/1080",
      title: "Nature majestueuse",
      description: "Un paysage à couper le souffle",
      buttonText: "Explorer"
    },
    {
      image: "/api/placeholder/1920/1080",
      title: "Architecture moderne",
      description: "Design urbain contemporain",
      buttonText: "Découvrir"
    },
    {
      image: "/api/placeholder/1920/1080",
      title: "Culture locale",
      description: "Traditions et patrimoine",
      buttonText: "En savoir plus"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const startSlideTimer = useCallback(() => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(nextSlide, SLIDE_DURATION);
  }, [nextSlide]);

  useEffect(() => {
    startSlideTimer();
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [startSlideTimer]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div 
      className="relative group h-[90vh] w-full overflow-hidden"
      role="region"
      aria-label="Carrousel d'images"
    >
      <div 
        className="h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="w-full h-full flex-shrink-0 relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" /> {/* Overlay sombre */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <h2 className="text-white text-5xl font-bold mb-4 transform hover:scale-105 transition-transform">{slide.title}</h2>
              <p className="text-white/90 text-xl mb-8 max-w-2xl">{slide.description}</p>
              <button 
                className="bg-white text-black px-8 py-3 rounded-full font-semibold 
                         hover:bg-white/90 transform hover:scale-105 transition-all duration-300
                         flex items-center space-x-2 group"
                onClick={() => console.log(`Action pour ${slide.title}`)}
              >
                <span>{slide.buttonText}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <CarouselButton direction="left" onClick={prevSlide}>
        <ChevronLeft className="w-6 h-6" />
      </CarouselButton>

      <CarouselButton direction="right" onClick={nextSlide}>
        <ChevronRight className="w-6 h-6" />
      </CarouselButton>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
        {slides.map((_, index) => (
          <CarouselDot
            key={index}
            active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;