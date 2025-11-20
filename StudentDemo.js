import React, { useEffect } from 'react';

function StudentDemo() {
  useEffect(() => {
    console.log('Component Mounted!');
  }, []);

  return <h2>Check console: "Component Mounted!"</h2>;
}

export default StudentDemo;
