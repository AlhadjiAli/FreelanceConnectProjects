import React from 'react';
import { motion } from 'framer-motion';

const ClientSection = () => {
  const clients = [
    { id: 1, name: 'Client 1', logo: 'https://mljkcieoyau1.i.optimole.com/w:960/h:960/q:mauto/ig:avif/https://accentmedia.cm/wp-content/uploads/2024/08/logo-ACCENT-png_Plan-de-travail-1-copie.png' },
    { id: 2, name: 'Client 2', logo: 'https://globallogistics.cm/assets/img/logo-2.png' },
    { id: 3, name: 'Client 3', logo: 'assets/images/client/logo-ga.png' },
    { id: 5, name: 'Client 5', logo: 'assets/images/client/logo-gb.png' },
    { id: 6, name: 'Client 6', logo: 'assets/images/client/nsani-care.png' }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* En-tête fixe */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">
          Nos Clients
        </h2>
        <p className="text-lg text-gray-300 mt-2">
          Ils nous font confiance
        </p>
      </div>

      {/* Conteneur du carousel */}
      <div className="relative overflow-hidden">
        <div className="animate-scroll flex whitespace-nowrap gap-8 py-4">
          {/* Double array pour une boucle infinie */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="inline-flex flex-none w-40 h-24 bg-white/5 backdrop-blur rounded-lg items-center justify-center p-4"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientSection;