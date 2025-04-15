
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "こんにちは！AIコーチのAscendです。今日はどのようにサポートできますか？目標の設定、タスク管理、振り返りなど、お気軽にご相談ください。",
    sender: "ai",
    timestamp: new Date(),
  },
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponses: { [key: string]: string } = {
        "目標": "目標設定は素晴らしいですね！効果的な目標を立てるためには、具体的で測定可能、達成可能、関連性があり、期限を設けた（SMART）目標を設定することが重要です。例えば「3ヶ月以内に新規クライアントを3社獲得する」などです。目標設定画面で詳細に設定しましょう。まずは、あなたが達成したい最も重要なことは何ですか？",
        "タスク": "タスク管理は生産性向上の鍵です！優先順位をつけて、小さなタスクに分割することで達成感が得られます。タスク管理画面では、期限や優先度の設定も可能です。今週の重要なタスクは何ですか？",
        "振り返り": "定期的な振り返りは成長への重要なステップです。何がうまくいき、何に課題があったかを分析しましょう。振り返り画面では、週次・月次のレビューがサポートされています。最近のあなたの成果で誇れることはありますか？",
        "悩み": "フリーランスや経営者の道は時に孤独で困難なものです。具体的にはどのような悩みを抱えていますか？それを乗り越えるための戦略やマインドセットについてアドバイスできるかもしれません。",
        "時間": "時間管理は成功への重要な要素です。ポモドーロテクニックや時間ブロッキングなどの方法を試してみては？集中力を高め、生産性を上げるための時間管理のコツについてさらに詳しくご説明できます。"
      };

      let aiResponseText = "ありがとうございます。もう少し詳しく教えていただけますか？あなたの目標やタスク、課題についてよりよく理解することで、より適したアドバイスができます。";
      
      // Check if the input matches any key phrases
      for (const [key, response] of Object.entries(aiResponses)) {
        if (inputValue.includes(key)) {
          aiResponseText = response;
          break;
        }
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "message-bubble",
                message.sender === "ai" ? "ai-message" : "user-message"
              )}
            >
              {message.text}
            </div>
          ))}
          {isLoading && (
            <div className="message-bubble ai-message animate-pulse-soft">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="メッセージを入力..."
            className="min-h-[80px] resize-none"
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={inputValue.trim() === "" || isLoading}
            className="self-end"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
