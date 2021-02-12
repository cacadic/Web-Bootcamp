import React, {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");

  function handleChange(event){
    setName(event.target.value);
  }

  function handleSubmit(event){
    setShowName(name);
    setName("");

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {showName}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
