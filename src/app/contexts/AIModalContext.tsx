'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface AIModalContextType {
  isOpen: boolean;
  modalData: {
    name_artist: string;
    name_song: string;
    url_cover_album_big: string;
    theme: string;
    summary: string;
  } | null;
  openModal: (data: {
    name_artist: string;
    name_song: string;
    url_cover_album_big: string;
    theme: string;
    summary: string;
  }) => void;
  closeModal: () => void;
}

const AIModalContext = createContext<AIModalContextType | undefined>(undefined);

export function AIModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<AIModalContextType['modalData']>(null);

  const openModal = (data: AIModalContextType['modalData']) => {
    setModalData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return (
    <AIModalContext.Provider value={{ isOpen, modalData, openModal, closeModal }}>
      {children}
    </AIModalContext.Provider>
  );
}

export function useAIModal() {
  const context = useContext(AIModalContext);
  if (context === undefined) {
    throw new Error('useAIModal must be used within an AIModalProvider');
  }
  return context;
} 