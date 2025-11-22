import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserDashboard from './pages/UserDashboard';
import ProviderDashboard from './pages/ProviderDashboard';
import StartEarning from './pages/StartEarning';
import Contact from './pages/Contact';
import HamburgerSidebar from './components/HamburgerSidebar';
import LoadingScreen from './components/LoadingScreen';
import { JobProvider } from './context/JobContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import UserMenu from './components/UserMenu';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import Footer from './components/Footer';
import { useAuth } from './context/AuthContext';
import { useLanguage } from './context/LanguageContext';

function Navigation() {
  const { user } = useAuth();
  const { t } = useLanguage();

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700 bg-white dark:bg-gray-900">
      <Link to="/" className="flex items-center gap-2 text-2xl font-semibold text-emerald-700 dark:text-emerald-500 ml-12">
        <img
          src="/Logo.png"
          alt="Care & Earn"
          className="w-8 h-8"
        />
        Care&Earn
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500">
          {t('services')}
        </Link>
        <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500">
          {t('contact')}
        </Link>
        <LanguageToggle />
        <ThemeToggle />
        {!user && (
          <Link to="/start-earning" className="text-white bg-emerald-600 px-4 py-2 rounded-md hover:bg-emerald-700">
            {t('startEarning')}
          </Link>
        )}
        {user ? (
          <UserMenu 
            name={user.name} 
            initials={user.name.charAt(0).toUpperCase()} 
          />
        ) : (
          <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500">
            {t('login')}/{t('signup')}
          </Link>
        )}
      </div>
    </nav>
  );
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider>
          <AuthProvider>
            <JobProvider>
              <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col transition-colors duration-200">
                <HamburgerSidebar />
                <Navigation />
                <div className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/start-earning" element={<StartEarning />} />
                    <Route 
                      path="/dashboard/user" 
                      element={
                        <ProtectedRoute>
                          <UserDashboard />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/dashboard/provider" 
                      element={
                        <ProtectedRoute>
                          <ProviderDashboard />
                        </ProtectedRoute>
                      } 
                    />
                  </Routes>
                </div>
                <Footer />
              </div>
            </JobProvider>
          </AuthProvider>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App