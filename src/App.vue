<script setup>
import ModalComponent from "@/components/ModalComponent.vue";
import {reactive} from "vue";
import {onMounted} from 'vue';

const data = reactive({
  values: []
});
onMounted(() => {
  const users = localStorage.getItem("users");
  if (users) {
    data.values = JSON.parse(users);
  } else {
    alert("Local Storage have an error!, Please refresh the page.");
  }
});
</script>

<template>
  <div class="container">
    <div class="row">
      <h1><span class="blue"></span>CRUD<span class="blue"></span> <span class="pink">Vue JS 3</span></h1>
      <ModalComponent :values="data.values"/>
    </div>
  </div>
</template>

<style scoped>
</style>
