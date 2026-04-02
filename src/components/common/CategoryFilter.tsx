"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  label: string;
  emoji: string;
  items: { id: string; label: string }[];
}

const CATEGORIES: Category[] = [
  {
    id: "restaurant",
    label: "식당/음식점",
    emoji: "🍽️",
    items: [
      { id: "kitchen", label: "주방기기" },
      { id: "furniture", label: "홀 가구/집기" },
      { id: "refrigerator", label: "냉장/냉동" },
      { id: "ventilation", label: "환기/후드" },
    ],
  },
  {
    id: "cafe",
    label: "카페/베이커리",
    emoji: "☕",
    items: [
      { id: "coffee", label: "커피 장비" },
      { id: "baking", label: "제과/제빵" },
      { id: "display", label: "쇼케이스" },
      { id: "interior", label: "인테리어" },
    ],
  },
  {
    id: "beauty",
    label: "미용/뷰티",
    emoji: "✂️",
    items: [
      { id: "hair", label: "미용 기기" },
      { id: "nail", label: "네일 장비" },
      { id: "skin", label: "피부 관리" },
      { id: "furniture_beauty", label: "의자/가구" },
    ],
  },
  {
    id: "retail",
    label: "의류/소매",
    emoji: "👗",
    items: [
      { id: "rack", label: "행거/진열대" },
      { id: "mannequin", label: "마네킹" },
      { id: "pos", label: "POS/결제" },
      { id: "storage", label: "수납/창고" },
    ],
  },
  {
    id: "office",
    label: "사무/오피스",
    emoji: "🖥️",
    items: [
      { id: "desk", label: "책상/의자" },
      { id: "it", label: "IT 기기" },
      { id: "copy", label: "복합기/프린터" },
      { id: "partition", label: "파티션" },
    ],
  },
  {
    id: "etc",
    label: "기타",
    emoji: "📦",
    items: [{ id: "etc_all", label: "전체" }],
  },
];

interface CategoryFilterProps {
  onFilter?: (categoryId: string | null, itemId: string | null) => void;
}

export default function CategoryFilter({ onFilter }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const activeCategory = CATEGORIES.find((c) => c.id === selectedCategory);

  function handleCategoryClick(categoryId: string) {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      setSelectedItem(null);
      onFilter?.(null, null);
    } else {
      setSelectedCategory(categoryId);
      setSelectedItem(null);
      onFilter?.(categoryId, null);
    }
  }

  function handleItemClick(itemId: string) {
    setSelectedItem(itemId);
    onFilter?.(selectedCategory, itemId);
  }

  return (
    <div className="w-full space-y-3">
      {/* 업종 탭 */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedItem(null);
            onFilter?.(null, null);
          }}
          className={cn(
            "h-10 rounded-full border px-5 text-sm font-semibold transition-all",
            selectedCategory === null
              ? "border-primary bg-primary text-primary-foreground shadow-sm"
              : "border-border bg-white text-muted-foreground hover:border-foreground/30 hover:text-foreground"
          )}
        >
          전체
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={cn(
              "flex h-10 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-all",
              selectedCategory === cat.id
                ? "border-accent bg-accent text-accent-foreground shadow-sm"
                : "border-border bg-white text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            )}
          >
            <span className="text-base leading-none">{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* 품목 태그 */}
      {activeCategory && (
        <div className="flex flex-wrap gap-2 rounded-2xl border border-border bg-muted/40 px-4 py-3">
          {activeCategory.items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "h-8 rounded-full border px-4 text-xs font-semibold transition-all",
                selectedItem === item.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-white text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
