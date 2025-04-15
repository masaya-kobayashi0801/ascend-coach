
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ActivityItem {
  id: string;
  title: string;
  time: string;
  completed?: boolean;
}

interface ActivityCardProps {
  title: string;
  items: ActivityItem[];
}

const ActivityCard = ({ title, items }: ActivityCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-2">
              {item.completed && (
                <CheckCircle2 className="h-4 w-4 text-coach-teal" />
              )}
              <span className={item.completed ? "line-through text-muted-foreground" : ""}>
                {item.title}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">{item.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
