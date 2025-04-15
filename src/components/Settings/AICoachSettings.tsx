
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  Languages, 
  Clock, 
  Target, 
  BrainCircuit, 
  ChevronRight 
} from "lucide-react";

const AICoachSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AIコーチ設定</CardTitle>
        <CardDescription>
          AIコーチの挙動と対話スタイルをカスタマイズします
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>コーチングスタイル</Label>
            <RadioGroup defaultValue="balanced">
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="supportive" id="supportive" className="mt-1" />
                <div>
                  <Label htmlFor="supportive" className="text-sm">サポーティブ</Label>
                  <p className="text-xs text-muted-foreground">
                    優しく励ましながら導きます。プレッシャーが少なめです。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="balanced" id="balanced" className="mt-1" />
                <div>
                  <Label htmlFor="balanced" className="text-sm">バランス型</Label>
                  <p className="text-xs text-muted-foreground">
                    サポートとチャレンジのバランスがとれたスタイルです。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="challenging" id="challenging" className="mt-1" />
                <div>
                  <Label htmlFor="challenging" className="text-sm">チャレンジング</Label>
                  <p className="text-xs text-muted-foreground">
                    高い目標に向かってプッシュし、限界に挑戦します。
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label>コミュニケーション頻度</Label>
            <Select defaultValue="medium">
              <SelectTrigger>
                <SelectValue placeholder="頻度を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">低（週1-2回）</SelectItem>
                <SelectItem value="medium">中（週3-4回）</SelectItem>
                <SelectItem value="high">高（毎日）</SelectItem>
                <SelectItem value="custom">カスタム</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>専門分野の優先順位</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center justify-between rounded-md border p-4 hover:bg-muted/50 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-coach-blue" />
                  <span className="text-sm">ビジネススキル</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between rounded-md border p-4 hover:bg-muted/50 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-coach-blue" />
                  <span className="text-sm">時間管理</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between rounded-md border p-4 hover:bg-muted/50 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-coach-blue" />
                  <span className="text-sm">目標達成</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between rounded-md border p-4 hover:bg-muted/50 cursor-pointer">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4 text-coach-blue" />
                  <span className="text-sm">メンタル強化</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">AIパーソナライゼーション</h3>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">AIの学習</Label>
                <p className="text-xs text-muted-foreground">
                  あなたの好みを学び、より良いアドバイスを提供します
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">プロアクティブな提案</Label>
                <p className="text-xs text-muted-foreground">
                  質問がなくても、状況に応じた提案を表示します
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">対話のエンリッチメント</Label>
                <p className="text-xs text-muted-foreground">
                  より豊かで自然な会話体験を提供します
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
        
        <Button>設定を保存</Button>
      </CardContent>
    </Card>
  );
};

export default AICoachSettings;
