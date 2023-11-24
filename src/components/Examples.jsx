import TapButton from './TapButton';
import { EXAMPLES } from '../data';
import { useState } from 'react';

export default function Examples () {

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
    <section id="examples">
    <h2>Examples</h2>
    <menu>
      <TapButton
        isSelected={selectedTopic === "components"}
        onSelect={() => handleSelect("components")}
      >
        Components
      </TapButton>

      <TapButton
        isSelected={selectedTopic === "jsx"}
        onSelect={() => handleSelect("jsx")}
      >
        JSX
      </TapButton>

      <TapButton
        isSelected={selectedTopic === "props"}
        onSelect={() => handleSelect("props")}
      >
        Props
      </TapButton>

      <TapButton
        isSelected={selectedTopic === "state"}
        onSelect={() => handleSelect("state")}
      >
        State
      </TapButton>
    </menu>
    {/* implementation variant 3 */}
    {tabContent}
  </section>
  )
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