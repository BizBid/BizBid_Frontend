import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AuctionBadge from "./AuctionBadge";

const meta = {
  title: "Common/AuctionBadge",
  component: AuctionBadge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof AuctionBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Auction: Story = {
  args: { type: "auction" },
};

export const Fixed: Story = {
  args: { type: "fixed" },
};
