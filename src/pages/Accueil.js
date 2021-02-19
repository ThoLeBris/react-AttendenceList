import data from '../data'
import List from '../components/List';
import { useState } from 'react'


const Accueil = () => {
    const [student, setStudent] = useState(data);
    
    return (
        <>
            <h1>Accueil</h1>

            <div className="bloc">
              <section className="container">
                <h2>Attendence List for {student.length} students</h2>
                <List student ={student} className="student-bloc"/>
                <button onClick = {()=>setStudent([])} className="btn-clear">Clear List</button>
              </section>
            </div>
        </>
    )
}

export default Accueil
