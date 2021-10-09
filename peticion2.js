document.querySelector("#boton").addEventListener("click", traerdatos)

function traerdatos() {
    
    let resp = document.querySelector("#respuesta")
    resp.innerHTML = '';

    fetch ('https://jsonplaceholder.typicode.com/todos')
        .then (res => {
 
            res.json().then(data => {

            for (let item of data){
                resp.innerHTML += `
                <tr>
                    <td> ${item.userId}</td>
                    <td> ${item.id}</td>
                    <td> ${item.title}</td>
                    <td> ${item.completed}</td>
                </tr>
                `}
    })
 
}).catch(err => {
    console.log(err)
        })
}