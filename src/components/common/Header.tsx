import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Gavel, PlusCircle, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="mx-auto flex h-17.5 max-w-7xl items-center gap-6 px-6">
        {/* 로고 */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary">
            <Gavel className="size-4.5 text-primary-foreground" />
          </div>
          <span className="text-[18px] font-bold tracking-tight text-foreground">
            Biz<span className="text-accent">Bid</span>
          </span>
        </Link>

        {/* 검색창 */}
        <div className="flex flex-1 max-w-120 items-center gap-2.5 rounded-full bg-muted px-4 h-11">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            type="text"
            placeholder="업종, 품목, 지역으로 검색"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* 네비게이션 */}
        <nav className="hidden shrink-0 items-center gap-7 text-sm md:flex">
          <Link
            href="/products"
            className="font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            매물 목록
          </Link>
          <Link
            href="/auction"
            className="font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            경매
          </Link>
          <Link
            href="/guide"
            className="font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            이용 가이드
          </Link>
        </nav>

        {/* 액션 버튼 */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full"
            )}
          >
            로그인
          </Link>
          <Link
            href="/sell"
            className={cn(
              buttonVariants({ size: "sm" }),
              "gap-1.5 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
            )}
          >
            <PlusCircle className="size-3.5" />
            매물 등록
          </Link>
        </div>
      </div>
    </header>
  );
}
