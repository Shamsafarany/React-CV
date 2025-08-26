import react, { useState } from "react";

function General() {
  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  const [submittedData, setSubmittedData] = useState(null);

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
  }
  function handleSubmit() {
    setSubmittedData({ name, email, phone });
  }

  return (
    <>
      <h2>General Info</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleName}
      />{" "}
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmail}
      />
      <br />
      <input
        type="number"
        placeholder="Number"
        value={phone}
        onChange={handlePhone}
      />{" "}
      <br />
      <button onClick={handleSubmit}>Submit Info</button>
      {submittedData && (
        <div>
          <h3>Submitted Info: </h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Phone: {submittedData.phone}</p>
        </div>
      )}
      <hr />
    </>
  );
}

export default General;
