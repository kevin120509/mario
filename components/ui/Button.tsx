import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/**
 * A reusable button component with multiple variants and sizes.
 * @param {ButtonProps} props The properties for the button.
 * @return {JSX.Element} The rendered button component.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none'
  
  const variants = {
    primary: 'bg-mosque hover:bg-mosque/90 text-white shadow-lg shadow-mosque/20',
    secondary: 'bg-primary hover:bg-primary/90 text-white',
    outline: 'bg-transparent border border-nordic-dark/10 hover:border-mosque text-nordic-dark hover:text-mosque',
    ghost: 'bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-nordic-dark dark:text-white',
    dark: 'bg-nordic-dark text-white shadow-lg shadow-nordic-dark/10 hover:-translate-y-0.5'
  }

  const sizes = {
    sm: 'px-4 py-1.5 rounded-md text-sm',
    md: 'px-6 py-2 rounded-lg text-sm',
    lg: 'px-8 py-3 rounded-xl text-lg'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
