
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Suggestion {
  id: string;
  text: string;
}

interface SuggestionCardProps {
  title: string;
  suggestions: Suggestion[];
  onSelectSuggestion: (text: string) => void;
}

const SuggestionCard = ({ title, suggestions, onSelectSuggestion }: SuggestionCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {suggestions.map((suggestion) => (
          <Button 
            key={suggestion.id} 
            variant="outline" 
            className="w-full justify-start text-left h-auto py-3 hover:bg-muted/50"
            onClick={() => onSelectSuggestion(suggestion.text)}
          >
            {suggestion.text}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default SuggestionCard;
