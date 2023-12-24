import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center bg-c1 h-screen">
      <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-l-4 border-r-4 border-b-2 border-c3"></div>
    </div>
  );
}
