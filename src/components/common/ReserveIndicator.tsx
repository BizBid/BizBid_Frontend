import { ShieldCheck, ShieldAlert } from "lucide-react";

interface ReserveIndicatorProps {
  met: boolean;
}

export default function ReserveIndicator({ met }: ReserveIndicatorProps) {
  if (met) {
    return (
      <span className="flex items-center gap-1 text-xs text-emerald-400">
        <ShieldCheck className="size-3" />
        리저브 달성
      </span>
    );
  }

  return (
    <span className="flex items-center gap-1 text-xs text-white/50">
      <ShieldAlert className="size-3" />
      리저브 미달
    </span>
  );
}
