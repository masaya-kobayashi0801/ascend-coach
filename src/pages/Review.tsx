
import AppLayout from "@/components/Layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { 
  RotateCcw, 
  Calendar, 
  ArrowRight,
  CheckCircle2,
  XCircle,
  ThumbsUp,
  LineChart,
  Target,
  TrendingUp,
  Clock
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const ReviewPage = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">振り返り</h1>
            <p className="text-muted-foreground">
              定期的な振り返りで成果を確認し、今後の戦略を練りましょう。
            </p>
          </div>
          <Button>
            <RotateCcw className="h-4 w-4 mr-2" />
            新しい振り返りを始める
          </Button>
        </div>

        <Tabs defaultValue="weekly">
          <TabsList className="mb-6">
            <TabsTrigger value="weekly">週次振り返り</TabsTrigger>
            <TabsTrigger value="monthly">月次振り返り</TabsTrigger>
            <TabsTrigger value="quarterly">四半期振り返り</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="md:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>最新の週次振り返り</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>2025年4月1日 〜 4月7日</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" /> 
                      今週の成果
                    </h3>
                    <ul className="space-y-2 text-sm pl-6 list-disc">
                      <li>新規クライアント2社との契約を締結</li>
                      <li>マーケティングスキル向上のためのオンラインコース2つを完了</li>
                      <li>ウェブサイトのデザインリニューアルを完了</li>
                      <li>週間のタスク完了率85%を達成</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" /> 
                      課題と改善点
                    </h3>
                    <ul className="space-y-2 text-sm pl-6 list-disc">
                      <li>会議の準備時間が不足していた</li>
                      <li>SNS投稿の更新スケジュールが遅れがち</li>
                      <li>平均作業時間が目標より2時間/日多かった</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4 text-blue-500" /> 
                      来週の改善策
                    </h3>
                    <ul className="space-y-2 text-sm pl-6 list-disc">
                      <li>会議の1日前にアラームを設定し、準備時間を確保</li>
                      <li>SNS投稿をバッチ処理し、週初めにスケジュール設定</li>
                      <li>18時以降の作業を制限し、ワークライフバランスを改善</li>
                      <li>朝の集中時間帯に重要タスクを優先する</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">週間目標達成率</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">85%</div>
                    <Progress value={85} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      先週より12%向上
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">週間生産性スコア</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">73/100</div>
                    <Progress value={73} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      時間管理の改善が必要
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">コンスタント度</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">90%</div>
                    <Progress value={90} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      計画通りの作業継続性
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">過去の週次振り返り</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { 
                      id: "1", 
                      period: "3月25日 〜 3月31日", 
                      achievement: 73, 
                      highlights: "クライアントプレゼン成功"
                    },
                    { 
                      id: "2", 
                      period: "3月18日 〜 3月24日", 
                      achievement: 68, 
                      highlights: "新規ウェブサイト構築開始"
                    },
                    { 
                      id: "3", 
                      period: "3月11日 〜 3月17日", 
                      achievement: 81, 
                      highlights: "マーケティング戦略完成"
                    },
                  ].map(review => (
                    <div key={review.id} className="border rounded-md p-3 hover:bg-muted/50 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{review.period}</span>
                        <span className={cn(
                          "text-xs px-1.5 py-0.5 rounded",
                          review.achievement >= 80 ? "bg-green-100 text-green-800" :
                          review.achievement >= 60 ? "bg-amber-100 text-amber-800" :
                          "bg-red-100 text-red-800"
                        )}>
                          {review.achievement}%
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {review.highlights}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">トレンド分析</CardTitle>
                  <CardDescription>過去4週間の主要指標</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-100 rounded-md">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">目標達成率</p>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-green-500" />
                          <span className="text-xs text-green-500">11% 上昇</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-teal-100 rounded-md">
                        <LineChart className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">生産性スコア</p>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-green-500" />
                          <span className="text-xs text-green-500">8% 上昇</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-amber-100 rounded-md">
                        <CheckCircle2 className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">タスク完了率</p>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-green-500" />
                          <span className="text-xs text-green-500">15% 上昇</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-purple-100 rounded-md">
                        <Clock className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">平均作業時間</p>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-red-500 rotate-180" />
                          <span className="text-xs text-red-500">5% 減少</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chart placeholder */}
                  <div className="h-48 bg-muted/30 rounded-md flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      週別パフォーマンスチャート
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="monthly">
            <Card>
              <CardContent className="p-10 text-center">
                <RotateCcw className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">月次振り返りを開始しましょう</h3>
                <p className="text-muted-foreground mb-6">
                  月間の成果を振り返り、長期的な目標への進捗を確認します。
                </p>
                <Button>
                  新しい月次振り返りを始める
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="quarterly">
            <Card>
              <CardContent className="p-10 text-center">
                <RotateCcw className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">四半期振り返りを開始しましょう</h3>
                <p className="text-muted-foreground mb-6">
                  四半期の成果を評価し、戦略的な方向性を確認します。
                </p>
                <Button>
                  新しい四半期振り返りを始める
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default ReviewPage;
