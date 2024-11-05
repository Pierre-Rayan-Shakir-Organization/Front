import './global.css'
import Navbar from './layoutComponents/Navbar';
import { AudioProvider } from './contexts/AudioContext.context';
import { AuthProvider } from './contexts/AuthContext.context';

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>
          <AudioProvider>
            {children}
          </AudioProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
