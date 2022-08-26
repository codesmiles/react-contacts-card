import React from "react";
import Card from "./card";
import contacts from "../contacts";
function App() {
  const mapContacts = contacts.map((el) => {
    return (
      <Card name={el.name} tel={el.phone} email={el.email} source={el.imgURL} />
    );
  });
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {mapContacts}
    </div>
  );
}

export default App;
