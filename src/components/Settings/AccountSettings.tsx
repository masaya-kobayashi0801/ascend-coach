
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const AccountSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>アカウント設定</CardTitle>
          <CardDescription>
            アカウント情報を管理します
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">ユーザー名</Label>
            <Input id="username" defaultValue="yamada_taro" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" type="email" defaultValue="example@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="language">言語</Label>
            <Select defaultValue="ja">
              <SelectTrigger>
                <SelectValue placeholder="言語を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
                <SelectItem value="ko">한국어</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="timezone">タイムゾーン</Label>
            <Select defaultValue="asia-tokyo">
              <SelectTrigger>
                <SelectValue placeholder="タイムゾーンを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asia-tokyo">Asia/Tokyo (GMT+9)</SelectItem>
                <SelectItem value="america-la">America/Los_Angeles (GMT-7)</SelectItem>
                <SelectItem value="america-ny">America/New_York (GMT-4)</SelectItem>
                <SelectItem value="europe-london">Europe/London (GMT+1)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>セッション管理</Label>
            <div className="flex justify-between items-center">
              <span className="text-sm">自動ログアウト（非アクティブ時）</span>
              <Select defaultValue="60">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="時間を選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15分</SelectItem>
                  <SelectItem value="30">30分</SelectItem>
                  <SelectItem value="60">1時間</SelectItem>
                  <SelectItem value="never">無効</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button>保存する</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>パスワード変更</CardTitle>
          <CardDescription>
            アカウントセキュリティのためにパスワードを変更します
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">現在のパスワード</Label>
            <Input id="currentPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">新しいパスワード</Label>
            <Input id="newPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">新しいパスワード（確認）</Label>
            <Input id="confirmPassword" type="password" />
          </div>
          <Button>パスワードを変更</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSettings;
