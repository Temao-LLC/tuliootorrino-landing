import { createContext, useContext, type ReactNode } from 'react';

interface WhatsAppContextType {
  number: string;
}

const WhatsAppContext = createContext<WhatsAppContextType>({ number: '' });

export function WhatsAppProvider({ number, children }: { number: string; children: ReactNode }) {
  return (
    <WhatsAppContext.Provider value={{ number }}>
      {children}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp() {
  return useContext(WhatsAppContext);
}