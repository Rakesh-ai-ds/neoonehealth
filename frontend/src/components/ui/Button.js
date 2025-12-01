import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const variants = {
    primary: 'bg-[#FF7F11] text-white hover:bg-[#e67410] border-0',
    secondary: 'bg-[#20BF55] text-white hover:bg-[#1aa849] border-0',
    outline: 'border-2 border-[#FF7F11] text-[#FF7F11] bg-transparent hover:bg-[#FF7F11] hover:text-white',
    ghost: 'bg-transparent text-[#082C4A] hover:bg-[#F5F7FA] border-0',
  };

  const sizes = {
    default: 'px-6 py-3 text-base',
    sm: 'px-4 py-2 text-sm',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
