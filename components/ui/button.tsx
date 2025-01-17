export function Button({ onClick, disabled, children, variant }: { 
    onClick?: () => void; 
    disabled?: boolean; 
    children: React.ReactNode; 
    variant?: 'outline' | 'solid'; 
  }) {
    const styles = variant === 'outline' 
      ? 'border bg-white text-black' 
      : 'bg-blue-500 text-white';
    return (
      <button 
        onClick={onClick} 
        disabled={disabled} 
        className={`py-2 px-4 rounded ${styles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
        {children}
      </button>
    );
  }
  