import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none";
  
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white focus:ring-brand-600 shadow-sm",
    outline: "border-2 border-brand-600 text-brand-700 hover:bg-brand-50 focus:ring-brand-600",
    white: "bg-white text-brand-700 hover:bg-brand-50 shadow-sm focus:ring-brand-600"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    // Handle internal hash links (anchors) manually to prevent server routing errors
    if (to.startsWith('#')) {
      const handleHashClick = (e: React.MouseEvent) => {
        e.preventDefault(); // CRITICAL: Prevents page reload/navigation error
        if (onClick) onClick();

        const targetId = to.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <a href={to} className={combinedClassName} onClick={handleHashClick}>
          {children}
        </a>
      );
    }

    // Handle External Links
    if (external) {
      return (
        <a href={to} className={combinedClassName} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }

    // Handle React Router Links
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  // Standard button
  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};