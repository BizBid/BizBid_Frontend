import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ReserveIndicator from "./ReserveIndicator";

const meta = {
  title: "Common/ReserveIndicator",
  component: ReserveIndicator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ReserveIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Met: Story = {
  args: { met: true },
};

export const NotMet: Story = {
  args: { met: false },
};
