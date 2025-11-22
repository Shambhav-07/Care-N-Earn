import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, UserCircle, Briefcase, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: 'User Dashboard',
      icon: <UserCircle className="w-5 h-5" />,
      path: '/dashboard/user',
      show: true,
    },
    {
      title: 'Provider Dashboard',
      icon: <Briefcase className="w-5 h-5" />,
      path: '/dashboard/provider',
      show: true,
    },
    {
      title: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      path: '/settings',
      show: true,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold">
              {user?.picture ? (
                <img src={user.picture} alt={user.name} className="w-10 h-10 rounded-full" />
              ) : (
                user?.initials
              )}
            </div>
            <div>
              <p className="font-semibold">{user?.name}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              item.show && (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-3 w-full px-4 py-2 text-sm rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  {item.title}
                </button>
              )
            ))}

            <button
              onClick={logout}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}