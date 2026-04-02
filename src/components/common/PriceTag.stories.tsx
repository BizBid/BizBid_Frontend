import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PriceTag from "./PriceTag";

const meta = {
  title: "Common/PriceTag",
  component: PriceTag,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof PriceTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrentBid: Story = {
  args: {
    label: "현재 최고가",
    amount: 350000,
    highlight: true,
  },
};

export const FixedPrice: Story = {
  args: {
    label: "판매가",
    amount: 1200000,
    highlight: false,
  },
};
