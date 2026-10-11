import { Search, X } from 'lucide-react';

interface SearchBarProps {
  query: string;
  onChange: (query: string) => void;
  onClear: () => void;
}

export const SearchBar = ({ query, onChange, onClear }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#60A5FA]">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Filter by tool name, tag, or use case..."
        className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#101827] border border-[#253247] text-[#F8FAFC] placeholder:text-[#718096] text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-xs"
        aria-label="Filter tools"
      />
      {query && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#718096] hover:text-[#F8FAFC] cursor-pointer"
          aria-label="Clear filter query"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
