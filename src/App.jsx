import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TapButton from "./components/TapButton";

function App() {
  function handleSelect() {
    console.log("Hello World! - selected");
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
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>

    
          </ul>
          <h2>Time to get started!</h2>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={handleSelect}>Components</TapButton>
            <TapButton onSelect={handleSelect}>JSX</TapButton>
            <TapButton onSelect={handleSelect}>Props</TapButton>
            <TapButton onSelect={handleSelect}>State</TapButton>
          </menu>
        </section>
        
      </main>
    </div>
  );
}

export default App;
