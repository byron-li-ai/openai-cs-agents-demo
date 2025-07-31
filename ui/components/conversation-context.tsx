"use client";

import { PanelSection } from "./panel-section";
import { Card, CardContent } from "@/components/ui/card";
import { BookText } from "lucide-react";

interface ConversationContextProps {
  context: {
    customer_name?: string;
    order_number?: string;
    product_name?: string;
    skin_tone?: string;
    skin_type?: string;
    account_number?: string;
    preference_category?: string;
  };
}

export function ConversationContext({ context }: ConversationContextProps) {
  return (
    <PanelSection
      title="Conversation Context"
      icon={<BookText className="h-4 w-4 text-pink-600" />}
    >
      <Card className="bg-gradient-to-r from-white to-pink-50 border-pink-200 shadow-sm">
        <CardContent className="p-3">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(context).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center gap-2 bg-white p-2 rounded-md border border-pink-200 shadow-sm transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                <div className="text-xs">
                  <span className="text-zinc-500 font-light">{key}:</span>{" "}
                  <span
                    className={
                      value
                        ? "text-zinc-900 font-light"
                        : "text-gray-400 italic"
                    }
                  >
                    {value || "null"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PanelSection>
  );
}