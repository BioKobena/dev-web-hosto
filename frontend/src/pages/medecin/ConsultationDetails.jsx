import React from 'react';
import { useParams } from 'react-router-dom';

const people = [
  { id: 1, name: 'John Doe', age: 30, gender: 'Male', details: 'Details about John Doe' },
  { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', details: 'Details about Jane Smith' },
  { id: 3, name: 'Alice Johnson', age: 40, gender: 'Female', details: 'Details about Alice Johnson' },
];

const ConsultationDetails = () => {
  const { id } = useParams();
  const person = people.find((p) => p.id === parseInt(id));

  return (
    <div>
      {person ? (
        <div>
          <h2>{person.name}</h2>
          <p>Age: {person.age}</p>
          <p>Gender: {person.gender}</p>
          <p>{person.details}</p>
        </div>
      ) : (
        <p>Person not found</p>
      )}
    </div>
  );
};

export default ConsultationDetails;
