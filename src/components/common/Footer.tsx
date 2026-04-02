import Link from "next/link";
import { Gavel } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* 브랜드 */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-md bg-accent">
                <Gavel className="size-3.5 text-accent-foreground" />
              </div>
              <span className="font-bold tracking-tight text-primary-foreground">
                Biz<span className="text-accent">Bid</span>
              </span>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-primary-foreground/50">
              폐업 소상공인의 중고 비품을 경매로 거래하는 플랫폼입니다.
              <br />
              합리적인 가격에 필요한 비품을 구매하세요.
            </p>
          </div>

          {/* 링크 */}
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-primary-foreground">서비스</span>
              <Link href="/products" className="text-primary-foreground/50 transition-colors hover:text-primary-foreground">매물 목록</Link>
              <Link href="/auction" className="text-primary-foreground/50 transition-colors hover:text-primary-foreground">경매</Link>
              <Link href="/sell" className="text-primary-foreground/50 transition-colors hover:text-primary-foreground">매물 등록</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-primary-foreground">고객지원</span>
              <Link href="/guide" className="text-primary-foreground/50 transition-colors hover:text-primary-foreground">이용 가이드</Link>
              <Link href="/faq" className="text-primary-foreground/50 transition-colors hover:text-primary-foreground">자주 묻는 질문</Link>
              <Link href="/contact" className="text-primary-foreground/50 transition-colors hover:text-primary-foreground">문의하기</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/40 md:flex-row md:justify-between">
          <span>© 2026 BizBid. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/terms" className="transition-colors hover:text-primary-foreground">이용약관</Link>
            <Link href="/privacy" className="transition-colors hover:text-primary-foreground">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
