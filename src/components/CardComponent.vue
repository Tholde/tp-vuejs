<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    edit() {
      this.$emit("edit", this.value);
    },
    remove() {
      if (confirm("Are you sure to delete it ?")) {
        this.$emit("delete", this.value);
      }
    }
  }
};
</script>

<template>
  <div class="card mb-md-3">
    <div class="card-header">
      <h5 class="card-title">User num: {{ value.id }}</h5>
    </div>
    <div class="card-body">
      <p class="card-text">Name: {{ value.name }}</p>
      <p class="card-text">Email: {{ value.email }}</p>
      <p class="card-text">Devise: {{ value.devise }}</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary" style="background-color: darkcyan; color: aliceblue; width: 100px;" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="edit">Edit</button>
      <button class="btn btn-danger" @click="remove" style="position: relative; left:20px;">Delete</button>
    </div>
  </div>
</template>

<style scoped>
</style>
