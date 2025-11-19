import React from "react";

interface LoadingSpinnerProps {
  label?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ label }) => {
  return (
    <div className="inline-flex items-center gap-2 text-xs text-app-accordion-title">
      <span
        className="
          h-3 w-3 rounded-full border-2 border-current border-t-transparent
          animate-spin
        "
      />
      {label && <span>{label}</span>}
    </div>
  );
};
