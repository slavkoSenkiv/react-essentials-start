
function Input({ richText, ...props}) {
    
  if (richText) {
      return (
          <textarea {...props}></textarea>        
      )
  } else {
      return (
          <input {...props}></input>
      )
  }
}

function App() {
  return (
    <div id="app">
      <Input type="text" placeholder="Your name" />
      <Input richText placeholder="Your message" />
    </div>
  );
}

export default App;

