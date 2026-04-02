import { Gavel, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuctionBadgeProps {
  type: "auction" | "fixed";
  className?: string;
}

export default function AuctionBadge({ type, className }: AuctionBadgeProps) {
  if (type === "auction") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground",
          className
        )}
      >
        <Gavel className="size-3" />
        경매
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-foreground backdrop-blur-sm",
        className
      )}
    >
      <Tag className="size-3" />
      일반
    </span>
  );
}
