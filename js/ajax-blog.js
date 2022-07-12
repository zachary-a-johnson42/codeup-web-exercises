'use strict'

let blogDiv = document.getElementById("posts")

fetch("data/blog.json").then(response =>{
    response.json().then(results =>{
        for (let i = 0; i < results.length; i++) {
            blogDiv.innerHTML += "<div class='blog-post'>" + "<h1>" + results[i].title + "</h1>" + "<h3>" + results[i].date + "</h3>" + "<main>" + results[i].content + "</main>" + "</div>"
        }
    })
})