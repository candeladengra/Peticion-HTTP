document.querySelector("#boton").addEventListener("click", traerdatos)

function traerdatos(){
    const xhttp = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/todos';
    xhttp.open("GET", url, true)
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){

            let datos = JSON.parse(this.responseText)
            let resp = document.querySelector("#respuesta")
            resp.innerHTML = '';
            
            for (let item of datos){
                resp.innerHTML += `
                <tr>
                    <td> ${item.userId}</td>
                    <td> ${item.id}</td>
                    <td> ${item.title}</td>
                    <td> ${item.completed}</td>
                </tr>
                `
            }
        }
    }
}