
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-8 py-4 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        <p>Gerado com a ajuda da API Gemini da Google.</p>
        <p>&copy; {new Date().getFullYear()} Meta 72kg. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
