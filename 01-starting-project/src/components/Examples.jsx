import React, { useState } from "react";

import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = "Please click a button";

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!selectedTopic ? (
          <p>'Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
};

export default Examples;