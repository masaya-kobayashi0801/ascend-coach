
import AppLayout from "@/components/Layout/AppLayout";
import ProgressCard from "@/components/Dashboard/ProgressCard";
import ActivityCard from "@/components/Dashboard/ActivityCard";
import GoalCard from "@/components/Dashboard/GoalCard";
import QuickActionCard from "@/components/Dashboard/QuickActionCard";
import { Target, CheckSquare, RotateCcw, MessageSquare, Clock, TrendingUp } from "lucide-react";

const Dashboard = () => {
  // Sample data
  const recentActivities = [
    { id: "1", title: "目標「マーケティングスキル向上」を作成", time: "今日 09:15", completed: true },
    { id: "2", title: "タスク「ポートフォリオ更新」を完了", time: "今日 11:30", completed: true },
    { id: "3", title: "週次振り返りを実施", time: "昨日 18:45", completed: true },
    { id: "4", title: "AIコーチと目標について相談", time: "2日前", completed: true },
  ];

  const upcomingTasks = [
    { id: "1", title: "クライアントMTG準備", time: "今日 15:00" },
    { id: "2", title: "経費精算書類作成", time: "明日 12:00" },
    { id: "3", title: "新規事業計画書作成", time: "2日後" },
    { id: "4", title: "月次振り返り", time: "3日後" },
  ];

  const quickActions = [
    { 
      id: "1", 
      title: "新しい目標を設定する", 
      icon: <Target className="h-4 w-4" />, 
      href: "/goals"
    },
    { 
      id: "2", 
      title: "タスクを追加する", 
      icon: <CheckSquare className="h-4 w-4" />, 
      href: "/tasks"
    },
    { 
      id: "3", 
      title: "週次振り返りを行う", 
      icon: <RotateCcw className="h-4 w-4" />, 
      href: "/review"
    },
    { 
      id: "4", 
      title: "AIコーチに相談する", 
      icon: <MessageSquare className="h-4 w-4" />, 
      href: "/coach"
    },
  ];

  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">ダッシュボード</h1>
          <p className="text-muted-foreground">
            こんにちは、山田様。今日も素晴らしい一日になりますように。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProgressCard 
            title="目標達成率" 
            value={68} 
            icon={<Target className="h-4 w-4 text-coach-teal" />}
            description="4つの目標中3つが進行中"
          />
          <ProgressCard 
            title="タスク完了率" 
            value={75} 
            icon={<CheckSquare className="h-4 w-4 text-coach-teal" />}
            description="今週のタスク12個中9個完了"
          />
          <ProgressCard 
            title="生産性スコア" 
            value={82} 
            icon={<Clock className="h-4 w-4 text-coach-teal" />}
            description="先週より5%上昇"
          />
          <ProgressCard 
            title="成長指標" 
            value={64} 
            icon={<TrendingUp className="h-4 w-4 text-coach-teal" />}
            description="スキル向上と目標達成の総合評価"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ActivityCard title="最近のアクティビティ" items={recentActivities} />
          <ActivityCard title="今後のタスク" items={upcomingTasks} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GoalCard 
            title="マーケティングスキル向上" 
            description="デジタルマーケティングの基本を学び、実践的なスキルを身につける" 
            progress={45} 
            dueDate="2025/6/30"
          />
          <GoalCard 
            title="月間収益30%アップ" 
            description="新規顧客獲得と既存顧客の単価向上を通じて収益を増加させる" 
            progress={60} 
            dueDate="2025/5/31"
          />
          <QuickActionCard title="クイックアクション" actions={quickActions} />
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
