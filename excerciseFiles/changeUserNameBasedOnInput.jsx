export const user = {
  name: '',
};

function App() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
  function handleCreateUser(name) {
    console.log(user.name)
    user.name = name;
    console.log(user.name)
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
        <input type="text" />
      </p>

      <p id="actions">
        <button onClick={()=>handleCreateUser()}>Create User</button>
      </p>
    </div>
  );
}

export default App;
