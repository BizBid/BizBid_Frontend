import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProductCard from "./ProductCard";

type Props = React.ComponentProps<typeof ProductCard>;

const meta = {
  title: "Common/ProductCard",
  component: ProductCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story: React.ComponentType) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AuctionActive: Story = {
  args: {
    id: "1",
    type: "auction",
    title: "업소용 냉장고 1800L (상태 양호, 2년 사용)",
    imageUrl: "https://picsum.photos/seed/fridge01/800/600",
    category: "카페/베이커리 · 냉장/냉동",
    location: "서울 마포구",
    status: "active",
    currentBid: 350000,
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
    reserveMet: false,
    bidCount: 7,
  } as Props,
};

export const AuctionUrgent: Story = {
  args: {
    id: "2",
    type: "auction",
    title: "에스프레소 머신 La Marzocco GB5",
    imageUrl: "https://picsum.photos/seed/coffee02/800/600",
    category: "카페/베이커리 · 커피 장비",
    location: "서울 강남구",
    status: "active",
    currentBid: 1200000,
    endDate: new Date(Date.now() + 1000 * 60 * 25),
    reserveMet: true,
    bidCount: 14,
  } as Props,
};

export const AuctionSold: Story = {
  args: {
    id: "3",
    type: "auction",
    title: "업소용 가스레인지 6구",
    imageUrl: "https://picsum.photos/seed/stove03/800/600",
    category: "식당/음식점 · 주방기기",
    location: "경기 성남시",
    status: "sold",
    currentBid: 280000,
    endDate: new Date(Date.now() - 1000 * 60 * 60),
    reserveMet: true,
    bidCount: 5,
  } as Props,
};

export const FixedActive: Story = {
  args: {
    id: "4",
    type: "fixed",
    title: "미용실 샴푸대 2인용 (세라믹 볼)",
    imageUrl: "https://picsum.photos/seed/salon04/800/600",
    category: "미용/뷰티 · 의자/가구",
    location: "부산 해운대구",
    status: "active",
    price: 450000,
  } as Props,
};
