import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import PropTypes from 'prop-types'

export function CarouselControls({
  totalSlides,
  currentSlide,
  onNext,
  onPrevious,
  onDotClick,
  isPlaying,
  onPlayPauseToggle,
}) {
  return (
    <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-4">
      {/* Navigation Arrows */}
      <button
        onClick={onPrevious}
        className="group absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 opacity-0 transition-opacity hover:bg-black/50 focus:opacity-100 focus:outline-none group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={onPlayPauseToggle}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 opacity-0 transition-opacity hover:bg-black/50 focus:opacity-100 focus:outline-none group-hover:opacity-100"
        aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 text-white" />
        ) : (
          <Play className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  )
}

CarouselControls.propTypes = {
  totalSlides: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onDotClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayPauseToggle: PropTypes.func.isRequired,
}

