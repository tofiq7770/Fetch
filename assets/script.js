"use strict";

async function getAllData() {
  let table = document.querySelector(".main");

  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let comments = await response.json();
  let str = "";
  comments.forEach((data) => {
    str += `<tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        </tr> `;
  });

  table.innerHTML = str;
}
getAllData();
