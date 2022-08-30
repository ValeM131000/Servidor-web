import React from 'react'
import AdapterDB from '../adapterDB'


const mongoDB = new AdapterDB()

const EstudiantesListMG = ({estudiante,setestudiante,estudiantes, setlistUpdate})=>{
    
    const handleDelete=id=>{
        
        mongoDB.borrar(id)
        setlistUpdate(true)

    }

    let{nombre, carrera, semestre, cedula}=estudiante

    const handleUpdate=id=>{

        semestre=parseInt(semestre,10)
        cedula=parseInt(cedula, 10)

        // validacion datos
        if(nombre==='' || carrera==='' || semestre <=0 || cedula <=0){
            alert('Todos los campos son obligatorios')
            return
        }
        mongoDB.editar(estudiante, id)

        setlistUpdate(true)

        //reinicia los datos

        setestudiante({
            nombre:'',
            carrera:'',
            semestre:0,
            cedula:0
        })
    }


    return(
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Carrera</th>
                    <th>Semestre</th>
                    <th>Cedula</th>
                </tr>
            </thead>
            <tbody>
                {estudiantes.map(estudiante=>(
                    <tr key={estudiante._id}>
                        <td>{estudiante._id}</td>
                        <td>{estudiante.nombre}</td>
                        <td>{estudiante.carrera}</td>
                        <td>{estudiante.semestre}</td>
                        <td>{estudiante.cedula}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={()=>handleDelete(estudiante._id)} className="btn btn-danger">Borrar</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={()=>handleUpdate(estudiante._id)} className="btn btn-dark">Editar</button>
                            </div>
                        </td>
                        
                    </tr>
                )
                )}
                
            </tbody>
        </table>
    );
}
export default EstudiantesListMG