
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Target, CheckSquare, RotateCcw, MessageSquare, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      name: 'ダッシュボード', 
      icon: <LayoutDashboard className="h-5 w-5" />, 
      href: '/' 
    },
    { 
      name: '目標設定', 
      icon: <Target className="h-5 w-5" />, 
      href: '/goals' 
    },
    { 
      name: 'タスク管理', 
      icon: <CheckSquare className="h-5 w-5" />, 
      href: '/tasks' 
    },
    { 
      name: '振り返り', 
      icon: <RotateCcw className="h-5 w-5" />, 
      href: '/review' 
    },
    { 
      name: 'AIコーチ', 
      icon: <MessageSquare className="h-5 w-5" />, 
      href: '/coach' 
    },
  ];

  const bottomNavItems = [
    { 
      name: 'プロフィール', 
      icon: <User className="h-5 w-5" />, 
      href: '/profile' 
    },
    { 
      name: '設定', 
      icon: <Settings className="h-5 w-5" />, 
      href: '/settings' 
    },
  ];

  const NavLink = ({ item }: { item: { name: string; icon: JSX.Element; href: string } }) => {
    const isActive = location.pathname === item.href;
    
    return (
      <Link 
        to={item.href} 
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
          isActive 
            ? "bg-coach-navy text-white" 
            : "text-gray-300 hover:bg-coach-blue/20 hover:text-white"
        )}
      >
        {item.icon}
        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    <aside className="w-64 bg-coach-blue flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="bg-white p-1.5 rounded-md">
            <Target className="h-6 w-6 text-coach-blue" />
          </div>
          <h1 className="text-white text-xl font-bold">Ascend Coach</h1>
        </div>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </nav>
      <div className="p-4 border-t border-coach-navy">
        <div className="space-y-1">
          {bottomNavItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
