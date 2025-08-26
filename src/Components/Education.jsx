import react, { useState } from "react";

function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [date, setDate] = useState();

  const [submittedData, setSubmittedData] = useState(null);

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
  }
  return (
    <div>
      <h2>Education</h2>
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
      /> <br />

      <button onClick={handleAdd}>Submit Info</button>

      {submittedData && (
        <div>
          <h3>Submitted Info:</h3>
          <p>Univeristy: {schoolName}</p>
          <p>Degree: {degree}</p>
          <p>Date Earned: {date}</p>
        </div>
      )}
      <hr />
    </div>
  );
}
export default Education;
