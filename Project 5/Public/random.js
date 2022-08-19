'use strict'; 

let users = [];
async function fetchDirect() {
  let response = await fetch('https://randomuser.me/api/', {method: 'GET'})
  .then(response => response.json()) 
  .then(data => {
    console.log('Success:', data);
    users.push(data.results[0].name.first + " " + data.results[0].name.last + " " + data.results[0].cell + " " + data.results[0].email );
    let userlist = document.getElementById('userlist');
    let nodes = users.map(user => {
      let li = document.createElement('li');
      li.textContent = user;
      return li;
    });
    userlist.innerHTML = "";
    userlist.append(...nodes);
    });
};

async function fetchExpress() {
  let response = await fetch('/random-person', {method: 'GET'})
  .then(response => response.json()) 
  .then(data => {
    console.log('Success:', data);
    users.push(data.results[0].name.first + " " + data.results[0].name.last + " " + data.results[0].cell + " " + data.results[0].email );
    let userlist = document.getElementById('userlist');
    let nodes = users.map(user => {
      let li = document.createElement('li');
      li.textContent = user;
      return li;
    });
    userlist.innerHTML = "";
    userlist.append(...nodes);
    });
};