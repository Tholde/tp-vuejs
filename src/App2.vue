<script setup>

const persons = JSON.parse(localStorage.getItem('users'));

function clearAll(){
  const name = document.getElementById("exampleLastName");
  const email = document.getElementById("exampleInputEmail");
  const devise = document.getElementById("devise");
  const nameUp = document.getElementById("exampleName");
  const emailUp = document.getElementById("exampleEmail");
  const deviseUp = document.getElementById("exampleDevise");
  const idval = document.getElementById('idval');
  name.value = "";
  email.value = "";
  devise.value = "";
  nameUp.value = "";
  emailUp.value = "";
  deviseUp.value = "";
  idval.value = "";
}

function add(){
  const name = document.getElementById("exampleLastName");
  const email = document.getElementById("exampleInputEmail");
  const devise = document.getElementById("devise");
  alert(name.value + email.value + devise.value);
  let user = { 'id': persons[persons.length-1].id + 1, 'name': name.value, 'email': email.value, 'devise': devise.value };
  console.log(user);
  persons.push(user);
  localStorage.setItem('users', JSON.stringify(persons));
  const tbody = document.getElementById('tb');
  tbody.innerHTML = '';
  displayAll();
}
function update(){
  const name = document.getElementById("exampleName");
  const email = document.getElementById("exampleEmail");
  const devise = document.getElementById("exampleDevise");
  const idval = document.getElementById('idval');
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].id === idval) {
      persons[i].name = name.value;
      persons[i].email = email.value;
      persons[i].devise = devise.value;
      console.log(persons[i]);
      localStorage.setItem('users', JSON.stringify(persons));
      const tbody = document.getElementById('tb');
      tbody.innerHTML = '';
      displayAll();
    }
  }
  // console.log(persons[idval.value]);
  //     persons[idval.value].name = name.value;
  //     persons[idval.value].email = email.value;
      // const arr = {
      //   'id': persons[idval.value].id,
      //   'name': name.value,
      //   'email': email.value,
      //   'devise': devise.value
      // }
      //
      // persons[i] = {...persons[i], ...arr};
      // console.log(persons[i]);
      // localStorage.setItem('users', JSON.stringify(persons));

  // const index = persons.findIndex(user => user.id === idval.value);
  // if (index > -1) {
  //   alert(index)
  // }else {
  //   alert("tsy azo");
  // }
  // alert()
  // alert("mandalo eto");
}

function edit(id){
  const name = document.getElementById("exampleName");
  const email = document.getElementById("exampleEmail");
  const devise = document.getElementById("exampleDevise");
  const idval = document.getElementById('idval');
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].id === id) {
      name.value = `${persons[i].name}`;
      email.value = `${persons[i].email}`;
      devise.value = `${persons[i].devise}`;
      idval.textContent = id;
    }
  }
}

function removeElem(id) {
  alert(id)
  let conf = confirm('Are you sure?');
  if (conf) {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].id === id) {
        persons.splice(i, 1);
        localStorage.setItem('users', JSON.stringify(persons));
        console.log(persons);
        const tbody = document.getElementById('tb');
        tbody.innerHTML = '';
        displayAll();
      }
    }
  }
}
function displayAll() {
  let user = JSON.parse(localStorage.getItem('users'));
  const tbody = document.getElementById('tb');
  user.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.devise}</td>
            <td class="button_action">
                <button @click="edit(item.id)" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style="background: darkcyan; color: aliceblue; border-radius: 10px;">Edit</button>
                <button @click="removeElem(item.id)" style="background: darkcyan; color: aliceblue; border-radius: 10px;">Delete</button>
            </td>
        `;
    tbody.appendChild(tr);
  })
}
</script>

<template>
  <h1><span class="blue"></span>CRUD<span class="blue"></span> <span class="pink">Only Javascript</span></h1>
  <h2 style="position: relative; top: 20px;">
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
              style="width: 200px;color: aliceblue; background-color: darkcyan; border-color: aliceblue; text-transform: uppercase;">
        Add
      </button>
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
           aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel" style="color: #030125;font-weight: bold;">Add user info</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form class="user" method="post">
                <label id="idvalue"></label>
                <div class="mb-3">
                  <input class="form-control form-control-user" type="text"
                         id="exampleLastName" placeholder="Enter Name"
                         name="name" required
                         style="background: transparent;display: inline-flex;position: relative;">

                </div>
                <div class="mb-3">
                  <input class="form-control form-control-user" type="email"
                         id="exampleInputEmail" aria-describedby="emailHelp"
                         placeholder="Enter Email Address" name="email" required
                         style="background: transparent;display: inline-flex;position: relative;">
                </div>
                <div class="mb-3">
                  <label style="color: #030125;font-weight: bold; text-align: left;">Devise : </label>
                  <select class="form-select" id="devise" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;" required>
                    <option value="USD" style="color: #030125; font-weight: bold;border-width: 1px; text-align: center;">United State Dollar</option>
                    <option value="EUR" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Euro</option>
                    <option value="MGA" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Malagasy Ariary</option>
                    <option value="GBP" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Livre Sterling</option>
                    <option value="JPY" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Japan Yen</option>
                  </select>
                </div>
              </form>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="clearAll()">Close</button>
                <button type="button" class="btn btn-primary" id="submitBtn" @click="add()"
                        style="color: aliceblue; background-color: darkcyan; border-color: aliceblue; text-transform: uppercase;">
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </h2>
  <table id="container" class="container" v-if="persons!==null">
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Devise</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody id="tb">
    <tr v-for="(usr, index) in persons" :key="index" :id="index">
      <td>{{usr.id}}</td>
      <td>{{usr.name}}</td>
      <td>{{usr.email}}</td>
      <td>{{usr.devise}}</td>
      <td class="button_action">
        <button @click="edit(usr.id)" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style="background: darkcyan; color: aliceblue; border-radius: 10px;">Edit</button>
        <button @click="removeElem(usr.id)" style="background: darkcyan; color: aliceblue; border-radius: 10px;">Delete</button>
      </td>
    </tr>

    </tbody>
  </table>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Update User Info</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="user" method="post">
            <label id="idval"></label>
            <div class="mb-3">
              <input class="form-control form-control-user" type="text"
                     id="exampleName" placeholder="Enter Name"
                     name="name" required
                     style="background: transparent;display: inline-flex;position: relative;">

            </div>
            <div class="mb-3">
              <input class="form-control form-control-user" type="email"
                     id="exampleEmail" aria-describedby="emailHelp"
                     placeholder="Enter Email Address" name="email" required
                     style="background: transparent;display: inline-flex;position: relative;">
            </div>
            <div class="mb-3">
              <label style="color: #030125;font-weight: bold; text-align: left;">Devise : </label>
              <select class="form-select" id="exampleDevise" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;" required>
                <option value="USD" style="color: #030125; font-weight: bold;border-width: 1px; text-align: center;">United State Dollar</option>
                <option value="EUR" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Euro</option>
                <option value="MGA" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Malagasy Ariary</option>
                <option value="GBP" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Livre Sterling</option>
                <option value="JPY" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Japan Yen</option>
              </select>
            </div>
          </form>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="clearAll()">Close</button>
            <button type="button" class="btn btn-primary" id="editBtn" @click="update()"
                    style="color: aliceblue; background-color: darkcyan; border-color: aliceblue; text-transform: uppercase;">UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
 </template>

<style scoped>

</style>
