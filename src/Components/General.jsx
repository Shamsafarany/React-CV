import react, { useState } from "react";

function General() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  const [submittedData, setSubmittedData] = useState(null);

  const [isEditing, setIsEditing] = useState(true);

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
    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    if (!email.trim()) {
      alert("Email is required");
      return;
    }
    
    if (!phone || phone.length !== 10 || isNaN(phone)) {
      alert("Phone must be exactly 10 digits");
      return;
    }

    setSubmittedData({ name, email, phone });
    setIsEditing(false);
  }
  function handleEdit() {
    setIsEditing(true);
  }
  return (
    <div>
      <h2>General Info</h2>
      {isEditing ? (
        <>
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
        </>
      ) : (
        <>
          {" "}
          {submittedData && (
            <div>
              <h3>Submitted Info: </h3>
              <p>Name: {submittedData.name}</p>
              <p>Email: {submittedData.email}</p>
              <p>Phone: {submittedData.phone}</p>
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </>
      )}
      <hr />
    </div>
  );
}

export default General;
