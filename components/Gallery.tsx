import React, { useState, useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';
import Reveal from './Reveal';

interface ProjectStat {
  label: string;
  value: string;
  accent?: boolean;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  stats: ProjectStat[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sequoyah Hills Terrace",
    category: "Hardscapes",
    description: "Multi-level Tennessee fieldstone patio installation with integrated seating walls.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop",
    stats: [
      { label: "Material", value: "TN Fieldstone" },
      { label: "Location", value: "Knoxville", accent: true }
    ]
  },
  {
    id: 2,
    title: "Old North Knox Restoration",
    category: "Restoration",
    description: "Detailed tuckpointing and brick matching for a historic Victorian facade.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=1000&fit=crop",
    stats: [
      { label: "Match Accuracy", value: "100%" },
      { label: "Style", value: "Historic", accent: true }
    ]
  },
  {
    id: 3,
    title: "Farragut Estate Entry",
    category: "Hardscapes",
    description: "Grand brick entrance and driveway pavers for a luxury residence in Farragut.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop",
    stats: [
      { label: "Material", value: "Custom Brick" },
      { label: "Status", value: "Completed", accent: true }
    ]
  },
  {
    id: 4,
    title: "Maryville Outdoor Living",
    category: "Outdoor Living",
    description: "Stone veneer outdoor kitchen with wood-fired oven and integrated bar.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop",
    stats: [
      { label: "Features", value: "Built-in Grill" },
      { label: "Value Add", value: "Premium", accent: true }
    ]
  }
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

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

  const maxIndex = Math.max(0, projects.length - visibleCards);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  return (
    <section id="gallery" className="py-24 bg-brand-navy relative overflow-hidden text-brand-cream">
      {/* Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <Reveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-brand-silver/30 bg-white/10 backdrop-blur-sm mb-6">
                        <Icon icon="solar:pen-new-square-linear" className="text-brand-silver" width="14" />
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-silver">Project Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-cream mb-6 leading-tight uppercase">
                        Serving the <span className="text-brand-silver">Marble City & Beyond.</span>
                    </h2>
                    <p className="text-brand-cream/60 text-lg leading-relaxed max-w-xl">
                        Explore our latest masonry installations across Knoxville, Farragut, and Maryville. Quality is visible in every joint.
                    </p>
                </Reveal>
            </div>

            {maxIndex > 0 && (
              <div className="flex items-center gap-4">
                  <button 
                      onClick={prevSlide}
                      className="p-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all group active:scale-90"
                  >
                      <Icon icon="solar:arrow-left-linear" width="24" className="group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button 
                      onClick={nextSlide}
                      className="p-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all group active:scale-90"
                  >
                      <Icon icon="solar:arrow-right-linear" width="24" className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
              </div>
            )}
        </div>

        <Reveal delay={200}>
            <div className="overflow-hidden -mx-4 px-4 py-4">
                <div 
                    className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                >
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="flex-shrink-0 px-3 w-full"
                            style={{ width: `${100 / visibleCards}%` }}
                        >
                            <div className="group relative w-full aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden bg-brand-cream border border-white/10 shadow-2xl">
                                <div className="absolute inset-0">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
                                </div>

                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <span className="inline-block px-3 py-1 bg-brand-navy/80 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-brand-cream border border-white/10 rounded-md">
                                            {project.category}
                                        </span>
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            <Icon icon="solar:arrow-right-up-linear" className="text-brand-cream" width="20" />
                                        </div>
                                    </div>

                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-display font-bold text-brand-cream mb-2 leading-tight uppercase">
                                            {project.title}
                                        </h3>
                                        <p className="text-brand-cream/60 text-sm mb-6 line-clamp-2">
                                            {project.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 bg-brand-navy/40 backdrop-blur-sm -mx-6 px-6 pb-6 -mb-6 mt-4">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-silver mb-1">
                                                    {project.stats[0].label}
                                                </p>
                                                <p className="text-lg font-bold font-display text-brand-cream">
                                                    {project.stats[0].value}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-silver mb-1">
                                                    {project.stats[1].label}
                                                </p>
                                                <p className={`text-lg font-bold font-display text-brand-cream`}>
                                                    {project.stats[1].value}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Gallery;