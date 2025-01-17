export function Label({ htmlFor, children, className }: { 
    htmlFor: string; 
    children: React.ReactNode; 
    className?: string; 
  }) {
    return (
      <label htmlFor={htmlFor} className={`font-medium ${className}`}>
        {children}
      </label>
    );
  }
  