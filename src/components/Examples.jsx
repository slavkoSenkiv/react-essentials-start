import { useState } from "react";
import { EXAMPLES } from "../data";
import TapButton from "./TapButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  let tabContent = <p>Please select a topic!</p>;

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        //ButtonsContainer="menu"
        buttons={
          <>
            <TapButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TapButton>

            <TapButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TapButton>

            <TapButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TapButton>

            <TapButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TapButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

{
  /* implementation variant 1 */
}
<>
  {/* {!selectedTopic ? (
  <p>Please select a topic!</p>
) : (
  <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>
)} */}
</>;
{
  /* implementation variant 2*/
}
<>
  {/* {!selectedTopic && <p>Please select a topic!</p>}
{selectedTopic && (
  <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>
)} */}
</>;
