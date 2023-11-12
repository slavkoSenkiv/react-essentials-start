import reactImage from "./assets/react-core-concepts.png";
import componentsImage from "./assets/components.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="..."></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
  const randId = getRandomInt(reactDescriptions.length - 1);
  const desc = reactDescriptions[randId];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block"
              image={componentsImage}
            />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
          <h2>Time to get started!</h2>
        </section>
        
      </main>
    </div>
  );
}

export default App;
