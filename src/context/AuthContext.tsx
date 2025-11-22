import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  type: 'user' | 'provider';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string, type: 'user' | 'provider') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy user data
const dummyUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    type: 'user' as const
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    const foundUser = dummyUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const signup = (name: string, email: string, password: string, type: 'user' | 'provider') => {
    const newUser = {
      id: String(dummyUsers.length + 1),
      name,
      email,
      password,
      type
    };
    
    dummyUsers.push(newUser);
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};