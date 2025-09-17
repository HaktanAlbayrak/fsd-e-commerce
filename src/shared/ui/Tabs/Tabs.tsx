import {
  createContext,
  useContext,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "@/shared/lib";

import { Button } from "../Button/Button";

import styles from "./Tabs.module.scss";

interface TabsContextType {
  activeTab: string;
  handleChangeActiveTab: (tab: string) => void;
}

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  children: ReactNode;
  onChange?: () => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const Tabs = (props: TabsProps) => {
  const { defaultValue, children, onChange, ...rest } = props;
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleChangeActiveTab = (tab: string) => {
    setActiveTab(tab);
    if (onChange) onChange();
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleChangeActiveTab }}>
      <div {...rest}>{children}</div>
    </TabsContext.Provider>
  );
};

interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const TabsList = ({ children, ...rest }: TabListProps) => {
  return (
    <div className={styles.list} {...rest}>
      {children}
    </div>
  );
};

interface TabTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
}

const TabTrigger = ({ value, children, ...rest }: TabTriggerProps) => {
  const context = useContext(TabsContext);

  if (!context) throw new Error("TabTrigger must be used within a Tabs");

  const isActive = context.activeTab === value;

  const handleClick = () => {
    context.handleChangeActiveTab(value);
  };

  return (
    <Button
      {...rest}
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

interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

const TabContent = ({ value, children, ...rest }: TabContentProps) => {
  const context = useContext(TabsContext);

  if (!context) throw new Error("TabContent must be used within a Tabs");

  const isActive = context.activeTab === value;

  if (!isActive) return null;

  return (
    <div
      className={cn(styles.content, { [styles.active]: isActive })}
      {...rest}
    >
      {children}
    </div>
  );
};

Tabs.List = TabsList;
Tabs.Content = TabContent;
Tabs.Trigger = TabTrigger;
