// Use the fetch() method to make a GET request to an API (e.g., JSONPlaceholder: https://jsonplaceholder.typicode.com/posts). Display the response data as a list.

let div = document.getElementById("div");
div.style.border="2px solid black";
div.style.backgroundColor="pink";
// let list = document.createElement("li");

function get_Element(){
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(data => {

        for (let i = 0; i < data.length; i++){
            let body = document.createElement("li");
            body.textContent = `${data[i].body}`;
            div.appendChild(body);
            body.style.listStyle = "none";

            let list_id = document.createElement("li");
            list_id.textContent = `${data[i].id}`;
            div.appendChild(list_id);
            list_id.style.listStyle = "none";

            let title = document.createElement("li");
            title.textContent = `${data[i].title}`;
            div.appendChild(title);
            title.style.listStyle = "none";

            let userId = document.createElement("li");
            userId.textContent = `${data[i].userId}`;
            div.appendChild(userId);
            userId.style.listStyle = "none";
            userId.style.marginBottom = "40px";
        }
    });

}
get_Element()

 




