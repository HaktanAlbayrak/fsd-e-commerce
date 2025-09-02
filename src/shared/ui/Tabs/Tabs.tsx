import { createContext, useContext, useState, type ReactNode } from "react";

import { cn } from "@/shared/lib";

import { Button } from "../Button/Button";

import styles from "./Tabs.module.scss";

interface TabsContextType {
  activeTab: string;
  handleChangeActiveTab: (tab: string) => void;
}

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  onChange?: () => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const Tabs = (props: TabsProps) => {
  const { defaultValue, children, onChange } = props;
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleChangeActiveTab = (tab: string) => {
    setActiveTab(tab);
    if (onChange) onChange();
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleChangeActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

interface TabListProps {
  children: ReactNode;
}

const TabsList = (props: TabListProps) => {
  const { children } = props;

  return <div className={styles.list}>{children}</div>;
};

interface TabTriggerProps {
  value: string;
  children: ReactNode;
}

const TabTrigger = ({ value, children }: TabTriggerProps) => {
  const context = useContext(TabsContext);

  if (!context) throw new Error("TabTrigger must be used within a Tabs");

  const isActive = context.activeTab === value;

  const handleClick = () => {
    context.handleChangeActiveTab(value);
  };

  return (
    <Button
      type="button"
      theme={isActive ? "outline" : "tertiary"}
      form="rounded"
      onClick={handleClick}
      className={cn(styles.trigger, { [styles.active]: isActive })}
    >
      {children}
    </Button>
  );
};

interface TabContentProps {
  value: string;
  children: ReactNode;
}

const TabContent = ({ value, children }: TabContentProps) => {
  const context = useContext(TabsContext);

  if (!context) throw new Error("TabContent must be used within a Tabs");

  const isActive = context.activeTab === value;

  if (!isActive) return null;

  return (
    <div className={cn(styles.content, { [styles.active]: isActive })}>
      {children}
    </div>
  );
};

Tabs.List = TabsList;
Tabs.Content = TabContent;
Tabs.Trigger = TabTrigger;
