import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  ctaText?: string;
  ctaAction?: () => void;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  image,
  imageAlt,
  imageOnLeft = true,
  ctaText,
  ctaAction
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          imageOnLeft ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
        }`}>
          {/* Image */}
          <div className={`${imageOnLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
            <div className="relative group">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>

          {/* Content */}
          <div className={`${imageOnLeft ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {description}
            </p>
            {ctaText && ctaAction && (
              <button
                onClick={ctaAction}
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:translate-y-[-2px]"
              >
                <span>{ctaText}</span>
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;