import React from 'react';


export default function App() {
    let popupContent = <p>Hello</p>;
    
    const [isClicked, setClicked] = React.useState();
    
    if (isClicked) {
        popupContent = (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={()=>setClicked(false)}>Proceed</button>
        </div>
        )
    }
    
    return (
      <div>
      {popupContent}
        <button onClick={()=>setClicked(true)}>Delete</button>
      </div>    
    );
}