

export function Switch({ id, checked, onCheckedChange }: { 
  id: string; 
  checked: boolean; 
  onCheckedChange: () => void; 
}) {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <input 
        id={id} 
        type="checkbox" 
        checked={checked} 
        onChange={onCheckedChange} 
        className="sr-only" 
      />
      <span className={`block w-10 h-6 rounded-full ${checked ? 'bg-blue-500' : 'bg-gray-300'}`} />
      <span className={`dot absolute w-4 h-4 rounded-full bg-white transform transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
    </label>
  );
}
