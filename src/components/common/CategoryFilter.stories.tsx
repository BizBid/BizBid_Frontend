import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CategoryFilter from "./CategoryFilter";

const meta = {
  title: "Common/CategoryFilter",
  component: CategoryFilter,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onFilter: (categoryId, itemId) => {
      console.log("필터:", categoryId, itemId);
    },
  },
};
