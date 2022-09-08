import React,{Fragment, useState, useEffect}from 'react'
import Navbar from './components/Navbar';
import EstudiantesListMG from './components/EstudiantesListMG';
import Form from './components/Form';

function App() {


  const [estudiante, setestudiante]= useState({
    nombre:'',
    carrera:'',
    semestre:0,
    cedula:0
  })
  
  const [estudiantesListMG, setestudiantesMG]= useState([]) 
  
   

  const [listUpdate, setlistUpdate]= useState(false)

  useEffect(()=>{ // use effect se ejecuta cada vez que se actualice
   
  
   
    const getEstudiantesMG=()=>{
      fetch('http://52.73.32.215:3000/api/estudiantes') // acceso a la API
      .then(res=> res.json()) // Convierte en formato json
      .then(res => setestudiantesMG(res)) // asigna la respuesta
    }
    
    getEstudiantesMG()    
    setlistUpdate(false)
    
  },[listUpdate])

  return (
    <Fragment>
      <Navbar brand='CRUD ESTUDIANTES'/>
     
      <div className="container">
        <div className="row">
          <div className="col-7">
            
            <h2 style={{textAlign:'center'}}>Lista de estudiantes MongoDB</h2>
            <EstudiantesListMG estudiante={estudiante} setestudiante={setestudiante} estudiantes={estudiantesListMG} setlistUpdate={setlistUpdate}/>
            
          
          </div>
          <div className="col-5 p-4">
          <h2 style={{textAlign:'center'}}>Formulario de estudiantes</h2>
          <Form estudiante={estudiante} setestudiante={setestudiante} setlistUpdate={setlistUpdate}/>
          </div>

        </div>
      </div>

    </Fragment>
    
  );
}

export default App;
