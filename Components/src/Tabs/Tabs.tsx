import { useState } from "react";
import "./Tab.css";
const Tabs = () => {
  const tabs = [
    {
      label: "Tab1",
      index: 0,
      component: <div>This is Tab1</div>,
    },
    {
      label: "Tab2",
      index: 1,
      component: <div>This is Tab2 </div>,
    },
    {
      label: "Tab3",
      index: 2,
      component: <div>This is Tab 3</div>,
    },
  ];
  const [tabIndex, setTabIndex] = useState(0);
  const changeTabIndex = (event: any) => {
    setTabIndex(event);
  };
  return (
    <>
    <div className="tab-container">
      {tabs.map((tab,index) => {
        return (
          <>
            <div
              className={tabIndex===index ? 'active-tab':'tab'}
              key={tab.index}
              onClick={() => changeTabIndex(tab.index)}
            >
              <span>{tab.label}</span>
            </div>

          </>
        );
      })}   
    </div>
      <div className="tabs-content">
      {tabs[tabIndex]&& tabs[tabIndex].component}
      </div>
    </>
  );
};

export default Tabs;
