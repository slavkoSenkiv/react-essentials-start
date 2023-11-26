import headerImage from "../../assets/react-core-concepts.png";
import './Header.css'

const reactAdjectives = ["Fundamental", "Crucial", "Core"];

function getRandInt (max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const getRandId = getRandInt(reactAdjectives.length - 1);
  const randAdjective = reactAdjectives[getRandId];

  return (
    <header>
      <img src={headerImage} />
      <h1>React Essencials</h1>
      <p>{randAdjective} React concepts you will need for almost any app you are going to</p>
    </header>
  );
}
