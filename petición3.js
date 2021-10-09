const traerdatos=async() => {
    
    try {
        let resp = document.querySelector("#respuesta")
        resp.innerHTML = '';

        const res = await axios ('https://jsonplaceholder.typicode.com/todos')
        
        const users = res.data
    
        
        for (let user of users){
                resp.innerHTML += `
                <tr>
                    <td> ${user.userId}</td>
                    <td> ${user.id}</td>
                    <td> ${user.title}</td>
                    <td> ${user.completed}</td>
                </tr>
                `}
    
    }catch(error){
        console.log(error)
        }
}

document.querySelector("#boton").addEventListener("click", traerdatos)