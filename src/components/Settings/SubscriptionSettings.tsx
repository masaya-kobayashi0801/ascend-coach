
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { BadgeCheck, CheckCheck, Landmark } from "lucide-react";

const SubscriptionSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>サブスクリプション情報</CardTitle>
        <CardDescription>
          現在のプランと請求情報を確認します
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium flex items-center">
                <BadgeCheck className="h-5 w-5 text-coach-teal mr-2" />
                無料トライアル中
              </h3>
              <p className="text-sm text-muted-foreground">
                30日間の無料トライアル期間です
              </p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold">¥0 / 月</div>
              <div className="text-xs text-muted-foreground">
                終了日: 2025年5月12日
              </div>
            </div>
          </div>
          <div className="pt-4">
            <Button className="w-full">
              プロプランにアップグレード
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium">利用可能なプラン</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-2 border-primary">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">スタータープラン</CardTitle>
                <CardDescription>
                  個人フリーランス向け
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-2xl font-bold mb-4">¥980 <span className="text-sm font-normal text-muted-foreground">/ 月</span></div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>基本的なAIコーチング機能</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>目標・タスク管理</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>週次振り返り</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>基本レポート</span>
                  </li>
                </ul>
              </CardContent>
              <CardContent className="pt-0">
                <Button className="w-full">
                  選択する
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-coach-teal relative">
              <div className="absolute top-0 right-0 bg-coach-teal text-white text-xs px-2 py-1 rounded-bl-md">
                人気
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">プロフェッショナル</CardTitle>
                <CardDescription>
                  成長中のフリーランス向け
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-2xl font-bold mb-4">¥1,980 <span className="text-sm font-normal text-muted-foreground">/ 月</span></div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>高度なAIコーチング機能</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>無制限の目標・タスク</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>Slack連携</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>詳細な分析レポート</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>優先サポート</span>
                  </li>
                </ul>
              </CardContent>
              <CardContent className="pt-0">
                <Button className="w-full" variant="secondary">
                  選択する
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">エンタープライズ</CardTitle>
                <CardDescription>
                  ビジネスオーナー向け
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-2xl font-bold mb-4">¥4,980 <span className="text-sm font-normal text-muted-foreground">/ 月</span></div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>すべてのプロ機能</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>チーム管理機能</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>ビジネス戦略コーチング</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>カスタムインテグレーション</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCheck className="h-4 w-4 text-coach-teal mr-2 mt-0.5" />
                    <span>専任アカウントマネージャー</span>
                  </li>
                </ul>
              </CardContent>
              <CardContent className="pt-0">
                <Button className="w-full" variant="outline">
                  問い合わせる
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">お支払い方法</h3>
          <div className="rounded-md border p-4 mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="p-1 border rounded mr-4">
                  <Landmark className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">クレジットカード</p>
                  <p className="text-sm text-muted-foreground">•••• •••• •••• 4242</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">変更</Button>
            </div>
          </div>
          <div>
            <Button variant="outline" className="w-full">新しい支払い方法を追加</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionSettings;
