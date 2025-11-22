import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Phone, Settings, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function HamburgerSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <Briefcase size={20} />, label: 'Services', path: '/services' },
    { icon: <Phone size={20} />, label: 'Contact', path: '/contact' },
  ];

  const authenticatedItems = [
    { 
      icon: <User size={20} />, 
      label: 'Dashboard', 
      path: user?.type === 'provider' ? '/dashboard/provider' : '/dashboard/user'
    },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  if (location.pathname === '/login') return null;

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <div className="absolute top-0 left-0 p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[90]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[95] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-emerald-700">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {user && (
            <div className="mb-6 p-4 bg-emerald-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold">
                  {user.picture ? (
                    <img src={user.picture} alt={user.name} className="w-10 h-10 rounded-full" />
                  ) : (
                    user.initials
                  )}
                </div>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          )}

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}

            {user && (
              <>
                <div className="my-4 border-t border-gray-200" />
                {authenticatedItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HamburgerSidebar;