import Image from "next/image";
import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import AuctionBadge from "./AuctionBadge";
import StatusBadge from "./StatusBadge";
import CountdownTimer from "./CountdownTimer";
import PriceTag from "./PriceTag";
import ReserveIndicator from "./ReserveIndicator";

interface BaseProduct {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  location: string;
  status: "active" | "sold" | "closed" | "reserve_not_met";
  bidCount?: number;
}

interface AuctionProduct extends BaseProduct {
  type: "auction";
  currentBid: number;
  endDate: Date;
  reserveMet: boolean;
}

interface FixedProduct extends BaseProduct {
  type: "fixed";
  price: number;
}

type ProductCardProps = AuctionProduct | FixedProduct;

export default function ProductCard(props: ProductCardProps) {
  const { id, title, imageUrl, category, location, status, bidCount } = props;
  const isClosed = status === "sold" || status === "closed";

  return (
    <Link href={`/products/${id}`} className="group block">
      <div
        className={`overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
          isClosed ? "opacity-70" : ""
        }`}
      >
        {/* 이미지 */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-2xl bg-muted">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* 어두운 오버레이 (마감/낙찰 시) */}
          {isClosed && (
            <div className="absolute inset-0 bg-black/30" />
          )}

          {/* 상단 뱃지 */}
          <div className="absolute left-3 top-3 flex gap-1.5">
            <AuctionBadge type={props.type} />
            <StatusBadge status={status} />
          </div>

          {/* 경매 타이머 - 이미지 하단 */}
          {props.type === "auction" && status === "active" && (
            <div className="absolute bottom-0 inset-x-0 flex items-center justify-between bg-linear-to-t from-black/70 to-transparent px-3 pb-2.5 pt-6">
              <ReserveIndicator met={props.reserveMet} />
              <CountdownTimer endDate={props.endDate} />
            </div>
          )}
        </div>

        {/* 본문 */}
        <div className="p-4">
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            {category}
          </p>
          <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug text-foreground">
            {title}
          </h3>

          <div className="mt-3">
            {props.type === "auction" ? (
              <PriceTag label="현재 최고가" amount={props.currentBid} highlight />
            ) : (
              <PriceTag label="판매가" amount={props.price} highlight />
            )}
          </div>
        </div>

        {/* 푸터 */}
        <div className="flex items-center justify-between border-t border-border px-4 py-2.5">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3" />
            {location}
          </span>
          {props.type === "auction" && bidCount !== undefined && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="size-3" />
              {bidCount}명 입찰
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
