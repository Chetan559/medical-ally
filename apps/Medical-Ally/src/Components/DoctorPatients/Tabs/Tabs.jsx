import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import PrimarySymptoms from "../PrimarySymptoms/PrimarySymptoms";
import Habits from "../PatientsHabits/Habits";
import History from "../PatientsHistory/History";

function Tabs() {
  const [buttonActive, setButtonActive] = useState("tab1");

  const handleButtonClick = (value) => {
    if (value === buttonActive) {
      return;
    }
    setButtonActive(value);
  };

  return (
    <div className="mb-2 overflow-auto ">
      <TETabs>
        <TETabsItem
          onClick={() => handleButtonClick("tab1")}
          active={buttonActive === "tab1"}
          tag="button"
          className="text-lg font-semibold text-gray-900 dark:text-white"
        >
          Primary Symptoms
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab2")}
          active={buttonActive === "tab2"}
          tag="button"
          className="text-lg font-semibold text-gray-900 dark:text-white"
        >
          Habits
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab3")}
          active={buttonActive === "tab3"}
          className="text-lg font-semibold text-gray-900 dark:text-white"
          tag="button"
        >
          History
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={buttonActive === "tab1"}>
          <PrimarySymptoms />
        </TETabsPane>
        <TETabsPane show={buttonActive === "tab2"}>
          <History />
        </TETabsPane>
        <TETabsPane show={buttonActive === "tab3"}>
          <Habits />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
}

export default Tabs;
