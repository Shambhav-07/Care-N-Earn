import React, { useState, useRef, useEffect } from 'react';
import { LogOut, Settings, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface UserMenuProps {
  initials: string;
  name: string;
}

export default function UserMenu({ initials, name }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold text-sm">
          {initials}
        </div>
        <span className="text-gray-700">{name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">Dashboard</p>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/dashboard/user');
              }}
              className="w-full text-left px-2 py-1 mt-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
            >
              User Dashboard
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/dashboard/provider');
              }}
              className="w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
            >
              Provider Dashboard
            </button>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/settings');
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}