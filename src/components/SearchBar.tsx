import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="search for launches"
      className="rounded-app h-10 w-96 bg-app-card px-3 py-2 text-app-text border-app"
    />
  );
};
