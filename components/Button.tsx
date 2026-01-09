import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-cream disabled:opacity-50 disabled:cursor-not-allowed uppercase";
  
  const variants = {
    primary: "bg-brand-navy hover:bg-brand-navy/90 text-brand-cream shadow-lg hover:shadow-brand-navy/20 focus:ring-brand-navy",
    secondary: "bg-brand-silver hover:bg-brand-silver/90 text-brand-navy shadow-lg focus:ring-brand-silver border border-brand-silver",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-cream focus:ring-brand-navy",
    ghost: "text-brand-navy/70 hover:text-brand-navy hover:bg-brand-silver/20",
  };

  const sizes = {
    sm: "px-5 py-3 text-xs",
    md: "px-7 py-4 text-sm",
    lg: "px-9 py-5 text-base",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;