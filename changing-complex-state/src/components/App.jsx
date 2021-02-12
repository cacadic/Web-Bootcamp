import React, {useState} from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event){
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    const {value, name} = event.target;

    // if(inputName === "fName"){
    //   setFullName({fName: newValue, lName: fullName.lName});
    // } else if (inputName === "lName"){
    //   setFullName({fName: fullName.fName, lName: newValue});
    // }
    setFullName(prevValue => {
      if(name === "fName"){
        return {
          fName: value,
          lName: prevValue.lName
        } 
      } else if(name === "lName"){
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" onChange={handleChange} placeholder="First Name" value={fullName.fName} spellCheck={false}/>
        <input name="lName" onChange={handleChange} placeholder="Last Name" value={fullName.lName} spellCheck={false}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
