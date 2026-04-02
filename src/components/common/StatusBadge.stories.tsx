import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import StatusBadge from "./StatusBadge";

const meta = {
  title: "Common/StatusBadge",
  component: StatusBadge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: { status: "active" },
};

export const Sold: Story = {
  args: { status: "sold" },
};

export const Closed: Story = {
  args: { status: "closed" },
};

export const ReserveNotMet: Story = {
  args: { status: "reserve_not_met" },
};
