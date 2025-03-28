import './global.css';
import Navbar from './layoutComponents/Navbar';
import { AudioProvider } from './contexts/AudioContext.context';
import { AuthProvider } from './contexts/AuthContext.context';
import { UserProvider } from './contexts/UserContext'; // 

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>
          <UserProvider> 
            <AudioProvider>
              {children}
            </AudioProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
