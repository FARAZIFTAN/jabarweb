import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaAction?: () => void;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage, ctaText, ctaAction }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          {subtitle}
        </p>
        {ctaText && ctaAction && (
          <button
            onClick={ctaAction}
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            <span>{ctaText}</span>
            <ArrowRight size={20} />
          </button>
        )}
      </div>
      
      {/* Parallax Effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            transform: 'translateZ(-1px) scale(1.1)'
          }}
        />
      </div>
    </div>
  );
};

export default Hero;