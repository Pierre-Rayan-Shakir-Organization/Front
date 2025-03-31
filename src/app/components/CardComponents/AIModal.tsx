'use client';

import Image from 'next/image';

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
  name_artist: string;
  name_song: string;
  url_cover_album_big: string;
  theme: string;
  summary: string;
}

export default function AIModal({ isOpen, onClose, name_artist, name_song, url_cover_album_big, theme, summary }: AIModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white w-[80vw] h-[80vh] rounded-2xl p-8 relative overflow-hidden">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenu */}
        <div className="h-full flex flex-col lg:flex-row gap-8">
          {/* Partie gauche : Cover et infos */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center">
            <div className="relative w-96 h-96 mb-6">
              <Image
                src={url_cover_album_big}
                alt={`${name_artist} - ${name_song}`}
                fill
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
            <h3 className="text-3xl font-bold text-center mb-3">{name_song}</h3>
            <p className="text-2xl text-gray-600 text-center">{name_artist}</p>
          </div>

          {/* Partie droite : Thème et résumé */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-purple-800">Thème</h3>
              <p className="text-xl text-gray-700 leading-relaxed">{theme}</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-purple-800">Résumé</h3>
              <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line">
                {summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 