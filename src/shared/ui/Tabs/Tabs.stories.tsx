import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "shared/Tabs",
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoTabs: Story = {
  render: () => (
    <Tabs defaultValue="one">
      <Tabs.List>
        <Tabs.Trigger value="one">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="two">Tab 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="one">Content 1</Tabs.Content>
      <Tabs.Content value="two">Content 2</Tabs.Content>
    </Tabs>
  ),
};
