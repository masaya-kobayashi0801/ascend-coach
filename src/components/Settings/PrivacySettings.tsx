
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const PrivacySettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>プライバシー設定</CardTitle>
        <CardDescription>
          データの収集と使用方法を管理します
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-sm">コーチングデータの保存</Label>
              <p className="text-xs text-muted-foreground">
                あなたとAIコーチの会話履歴を保存します
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-sm">分析とパーソナライゼーション</Label>
              <p className="text-xs text-muted-foreground">
                あなたの行動を分析してパーソナライズされた提案を提供します
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-sm">プロダクト改善のためのデータ共有</Label>
              <p className="text-xs text-muted-foreground">
                製品・サービス改善のために匿名化されたデータを共有します
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-sm">マーケティングメールの受信</Label>
              <p className="text-xs text-muted-foreground">
                製品やサービスに関する情報をメールで受け取ります
              </p>
            </div>
            <Switch />
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>データ保持期間</Label>
            <Select defaultValue="365">
              <SelectTrigger>
                <SelectValue placeholder="データ保持期間を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30日</SelectItem>
                <SelectItem value="90">90日</SelectItem>
                <SelectItem value="180">180日</SelectItem>
                <SelectItem value="365">365日</SelectItem>
                <SelectItem value="unlimited">無期限</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button variant="outline" className="w-full border-destructive text-destructive hover:bg-destructive/10">
            すべてのデータをリセット
          </Button>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium">データエクスポート</h3>
          <p className="text-xs text-muted-foreground">
            あなたのデータをエクスポートできます。これには目標、タスク、コーチングの会話履歴が含まれます。
          </p>
          <Button variant="outline" className="mt-2">
            データをエクスポート
          </Button>
        </div>
        
        <Button>設定を保存</Button>
      </CardContent>
    </Card>
  );
};

export default PrivacySettings;
