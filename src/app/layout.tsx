import './global.css';
import Navbar from './layoutComponents/Navbar';
import { AudioProvider } from './contexts/AudioContext.context';
import { AuthProvider } from './contexts/AuthContext.context';
import { UserProvider } from './contexts/UserContext'; // 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AIModalProvider } from "./contexts/AIModalContext";
import GlobalAIModal from "./components/CardComponents/GlobalAIModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FiveMusics",
  description: "Partagez vos musiques préférées",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>
          <UserProvider> 
            <AudioProvider>
              <AIModalProvider>
                {children}
                <ToastContainer />
                <GlobalAIModal />
              </AIModalProvider>
            </AudioProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
