import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/142606497_10157980636992666_2088902345813112990_n.jpg?_nc_cat=110&ccb=3&_nc_sid=09cbfe&_nc_ohc=YH5qKF85CecAX-2S8c_&_nc_ht=scontent.fhan2-4.fna&oh=c3fdd5e751ef296127eb6ac42e161506&oe=6048A86E"/>
      <Card name={contacts[0].name} img={contacts[0].imgURL}
            tel={contacts[0].phone} email={contacts[0].email}/>
      <Card name={contacts[1].name} img={contacts[1].imgURL}
            tel={contacts[1].phone} email={contacts[1].email}/>
      <Card name={contacts[2].name} img={contacts[2].imgURL}
            tel={contacts[2].phone} email={contacts[2].email}/>
    </div>
  );
}

export default App;
