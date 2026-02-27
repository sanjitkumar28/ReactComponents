import { useState } from "react";
import Profile from "./tabs/Profile";
import Settings from "./tabs/Settings";

const TabForm = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabForm = [
    {
      name: "Profile",
      component: <Profile />,
    },
    {
      name: "Settings",
      component: <Settings />,
    },
  ];
  const handleCurrentTab = (index) => {
    setCurrentTab(index);
  };

  const currentComponent=tabForm[currentTab].component;
  return (
    <div>
    <div style={{display:"flex",gap:"20px"}}>
      {tabForm.map((tab, index) => {
        return (
          <div key={index} onClick={() => handleCurrentTab(index)}>
            {tab.name}
          </div>
        );
       
      })}
      </div>
       {currentComponent}
    </div>
  );
};

export default TabForm;
