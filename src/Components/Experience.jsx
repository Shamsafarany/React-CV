import react, { useState } from "react";

function Experience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [submittedData, setSubmittedData] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  function handleCompany(e) {
    setCompany(e.target.value);
  }
  function handlePosition(e) {
    setPosition(e.target.value);
  }
  function handleResponsibilities(e) {
    setResponsibilities(e.target.value);
  }
  function handleStart(e) {
    setDateStart(e.target.value);
  }
  function handleEnd(e) {
    setDateEnd(e.target.value);
  }

  function handleAdd() {
    setSubmittedData({
      company,
      position,
      responsibilities,
      dateStart,
      dateEnd,
    });
    setIsEditing(false);
  }
  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div>
      <h2>Experience (If Available)</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            value={company}
            placeholder="Company"
            onChange={handleCompany}
          />
          <br />
          <input
            type="text"
            value={position}
            placeholder="Position title"
            onChange={handlePosition}
          />
          <br />
          <textarea
            placeholder="List of responsibilities"
            value={responsibilities}
            onChange={handleResponsibilities}
          ></textarea>
          <br />
          <label for="dateStart">Date Start: </label>
          <input
            type="date"
            value={dateStart}
            id="dateStart"
            onChange={handleStart}
          />{" "}
          <br />
          <label for="dateEnd">Date End: </label>
          <input
            type="date"
            value={dateEnd}
            id="dateEnd"
            onChange={handleEnd}
          />
          <br />
          <button onClick={handleAdd}>Submit Info</button>
        </>
      ) : (
        <>
          {submittedData && (
            <div>
              <h3>Submitted Info: </h3>
              <p>Company: {submittedData.company}</p>
              <p>Postition Title: {submittedData.position}</p>
              <p>Responsibilites: {submittedData.responsibilities}</p>
              <p>From: {submittedData.dateStart}</p>
              <p>To: {submittedData.dateEnd}</p>
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default Experience;
