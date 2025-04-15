
import AppLayout from "@/components/Layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  PlusCircle, 
  Filter, 
  CheckCircle2, 
  Calendar, 
  Clock,
  Target,
  CheckSquare,
  Tag,
  MoreHorizontal
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  goal?: string;
  completed: boolean;
  tags: string[];
}

const TasksPage = () => {
  // Sample tasks data
  const tasks: Task[] = [
    {
      id: "1",
      title: "マーケティング戦略計画書の作成",
      dueDate: "今日",
      priority: "high",
      goal: "マーケティングスキル向上",
      completed: false,
      tags: ["マーケティング", "計画"]
    },
    {
      id: "2",
      title: "クライアントA社へ提案書送付",
      dueDate: "今日",
      priority: "high",
      goal: "月間収益30%アップ",
      completed: false,
      tags: ["クライアント", "提案"]
    },
    {
      id: "3",
      title: "週次タイムトラッキングのレビュー",
      dueDate: "明日",
      priority: "medium",
      goal: "ワークライフバランスの改善",
      completed: false,
      tags: ["時間管理", "レビュー"]
    },
    {
      id: "4",
      title: "ポートフォリオサイトの更新",
      dueDate: "2日後",
      priority: "medium",
      goal: "マーケティングスキル向上",
      completed: false,
      tags: ["ウェブサイト", "ポートフォリオ"]
    },
    {
      id: "5",
      title: "新規事業計画のリサーチ",
      dueDate: "3日後",
      priority: "low",
      goal: "新規事業の立ち上げ準備",
      completed: false,
      tags: ["リサーチ", "計画"]
    },
    {
      id: "6",
      title: "経費の精算",
      dueDate: "1週間後",
      priority: "low",
      completed: false,
      tags: ["経理", "管理"]
    },
    {
      id: "7",
      title: "SNSマーケティング資料を読む",
      dueDate: "昨日",
      priority: "medium",
      goal: "マーケティングスキル向上",
      completed: true,
      tags: ["学習", "マーケティング"]
    },
    {
      id: "8",
      title: "顧客フィードバックの分析",
      dueDate: "2日前",
      priority: "high",
      goal: "月間収益30%アップ",
      completed: true,
      tags: ["分析", "顧客"]
    },
  ];

  const todoTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  const priorityColors = {
    high: "text-red-500",
    medium: "text-amber-500",
    low: "text-green-500"
  };

  const TaskItem = ({ task }: { task: Task }) => {
    return (
      <div className={cn(
        "flex items-center justify-between p-3 border rounded-md mb-2 hover:bg-muted/50 transition-colors",
        task.completed && "bg-muted/30"
      )}>
        <div className="flex items-center gap-3">
          <Checkbox id={`task-${task.id}`} checked={task.completed} />
          <div>
            <label 
              htmlFor={`task-${task.id}`}
              className={cn(
                "text-sm font-medium cursor-pointer",
                task.completed && "line-through text-muted-foreground"
              )}
            >
              {task.title}
            </label>
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{task.dueDate}</span>
              </div>
              {task.goal && (
                <div className="flex items-center gap-1">
                  <Target className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{task.goal}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Clock className={cn("h-3 w-3", priorityColors[task.priority])} />
                <span className={cn("text-xs", priorityColors[task.priority])}>
                  {task.priority === "high" ? "高" : task.priority === "medium" ? "中" : "低"}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {task.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs px-1 py-0">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>編集</DropdownMenuItem>
            <DropdownMenuItem>優先度変更</DropdownMenuItem>
            <DropdownMenuItem>タグ編集</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">削除</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">タスク管理</h1>
            <p className="text-muted-foreground">
              計画的にタスクを管理し、効率的に目標達成を目指しましょう。
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              フィルター
            </Button>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              新しいタスク
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>タスクリスト</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="todo">
              <TabsList className="mb-4">
                <TabsTrigger value="todo" className="flex gap-2">
                  <CheckSquare className="h-4 w-4" />
                  未完了 <Badge>{todoTasks.length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="completed" className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  完了済み <Badge>{completedTasks.length}</Badge>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="todo" className="space-y-2">
                {todoTasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </TabsContent>
              <TabsContent value="completed" className="space-y-2">
                {completedTasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default TasksPage;
