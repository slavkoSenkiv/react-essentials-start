import Section from "./Section";
import Tabs from "./Tabs";
import { EXAMPLES } from "../../data";
import TapButton from "./TapButton";

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
      <Tabs button={
        EXAMPLES.map((example) => {
          <TapButton 
            key = {example.title}
            isSelected={selectedTopic === example.title.toLowerCase()}
            onClick={() => handleSelect(example.title.toLowerCase())}
          >
            {example.title}
          </TapButton>
        })
      }>
        {tabContent}
      </Tabs>
    </Section>
  );
}
