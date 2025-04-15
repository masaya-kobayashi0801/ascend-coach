
import AppLayout from "@/components/Layout/AppLayout";
import SettingsTabs from "@/components/Settings/SettingsTabs";
import AccountSettings from "@/components/Settings/AccountSettings";
import NotificationSettings from "@/components/Settings/NotificationSettings";
import SubscriptionSettings from "@/components/Settings/SubscriptionSettings";
import PrivacySettings from "@/components/Settings/PrivacySettings";
import AICoachSettings from "@/components/Settings/AICoachSettings";

const SettingsPage = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">設定</h1>
          <p className="text-muted-foreground">
            アプリケーションの動作や表示をカスタマイズします。
          </p>
        </div>

        <SettingsTabs 
          accountContent={<AccountSettings />}
          notificationsContent={<NotificationSettings />}
          subscriptionContent={<SubscriptionSettings />}
          privacyContent={<PrivacySettings />}
          aiCoachContent={<AICoachSettings />}
        />
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
