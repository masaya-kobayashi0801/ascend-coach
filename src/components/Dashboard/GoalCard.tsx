
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface GoalCardProps {
  title: string;
  description: string;
  progress: number;
  dueDate: string;
}

const GoalCard = ({ title, description, progress, dueDate }: GoalCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{progress}% 完了</span>
            <span className="text-xs text-muted-foreground">期限: {dueDate}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter>
        <Link to="/goals" className="w-full">
          <Button variant="outline" className="w-full">
            詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GoalCard;
