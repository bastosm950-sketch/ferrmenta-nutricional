
import React from 'react';

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center text-white">
        <TargetIcon />
        <h1 className="ml-3 text-2xl md:text-3xl font-bold tracking-tight">
          Meta 72kg: Plano de Bem-Estar
        </h1>
      </div>
    </header>
  );
};

export default Header;
