// Use the fetch() method to make a GET request to an API (e.g., JSONPlaceholder: https://jsonplaceholder.typicode.com/posts). Display the response data in the console.


let url = " https://jsonplaceholder.typicode.com/posts";

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(err=>{
    console.log("error", err);
});