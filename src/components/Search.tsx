import { Search as SearchIcon } from 'lucide-react';

type SearchProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export default function Search({ value, placeholder, onChange }: SearchProps) {
  return (
    <label className="relative block">
      <span className="sr-only">{placeholder}</span>
      <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="focus-ring h-14 w-full rounded-2xl border border-line bg-white pl-12 pr-4 text-base shadow-soft placeholder:text-muted"
      />
    </label>
  );
}
