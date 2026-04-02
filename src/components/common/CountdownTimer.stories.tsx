import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CountdownTimer from "./CountdownTimer";

const meta = {
  title: "Common/CountdownTimer",
  component: CountdownTimer,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof CountdownTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

// 3일 후
export const ThreeDays: Story = {
  args: {
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
  },
};

// 30분 후 (긴박감 - 빨간색)
export const Urgent: Story = {
  args: {
    endDate: new Date(Date.now() + 1000 * 60 * 30),
  },
};

// 마감
export const Ended: Story = {
  args: {
    endDate: new Date(Date.now() - 1000),
  },
};
