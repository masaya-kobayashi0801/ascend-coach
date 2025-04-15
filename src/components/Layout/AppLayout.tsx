
import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { useToast } from "@/hooks/use-toast";
import { useLocation } from 'react-router-dom';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { toast } = useToast();
  const location = useLocation();

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        {location.pathname === '/' && (
          <div className="fixed top-4 right-4 z-10">
            <button
              onClick={() => {
                toast({
                  title: "トライアル中",
                  description: "初回無料トライアル期間です。購入するには設定に進んでください。",
                })
              }}
              className="px-4 py-1.5 bg-white shadow-md rounded-full text-sm font-medium text-coach-blue border border-gray-200 hover:bg-gray-50 transition"
            >
              無料トライアル中
            </button>
          </div>
        )}
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
