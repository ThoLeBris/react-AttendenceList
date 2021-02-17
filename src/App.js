import React, { useState } from 'react'
import './App.css';
import data from './data'
import List from './components/List';

function App() {
  const [student, setStudent] = useState(data);
  
  return (
    <main>
      <section className="container">
        <h2>Attendence List for {student.length} students</h2>
        <List student ={student} className="student-bloc"/>
        <button onClick = {()=>setStudent([])} className="btn-clear">Clear List</button>
      </section>
    </main>
  );
}

export default App;
