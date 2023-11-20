import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TapButton from "./components/TapButton";
import { useState } from "react";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* the following syntax is used when 
          component prop names DO NOT match the object prop names */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            {/* the following syntax is used when 
          component prop names MATCH the object prop names */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
          <h2>Time to get started!</h2>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={() => handleSelect("components")}>
              Components
            </TapButton>
            <TapButton onSelect={() => handleSelect("jsx")}>JSX</TapButton>
            <TapButton onSelect={() => handleSelect("props")}>Props</TapButton>
            <TapButton onSelect={() => handleSelect("state")}>State</TapButton>
          </menu>
          {/* implementation variant 3 */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

{/* implementation variant 1 */}<>
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
</>
{/* implementation variant 2*/}<>
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
</>
