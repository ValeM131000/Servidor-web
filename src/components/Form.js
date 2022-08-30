import React from 'react'
import AdapterDB from '../adapterDB'

const Form = ({estudiante,setestudiante, setlistUpdate})=>{

    const handleChange =e=>{
        setestudiante({
            ...estudiante,
            [e.target.name]:e.target.value
        })
    }

    let{nombre, carrera, semestre, cedula}=estudiante


    const handleSubmit=()=>{
        
        semestre=parseInt(semestre,10)
        cedula=parseInt(cedula, 10)

        // validacion datos
        if(nombre==='' || carrera==='' || semestre <=0 || cedula <=0){
            alert('Todos los campos son obligatorios')
            return
        }

        //cosulta
        
        const mongoDB= new AdapterDB()
            mongoDB.agregar(estudiante)
       
        
        setlistUpdate(true)
        //reinicia
        setestudiante({
            nombre:'',
            carrera:'',
            semestre:0,
            cedula:0
        })

    }
    return(
        <form>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="carrera" className="form-label">Carrera</label>
                <input value={carrera} name="carrera" onChange={handleChange} type="text" id="carrera" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="semestre" className="form-label">Semestre</label>
                <input value={semestre} name="semestre" onChange={handleChange} type="number" id="semestre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="cedula" className="form-label">Cedula</label>
                <input value={cedula} name="cedula" onChange={handleChange} type="number" id="cedula" className="form-control"/>
            </div>
            <div className="mb-3">
                <div className='row'>
                <button onClick={()=>handleSubmit()} className="btn btn-primary">Enviar</button>
                
                </div>
                
            </div>
        
        </form>
    );
}

export default Form