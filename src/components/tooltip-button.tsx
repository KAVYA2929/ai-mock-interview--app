import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

// Define button variant types
type ButtonVariant =
  | "ghost"
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | null
  | undefined;

interface TooltipButtonProps {
  content: string;
  icon: React.ReactNode;
  onClick: () => void;
  buttonVariant?: ButtonVariant;
  buttonClassName?: string;
  delay?: number;
  disabled?: boolean;
  loading?: boolean;
}

export const TooltipButton = ({
  content,
  icon,
  onClick,
  buttonVariant = "ghost",
  buttonClassName = "",
  delay = 0,
  disabled = false,
  loading = false,
}: TooltipButtonProps) => {
  return (
    <TooltipProvider delayDuration={delay}>
      <Tooltip>
        {/* ✅ Fix: Added asChild to prevent TooltipTrigger from being a <button> */}
        <TooltipTrigger asChild>
          <span> {/* ✅ Fix: Wraps button in a <span> to prevent button nesting */}
            <Button
              size="icon"
              disabled={disabled}
              variant={buttonVariant}
              className={buttonClassName}
              onClick={onClick}
            >
              {loading ? (
                <Loader className="min-w-4 min-h-4 animate-spin text-emerald-400" />
              ) : (
                icon
              )}
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{loading ? "Loading..." : content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
