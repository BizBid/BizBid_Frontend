"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  endDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(endDate: Date): TimeLeft | null {
  const diff = endDate.getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer({ endDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    calcTimeLeft(endDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft(endDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  if (!timeLeft) {
    return (
      <span className="flex items-center gap-1 text-xs text-white/50">
        <Clock className="size-3" />
        마감
      </span>
    );
  }

  const isUrgent = timeLeft.days === 0 && timeLeft.hours < 1;

  return (
    <span
      className={`flex items-center gap-1 text-xs tabular-nums ${
        isUrgent ? "text-red-400" : "text-white/70"
      }`}
    >
      <Clock className="size-3" />
      {timeLeft.days > 0 && `${timeLeft.days}일 `}
      {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
    </span>
  );
}
