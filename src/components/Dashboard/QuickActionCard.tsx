
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface QuickAction {
  id: string;
  title: string;
  icon: ReactNode;
  href: string;
}

interface QuickActionCardProps {
  title: string;
  actions: QuickAction[];
}

const QuickActionCard = ({ title, actions }: QuickActionCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-3">
        {actions.map((action) => (
          <Link key={action.id} to={action.href} className="w-full">
            <Button
              variant="outline"
              className="w-full justify-start gap-2 hover:bg-muted/50"
            >
              {action.icon}
              {action.title}
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickActionCard;
