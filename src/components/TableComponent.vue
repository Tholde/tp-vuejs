<script setup>
defineProps({
  person: Object,
  edit: Function,
  removeElem: Function
})
</script>

<template>
  <table id="container" class="container">
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
    <tr v-for="(usr, index) in person" :key="index" :id="index">
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
</template>

<style scoped>

</style>