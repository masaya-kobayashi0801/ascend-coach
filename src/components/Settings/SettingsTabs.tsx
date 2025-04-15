
import { ReactNode } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Settings as SettingsIcon,
  Bell,
  CreditCard,
  Shield,
  Bot
} from "lucide-react";

interface SettingsTabsProps {
  accountContent: ReactNode;
  notificationsContent: ReactNode;
  subscriptionContent: ReactNode;
  privacyContent: ReactNode;
  aiCoachContent: ReactNode;
}

const SettingsTabs = ({
  accountContent,
  notificationsContent,
  subscriptionContent,
  privacyContent,
  aiCoachContent
}: SettingsTabsProps) => {
  return (
    <Tabs defaultValue="account">
      <div className="flex flex-col sm:flex-row gap-6">
        <TabsList className="flex flex-col h-auto p-2 bg-muted space-y-1 rounded-md w-full sm:w-48">
          <TabsTrigger 
            value="account" 
            className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-background"
          >
            <SettingsIcon className="h-4 w-4 mr-2" />
            アカウント
          </TabsTrigger>
          <TabsTrigger 
            value="notifications" 
            className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-background"
          >
            <Bell className="h-4 w-4 mr-2" />
            通知
          </TabsTrigger>
          <TabsTrigger 
            value="subscription" 
            className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-background"
          >
            <CreditCard className="h-4 w-4 mr-2" />
            サブスクリプション
          </TabsTrigger>
          <TabsTrigger 
            value="privacy" 
            className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-background"
          >
            <Shield className="h-4 w-4 mr-2" />
            プライバシー
          </TabsTrigger>
          <TabsTrigger 
            value="ai" 
            className="w-full justify-start px-4 py-3 h-auto data-[state=active]:bg-background"
          >
            <Bot className="h-4 w-4 mr-2" />
            AIコーチ設定
          </TabsTrigger>
        </TabsList>
        
        <div className="flex-1">
          <TabsContent value="account" className="mt-0">
            {accountContent}
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-0">
            {notificationsContent}
          </TabsContent>
          
          <TabsContent value="subscription" className="mt-0">
            {subscriptionContent}
          </TabsContent>
          
          <TabsContent value="privacy" className="mt-0">
            {privacyContent}
          </TabsContent>
          
          <TabsContent value="ai" className="mt-0">
            {aiCoachContent}
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
};

export default SettingsTabs;
