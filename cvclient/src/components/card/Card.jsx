import React from "react";
import classes from "./Card.module.css";

const TabContext = React.createContext();

function CardTab({ children }) {
  const [activeTab, setActiveTab] = React.useState(1);

  const setTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabContext.Provider value={{ activeTab, setTab }}>
      <div className="">{children}</div>
    </TabContext.Provider>
  );
}

function TabSwitcher({
  children,
  tabId,
  icon,
  activeClass = "border-b-2 border-gray-600",
}) {
  const { activeTab, setTab } = React.useContext(TabContext);

  const onClick = () => setTab(tabId);

  const className = ["mr-2"];
  if (activeTab === tabId) className.push(activeClass);
  return (
    <a onClick={onClick} 
    className={`${classes["icon-hover"]} ${classes["border-bottom"]}`}>
      <i class={icon} onClick={onClick}></i> {children}
    </a>
  );
}

function TabContent({ children, id }) {
  const { activeTab } = React.useContext(TabContext);
  return id === activeTab ? children : null;
}

export { CardTab, TabSwitcher, TabContent };
