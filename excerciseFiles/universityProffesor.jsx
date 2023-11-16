import Card from './Card';

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card fName="Anthony" lName="Blake" city="Drog" disc="CS"/>
      <Card fName="Maria" lName="Miles" city="Lviv" disc="CS"/>
    </div>
  );
}
//export default App;

export default function Card (props) {
  return (
    <div>
      <p>
        {props.lName} is a professor of {props.disc} at the University of {props.city}
      </p>
      <p>
        <a href="mailto:blake@example.com">Email {props.fName}</a>      
      </p>
    </div>
  );
}
