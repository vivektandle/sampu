import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 rounded-lg text-sm font-medium transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EC3237] cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-[#EC3237] text-white hover:bg-[#C9232B] shadow-xs',
        secondary: 'bg-[#363789] text-white hover:bg-[#262768] shadow-xs',
        outline:
          'border border-[#363789] bg-white text-[#363789] hover:bg-[#363789] hover:text-white',
        ghost: 'text-[#202124] hover:bg-[#F5F6FA] hover:text-[#363789]',
        link: 'text-[#363789] underline-offset-4 hover:underline hover:text-[#EC3237] p-0 h-auto',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-7 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
