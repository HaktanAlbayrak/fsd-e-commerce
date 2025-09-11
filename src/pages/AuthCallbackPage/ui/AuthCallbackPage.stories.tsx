import type { Meta, StoryObj } from "@storybook/react-vite";

import AuthCallbackPage from "./AuthCallbackPage";

const meta = {
  title: "pages/AuthCallbackPage",
  component: AuthCallbackPage,
} satisfies Meta<typeof AuthCallbackPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
