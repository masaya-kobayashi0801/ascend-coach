
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const NotificationSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>通知設定</CardTitle>
        <CardDescription>
          通知の受け取り方法を設定します
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">通知メディア</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">メール通知</Label>
                <p className="text-xs text-muted-foreground">
                  重要な更新をメールで受け取る
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">プッシュ通知</Label>
                <p className="text-xs text-muted-foreground">
                  アプリからのプッシュ通知を受け取る
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">Slack通知</Label>
                <p className="text-xs text-muted-foreground">
                  Slackで通知を受け取る
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h3 className="text-sm font-medium">通知タイプ</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">目標リマインダー</Label>
                <p className="text-xs text-muted-foreground">
                  目標の期限や進捗に関するリマインダー
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">タスクアラート</Label>
                <p className="text-xs text-muted-foreground">
                  タスクの期限や完了に関する通知
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">AIコーチのアドバイス</Label>
                <p className="text-xs text-muted-foreground">
                  AIコーチからのアドバイスや提案
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">システム通知</Label>
                <p className="text-xs text-muted-foreground">
                  アップデートやメンテナンス情報
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <Label>通知頻度</Label>
          <RadioGroup defaultValue="daily">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="realtime" id="realtime" />
              <Label htmlFor="realtime">リアルタイム</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="daily" />
              <Label htmlFor="daily">1日1回まとめて</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="weekly" />
              <Label htmlFor="weekly">週1回まとめて</Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button>保存する</Button>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
