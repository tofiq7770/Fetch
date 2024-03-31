"use strict";

async function getAllData() {
  let main = document.querySelector(".main");

  let response = await fetch("https://jsonplaceholder.typicode.com/photos");
  let comments = await response.json();

  let str = "";
  comments.forEach((data) => {
    str += `<tr>
        <td>${data.albumId}</td>
        <td>${data.id}</td>
        <td>${data.title}</td>
        <td><img src="${data.url} " style="width: 200px; height: ;" alt="photo"></td>
        <td><img src="${data.thumbnailUrl} " style="width: 150px; height: ;" alt="thumbnail"></td>
        </tr> `;
  });

  main.innerHTML = str;
}
getAllData();
