

export default class MongoDB{

    
    agregar(estudiante){

        const requestInit={ // protocolo tcp ip 
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(estudiante)
        }

        fetch('http://52.21.31.95:3000/api/estudiantes', requestInit)
        .then(res=> res.text())
        return 'Agregado en MongoDB'
    }
    borrar(id){
        const requestInit={
            method: 'DELETE'
        }
        fetch('http://52.21.31.95:3000/api/estudiantes/'+id, requestInit)
        .then(res=> res.text())
        return 'Borrado en MongoDB'
    }
    editar(estudiante, id){
        const requestInit={
            method: 'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(estudiante)
        }
        fetch('http://52.21.31.95:3000/api/estudiantes/'+id, requestInit)
        .then(res=> res.text())
        return 'Modificado en MongoDB'
    }

}



