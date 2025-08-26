import react, { useState } from "react";

function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [date, setDate] = useState();

  const [submittedData, setSubmittedData] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  function handleSchool(e) {
    setSchoolName(e.target.value);
  }

  function handleDegree(e) {
    setDegree(e.target.value);
  }
  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleAdd() {
    setSubmittedData({ schoolName, degree, date });
    setIsEditing(false);
  }
  function handleEdit() {
    setIsEditing(true);
  }
  return (
    <div>
      <h2>Education</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="University"
            value={schoolName}
            onChange={handleSchool}
          />
          <br />
          <input
            type="text"
            placeholder="Degree"
            value={degree}
            onChange={handleDegree}
          />
          <br />
          <input
            type="date"
            placeholder="Date earned"
            value={date}
            onChange={handleDate}
          />{" "}
          <br />
          <button onClick={handleAdd}>Submit Info</button>
        </>
      ) : (
        <>
          {submittedData && (
            <div>
              <h3>Submitted Info:</h3>
              <p>Univeristy: {submittedData.schoolName}</p>
              <p>Degree: {submittedData.degree}</p>
              <p>Date Earned: {submittedData.date}</p>
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </>
      )}

      <hr />
    </div>
  );
}
export default Education;
