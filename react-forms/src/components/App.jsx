import React, {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");

  function handleChange(event){
    setName(event.target.value);
  }

  function handleSubmit(){
    setShowName(name);
    setName("");
  }

  return (
    <div className="container">
      <h1>Hello {showName}</h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
