

export default class MongoDB{
    
    
    agregar(estudiante){
        const requestInit={ // protocolo tcp ip 
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(estudiante)
        }
        fetch('http://52.73.32.215:3000/api/estudiantes', requestInit)
        .then(res=> console.log(res.text())) 
        return 'Agregado en MongoDB'
    }
    borrar(id){
        const requestInit={
            method: 'DELETE'
        }
        fetch('http://52.73.32.215:3000/api/estudiantes/'+id, requestInit)
        .then(res=> res.text())
        return 'Borrado en MongoDB'
    }
    editar(estudiante, id){
        const requestInit={
            method: 'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(estudiante)
        }
        fetch('http://52.73.32.215:3000/api/estudiantes/'+id, requestInit)
        .then(res=> res.text())
        return 'Modificado en MongoDB'
    }

}



