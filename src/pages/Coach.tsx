
import AppLayout from "@/components/Layout/AppLayout";
import ChatInterface from "@/components/Coach/ChatInterface";
import SuggestionCard from "@/components/Coach/SuggestionCard";
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Target, CheckSquare, RotateCcw, Clock, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const CoachPage = () => {
  const [inputValue, setInputValue] = useState("");

  const goalSuggestions = [
    { id: "1", text: "効果的な目標設定の方法を教えてください" },
    { id: "2", text: "自分の強みを活かした目標を考えたいです" },
    { id: "3", text: "長期目標と短期目標のバランスについてアドバイスください" },
  ];

  const taskSuggestions = [
    { id: "1", text: "タスクの優先順位付けのコツを教えてください" },
    { id: "2", text: "締め切りプレッシャーへの対処法を知りたいです" },
    { id: "3", text: "複雑なプロジェクトの分解方法を教えてください" },
  ];

  const timeSuggestions = [
    { id: "1", text: "作業効率を上げる時間管理術を教えてください" },
    { id: "2", text: "朝の時間を有効活用する方法は？" },
    { id: "3", text: "ディープワークの実践方法について知りたいです" },
  ];

  const motivationSuggestions = [
    { id: "1", text: "モチベーションが下がったときの対処法は？" },
    { id: "2", text: "自己成長を続けるためのヒントを教えてください" },
    { id: "3", text: "ネガティブな考えから抜け出す方法を知りたいです" },
  ];

  const handleSelectSuggestion = (text: string) => {
    setInputValue(text);
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AIコーチ</h1>
          <p className="text-muted-foreground">
            あなた専用のAIコーチと対話して、目標達成をサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="h-[calc(100vh-12rem)]">
              <ChatInterface />
            </Card>
          </div>
          
          <div className="space-y-6">
            <Tabs defaultValue="goals">
              <TabsList className="w-full">
                <TabsTrigger value="goals" className="flex-1">
                  <Target className="h-4 w-4 mr-2" /> 目標
                </TabsTrigger>
                <TabsTrigger value="tasks" className="flex-1">
                  <CheckSquare className="h-4 w-4 mr-2" /> タスク
                </TabsTrigger>
                <TabsTrigger value="time" className="flex-1">
                  <Clock className="h-4 w-4 mr-2" /> 時間管理
                </TabsTrigger>
                <TabsTrigger value="motivation" className="flex-1">
                  <BrainCircuit className="h-4 w-4 mr-2" /> モチベーション
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="goals">
                <SuggestionCard 
                  title="目標設定について質問" 
                  suggestions={goalSuggestions}
                  onSelectSuggestion={handleSelectSuggestion}
                />
              </TabsContent>
              
              <TabsContent value="tasks">
                <SuggestionCard 
                  title="タスク管理について質問" 
                  suggestions={taskSuggestions}
                  onSelectSuggestion={handleSelectSuggestion}
                />
              </TabsContent>
              
              <TabsContent value="time">
                <SuggestionCard 
                  title="時間管理について質問" 
                  suggestions={timeSuggestions}
                  onSelectSuggestion={handleSelectSuggestion}
                />
              </TabsContent>
              
              <TabsContent value="motivation">
                <SuggestionCard 
                  title="モチベーションについて質問" 
                  suggestions={motivationSuggestions}
                  onSelectSuggestion={handleSelectSuggestion}
                />
              </TabsContent>
            </Tabs>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">コーチとの連携</CardTitle>
                <CardDescription>
                  他のツールと連携してコーチングを強化
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg">
                    <g clipRule="evenodd" fillRule="evenodd">
                      <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"/>
                      <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"/>
                      <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"/>
                      <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"/>
                    </g>
                  </svg>
                  Slackと連携する
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path fill="#00c300" d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"/>
                    <path fill="#fff" d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.309-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"/>
                  </svg>
                  LINEと連携する
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#0077b5"/>
                  </svg>
                  LinkedInと連携する
                </Button>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  コーチング履歴をエクスポート
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CoachPage;
