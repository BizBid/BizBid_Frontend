interface PriceTagProps {
  label: string;
  amount: number;
  highlight?: boolean;
}

function formatKRW(amount: number) {
  if (amount === 0) return "0원";
  return amount.toLocaleString("ko-KR") + "원";
}

export default function PriceTag({ label, amount, highlight }: PriceTagProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <span
        className={`tabular-nums font-bold ${
          highlight
            ? "text-accent text-base"
            : "text-foreground text-sm"
        }`}
      >
        {formatKRW(amount)}
      </span>
    </div>
  );
}
