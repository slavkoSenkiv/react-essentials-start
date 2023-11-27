import Section from "./Section";
import Tabs from "./Tabs";
import { EXAMPLES } from "../../data";
import TapButton from "./TapButton";
import { useState } from "react";

export default function Examples() {
  let tabContent = <p>Please select a button</p>;

  const [selectedTopic, setSelectedTopic] = useState();

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
        buttons={
          <>
            <TapButton
              isSelected={selectedTopic === "components"}
              onClick={() => setSelectedTopic("components")}
            >
              Components
            </TapButton>

            <TapButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => setSelectedTopic("jsx")}
            >
              JSX
            </TapButton>

            <TapButton
              isSelected={selectedTopic === "props"}
              onClick={() => setSelectedTopic("props")}
            >
              Props
            </TapButton>

            <TapButton
              isSelected={selectedTopic === "state"}
              onClick={() => setSelectedTopic("state")}
            >
              State
            </TapButton>
          </>
        }
        {EXAMPLES.map((example) => {

          console.log(example);
            {/* <TapButton
              key={example.title}
              isSelected={selectedTopic === example.title}
              onClick={() => setSelectedTopic(example.title)}
            >
              {example.title}
            </TapButton> */}
        })}
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

/* 
buttons={
<>
  <TapButton
    isSelected={selectedTopic === "components"}
    onClick={() => setSelectedTopic("components")}
  >
    Components
  </TapButton>

  <TapButton
    isSelected={selectedTopic === "jsx"}
    onClick={() => setSelectedTopic("jsx")}
  >
    JSX
  </TapButton>

  <TapButton
    isSelected={selectedTopic === "props"}
    onClick={() => setSelectedTopic("props")}
  >
    Props
  </TapButton>

  <TapButton
    isSelected={selectedTopic === "state"}
    onClick={() => setSelectedTopic("state")}
  >
    State
  </TapButton>
</>
}
*/

/* 
buttons = {
  EXAMPLES.map((example) => {
    <TapButton
      key={example.title}
      isSelected={selectedTopic === example.title}
      onClick={() => setSelectedTopic(example.title)}
    >
      {example.title}
    </TapButton>
  })
} 
*/
