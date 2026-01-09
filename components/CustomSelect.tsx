import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

interface CustomSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  className?: string;
  darkVariant?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ 
  label, 
  options, 
  value, 
  onChange, 
  name, 
  className = '',
  darkVariant = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const bgColor = darkVariant ? 'bg-brand-navy' : 'bg-white/5';
  const borderColor = isOpen ? 'border-brand-silver' : 'border-white/10';

  return (
    <div className={`space-y-2 relative ${className}`} ref={dropdownRef}>
      <label className="text-[10px] font-bold text-brand-silver uppercase tracking-widest ml-1">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full ${bgColor} border ${borderColor} rounded-md px-6 py-4 text-white text-left focus:outline-none transition-all flex justify-between items-center group shadow-sm`}
      >
        <span className={value ? 'text-white' : 'text-white/20'}>{value || 'Select option'}</span>
        <Icon 
          icon="solar:alt-arrow-down-linear" 
          className={`text-brand-silver transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute z-[100] top-full left-0 right-0 mt-2 bg-brand-navy border border-white/10 rounded-md shadow-2xl py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-3 text-sm transition-colors ${
                value === option 
                  ? 'bg-brand-silver text-brand-navy font-bold' 
                  : 'text-brand-cream/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;