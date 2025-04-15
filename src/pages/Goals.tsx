
import AppLayout from "@/components/Layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  PlusCircle, 
  Target, 
  CheckCircle2, 
  Clock, 
  MoreHorizontal,
  ChevronRight
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const GoalsPage = () => {
  // Sample goals data
  const goals = [
    {
      id: "1",
      title: "マーケティングスキル向上",
      description: "デジタルマーケティングの基本を学び、実践的なスキルを身につける",
      progress: 45,
      startDate: "2025/4/1",
      dueDate: "2025/6/30",
      tasks: 8,
      completedTasks: 3,
    },
    {
      id: "2",
      title: "月間収益30%アップ",
      description: "新規顧客獲得と既存顧客の単価向上を通じて収益を増加させる",
      progress: 60,
      startDate: "2025/4/1",
      dueDate: "2025/5/31",
      tasks: 10,
      completedTasks: 6,
    },
    {
      id: "3",
      title: "ワークライフバランスの改善",
      description: "効率的な業務体制を構築し、週あたりの労働時間を20%削減する",
      progress: 25,
      startDate: "2025/4/1",
      dueDate: "2025/7/31",
      tasks: 6,
      completedTasks: 1,
    },
    {
      id: "4",
      title: "新規事業の立ち上げ準備",
      description: "新しいサービスラインのビジネスプランと実行計画を作成する",
      progress: 15,
      startDate: "2025/4/15",
      dueDate: "2025/9/30",
      tasks: 12,
      completedTasks: 2,
    },
  ];

  return (
    <AppLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">目標設定</h1>
            <p className="text-muted-foreground">
              あなたの長期的な成功につながる目標を設定し、管理しましょう。
            </p>
          </div>
          <Button>
            <PlusCircle className="h-4 w-4 mr-2" />
            新しい目標
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map((goal) => (
            <Card key={goal.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{goal.title}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>編集</DropdownMenuItem>
                      <DropdownMenuItem>タスクを追加</DropdownMenuItem>
                      <DropdownMenuItem>AIコーチに相談</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">削除</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CardDescription className="line-clamp-2">
                  {goal.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{goal.progress}% 完了</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-coach-blue" />
                    <div className="text-sm">
                      <p className="text-muted-foreground">期間</p>
                      <p>{goal.startDate} 〜 {goal.dueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coach-blue" />
                    <div className="text-sm">
                      <p className="text-muted-foreground">タスク</p>
                      <p>{goal.completedTasks} / {goal.tasks} 完了</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/goals/${goal.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    詳細を見る <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default GoalsPage;
