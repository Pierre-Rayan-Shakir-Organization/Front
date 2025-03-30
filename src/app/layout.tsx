import './global.css';
import Navbar from './layoutComponents/Navbar';
import { AudioProvider } from './contexts/AudioContext.context';
import { AuthProvider } from './contexts/AuthContext.context';
import { UserProvider } from './contexts/UserContext'; // 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>
          <UserProvider> 
            <AudioProvider>
              {children}
              <ToastContainer />
            </AudioProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
