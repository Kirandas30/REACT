import React from "react";

function StudentDetails({ name, roll, course }) {
  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Roll:</strong> {roll}</p>
      <p><strong>Course:</strong> {course}</p>
    </div>
  );
}

export default StudentDetails;
