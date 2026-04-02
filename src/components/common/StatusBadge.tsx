import { cn } from "@/lib/utils";

type Status = "active" | "sold" | "closed" | "reserve_not_met";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const STATUS_CONFIG: Record<Status, { label: string; className: string }> = {
  active: {
    label: "진행중",
    className: "bg-emerald-500 text-white",
  },
  sold: {
    label: "낙찰",
    className: "bg-primary text-primary-foreground",
  },
  closed: {
    label: "마감",
    className: "bg-black/65 text-white",
  },
  reserve_not_met: {
    label: "유찰",
    className: "bg-orange-500 text-white",
  },
};

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const { label, className: statusClass } = STATUS_CONFIG[status];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold backdrop-blur-sm",
        statusClass,
        className
      )}
    >
      {label}
    </span>
  );
}
