
import AppLayout from "@/components/Layout/AppLayout";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Input 
} from "@/components/ui/input";
import { 
  Label 
} from "@/components/ui/label";
import { 
  User,
  Building,
  Globe,
  Mail,
  Phone,
  Target,
  BarChart3,
  BookOpen,
  BrainCircuit,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const ProfilePage = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">プロフィール</h1>
          <p className="text-muted-foreground">
            あなたの情報を管理し、AIコーチングをカスタマイズします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="" alt="プロフィール画像" />
                    <AvatarFallback className="text-xl bg-coach-blue text-white">
                      YT
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">山田 太郎</h2>
                  <p className="text-sm text-muted-foreground mb-4">フリーランスWebデザイナー</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <Badge variant="outline">デザイン</Badge>
                    <Badge variant="outline">マーケティング</Badge>
                    <Badge variant="outline">コンサルティング</Badge>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>example@email.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>090-1234-5678</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span>山田デザイン事務所</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span>www.yamada-design.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Tabs defaultValue="personal">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="personal">
                  <User className="h-4 w-4 mr-2" /> 基本情報
                </TabsTrigger>
                <TabsTrigger value="business">
                  <Building className="h-4 w-4 mr-2" /> 事業情報
                </TabsTrigger>
                <TabsTrigger value="goals">
                  <Target className="h-4 w-4 mr-2" /> キャリア目標
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>基本情報</CardTitle>
                    <CardDescription>
                      あなたの個人情報を更新します
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">姓</Label>
                        <Input id="firstName" defaultValue="山田" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">名</Label>
                        <Input id="lastName" defaultValue="太郎" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス</Label>
                      <Input id="email" type="email" defaultValue="example@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">電話番号</Label>
                      <Input id="phone" defaultValue="090-1234-5678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">所在地</Label>
                      <Input id="location" defaultValue="東京都渋谷区" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">自己紹介</Label>
                      <Textarea id="bio" defaultValue="10年以上のデザイン経験を持つフリーランスWebデザイナー。UI/UXデザインとマーケティングが得意分野です。" />
                    </div>
                    <Button>保存する</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="business" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>事業情報</CardTitle>
                    <CardDescription>
                      あなたのビジネスに関する情報を更新します
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">事業名</Label>
                      <Input id="businessName" defaultValue="山田デザイン事務所" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">ウェブサイト</Label>
                      <Input id="website" defaultValue="www.yamada-design.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">業種</Label>
                      <Input id="industry" defaultValue="デザイン・マーケティング" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessStartDate">事業開始日</Label>
                      <Input id="businessStartDate" type="date" defaultValue="2020-01-01" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">事業内容</Label>
                      <Textarea id="description" defaultValue="ウェブデザイン、UI/UXデザイン、ブランディング、マーケティングコンサルティングなどのサービスを提供しています。" />
                    </div>
                    <Button>保存する</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="goals" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>キャリア目標</CardTitle>
                    <CardDescription>
                      あなたのキャリア目標と関心分野を設定します
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="careerVision">キャリアビジョン</Label>
                      <Textarea id="careerVision" defaultValue="デザインとマーケティングの両方で専門性を高め、クライアントのビジネス成長に貢献するコンサルタントとして認知されることを目指しています。" />
                    </div>
                    <div className="space-y-4">
                      <Label>興味のある分野</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 border p-3 rounded-md">
                          <BarChart3 className="h-5 w-5 text-coach-blue mt-0.5" />
                          <div>
                            <p className="font-medium">マーケティング戦略</p>
                            <p className="text-xs text-muted-foreground">データドリブンなマーケティング施策の立案と実行</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border p-3 rounded-md">
                          <BookOpen className="h-5 w-5 text-coach-blue mt-0.5" />
                          <div>
                            <p className="font-medium">UI/UXデザイン</p>
                            <p className="text-xs text-muted-foreground">ユーザー中心の使いやすいインターフェース設計</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border p-3 rounded-md">
                          <Globe className="h-5 w-5 text-coach-blue mt-0.5" />
                          <div>
                            <p className="font-medium">グローバル展開</p>
                            <p className="text-xs text-muted-foreground">海外クライアントとの取引拡大</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border p-3 rounded-md">
                          <BrainCircuit className="h-5 w-5 text-coach-blue mt-0.5" />
                          <div>
                            <p className="font-medium">AIと自動化</p>
                            <p className="text-xs text-muted-foreground">デザインプロセスへのAI活用</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="skills">強化したいスキル</Label>
                      <Textarea id="skills" defaultValue="データ分析、SEO、コンバージョン最適化、プレゼンテーションスキル" />
                    </div>
                    <Button>保存する</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
