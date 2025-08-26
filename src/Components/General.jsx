import react, { useState } from "react";

function General() {
  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  function handleName(e){
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <>
      <h2>General Info</h2>
      <input type="text" placeholder="Name" value={name} onChange={handleName}/> <br />
      <p>Name: {name}</p>
      <input type="email" placeholder="Email" value={email} onChange={handleEmail}/>
      <br />
      <p>Email: {email}</p>
      <input type="number" placeholder="Number" value={phone} onChange={handlePhone} /> <br />
      <p>Phone number: {phone}</p>

      <hr />
    </>
  );
}

export default General;
