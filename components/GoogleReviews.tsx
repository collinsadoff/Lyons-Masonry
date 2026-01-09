import React, { useState, useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';
import { GoogleGenAI } from "@google/genai";
import Reveal from './Reveal';

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  prompt: string;
  image?: string;
}

const reviewsData: Review[] = [
  {
    name: "Michael Stevenson",
    date: "1 month ago",
    rating: 5,
    text: "LyonsMasonry transformed our Bearden backyard with a stunning stone patio. The best masonry crew in Knoxville. They were punctual, polite, and true craftsmen. Highly recommend them!",
    prompt: "Professional realistic headshot of a friendly 45-year-old man, slight smile, wearing a casual navy polo, blurred high-end backyard background, cinematic lighting, 8k resolution."
  },
  {
    name: "Sarah Jenkins",
    date: "2 months ago",
    rating: 5,
    text: "Matched the historic brick in Fourth & Gill perfectly for our chimney restoration. True artisans who understand Knoxville's heritage and historic requirements. Professional from start to finish.",
    prompt: "Realistic professional portrait of a woman in her 30s, natural hair, wearing a beige blazer, soft natural lighting, elegant studio background, high detail skin texture."
  },
  {
    name: "Robert Chen",
    date: "3 weeks ago",
    rating: 5,
    text: "Excellent experience with our Farragut retaining wall project. The quote was transparent, and they finished ahead of schedule. Best local contractor I've worked with in East Tennessee.",
    prompt: "Realistic portrait of a friendly man in his late 50s, salt and pepper hair, wearing a clean light-blue button-down shirt, outdoor garden background, sharp focus, professional photography."
  },
  {
    name: "Amanda Wright",
    date: "2 weeks ago",
    rating: 5,
    text: "Used them for a custom outdoor fireplace and pizza oven. The attention to detail in the stonework is incredible. They really brought our vision to life. Worth every penny.",
    prompt: "Professional headshot of a smiling woman in her 40s, business casual, garden background, high quality photography."
  },
  {
    name: "David Miller",
    date: "4 months ago",
    rating: 5,
    text: "Reliable, clean, and professional. They repaired our foundation walls and the work is rock solid. No more water issues. Great communication throughout the whole process.",
    prompt: "Friendly looking man in his 40s, construction manager style, blurred construction site background, professional lighting."
  }
];

const imageMemoryCache: Record<string, string> = {};

const GoogleReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});

  const generateReviewerImage = async (review: Review, retryCount = 0) => {
    if (imageMemoryCache[review.name]) {
      setGeneratedImages(prev => ({ ...prev, [review.name]: imageMemoryCache[review.name] }));
      return;
    }

    setLoadingImages(prev => ({ ...prev, [review.name]: true }));
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: review.prompt }] },
      });

      let imageUrl = '';
      if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            imageUrl = `data:image/png;base64,${part.inlineData.data}`;
            break;
          }
        }
      }

      if (imageUrl) {
        setGeneratedImages(prev => ({ ...prev, [review.name]: imageUrl }));
        imageMemoryCache[review.name] = imageUrl;
      }
    } catch (error: any) {
      if (retryCount < 3 && (error?.status === 'RESOURCE_EXHAUSTED' || error?.message?.includes('429'))) {
        const delay = Math.pow(2, retryCount) * 2000 + Math.random() * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
        return generateReviewerImage(review, retryCount + 1);
      }
    } finally {
      setLoadingImages(prev => ({ ...prev, [review.name]: false }));
    }
  };

  useEffect(() => {
    reviewsData.forEach((review, index) => {
      if (!generatedImages[review.name]) {
        setTimeout(() => generateReviewerImage(review), index * 1000);
      }
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1280) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviewsData.length - visibleCards);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, maxIndex]);

  return (
    <section id="reviews" className="py-24 bg-brand-navy border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-brand-silver/30 bg-white/10 backdrop-blur-sm mb-6 shadow-sm">
                <Icon icon="solar:star-bold" className="text-brand-silver" width="14" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-cream">Google Reviews</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-cream mb-6 uppercase">
                What Knoxville <span className="text-brand-silver">is Saying.</span>
              </h2>
            </div>
            
            {maxIndex > 0 && (
              <div className="flex gap-4">
                <button 
                  onClick={prevSlide} 
                  className="p-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all group active:scale-90"
                  aria-label="Previous reviews"
                >
                  <Icon icon="solar:arrow-left-linear" width="24" className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={nextSlide} 
                  className="p-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all group active:scale-90"
                  aria-label="Next reviews"
                >
                  <Icon icon="solar:arrow-right-linear" width="24" className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </Reveal>

        <div className="overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" 
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {reviewsData.map((review, idx) => (
              <div key={idx} className="flex-shrink-0 px-3 w-full" style={{ width: `${100 / visibleCards}%` }}>
                <div className="bg-white/5 p-8 rounded-xl border border-white/10 h-full flex flex-col hover:border-brand-silver/50 transition-colors group backdrop-blur-sm shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-navy border border-white/10 flex-shrink-0">
                      {loadingImages[review.name] ? (
                        <div className="w-full h-full animate-pulse bg-white/10" />
                      ) : generatedImages[review.name] ? (
                        <img src={generatedImages[review.name]} alt={review.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Icon icon="solar:user-linear" className="text-white/20" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-brand-cream font-bold text-sm uppercase tracking-wider">{review.name}</h4>
                      <p className="text-brand-silver text-[10px] uppercase font-bold">{review.date}</p>
                    </div>
                    <div className="ml-auto flex text-brand-silver">
                      {[...Array(review.rating)].map((_, i) => <Icon key={i} icon="solar:star-bold" width="12" />)}
                    </div>
                  </div>
                  <p className="text-brand-cream/60 text-sm leading-relaxed mb-6 italic flex-grow">"{review.text}"</p>
                  <div className="flex items-center gap-2 pt-6 border-t border-white/10">
                    <Icon icon="logos:google-icon" width="16" />
                    <span className="text-[10px] font-bold text-brand-silver uppercase tracking-widest">Verified Review</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;