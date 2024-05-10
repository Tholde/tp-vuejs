<!--<script setup>-->
<!--import {ref} from 'vue';-->

<!--const emits = defineEmits(['update', 'clearAll']);-->
<!--const props = defineProps(['id', 'name', 'email', 'devise']);-->

<!--const name = ref(props.name);-->
<!--const email = ref(props.email);-->
<!--const devise = ref(props.devise);-->

<!--const emitUpdate = () => {-->
<!--  emits('update', { id: props.id, name: name.value, email: email.value, devise: devise.value });-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">-->
<!--    <div class="modal-dialog modal-dialog-centered">-->
<!--      <div class="modal-content">-->
<!--        <div class="modal-header">-->
<!--          <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Update User Info</h1>-->
<!--          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
<!--        </div>-->
<!--        <div class="modal-body">-->
<!--          <form class="user" method="post">-->
<!--            <label id="idval">{{ props.id }}</label>-->
<!--            <div class="mb-3">-->
<!--              <input class="form-control form-control-user" type="text"-->
<!--                     id="exampleName" placeholder="Enter Name"-->
<!--                     name="name" required-->
<!--                     v-model="name"-->
<!--                     style="background: transparent;display: inline-flex;position: relative;">-->

<!--            </div>-->
<!--            <div class="mb-3">-->
<!--              <input class="form-control form-control-user" type="email"-->
<!--                     id="exampleEmail" aria-describedby="emailHelp"-->
<!--                     v-model="email"-->
<!--                     placeholder="Enter Email Address" name="email" required-->
<!--                     style="background: transparent;display: inline-flex;position: relative;">-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--              <label style="color: #030125;font-weight: bold; text-align: left;">Devise : </label>-->
<!--              <select class="form-select" id="exampleDevise" v-model="devise" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;" required>-->
<!--              <option value="USD" style="color: #030125; font-weight: bold;border-width: 1px; text-align: center;">United State Dollar</option>-->
<!--              <option value="EUR" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Euro</option>-->
<!--              <option value="MGA" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Malagasy Ariary</option>-->
<!--              <option value="GBP" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Livre Sterling</option>-->
<!--              <option value="JPY" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Japan Yen</option>-->
<!--            </select>-->
<!--            </div>-->
<!--          </form>-->
<!--          <div class="modal-footer">-->
<!--            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('clearAll')">Close</button>-->
<!--            <button type="button" class="btn btn-primary" id="editBtn" @click="emitUpdate"-->
<!--                    style="color: aliceblue; background-color: darkcyan; border-color: aliceblue; text-transform: uppercase;">UPDATE-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

<!--</template>-->

<!--<style scoped>-->

<!--</style>-->
<script setup>
import { ref } from 'vue';
const emit = defineEmits(['edit']);

const id = ref(null);
const name = ref('');
const email = ref('');
const devise = ref('');

function submitForm() {
  emit('edit', id.value, name.value, email.value, devise.value);
  id.value = null;
  name.value = '';
  email.value = '';
  devise.value = '';
}

function editUserModal(userId) {
  const user = userData.value.find((user) => user.id === userId);
  if (user) {
    id.value = user.id;
    name.value = user.name;
    email.value = user.email;
    devise.value = user.devise;
  }
}
</script>

<template>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Update User Info</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form class="user" method="post">
            <div class="mb-3">
              <input class="form-control form-control-user" type="text"
                     id="exampleName" placeholder="Enter Name"
                     name="name" required
                     v-model="name"
                     style="background: transparent;display: inline-flex;position: relative;">
            </div>
            <div class="mb-3">
              <input class="form-control form-control-user" type="email"
                     id="exampleEmail" aria-describedby="emailHelp"
                     placeholder="Enter Email Address" name="email" required
                     v-model="email"
                     style="background: transparent;display: inline-flex;position: relative;">
            </div>
            <div class="mb-3">
              <label style="color: #030125;font-weight: bold; text-align: left;">Devise : </label>
              <select class="form-select" id="exampleDevise" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;" required
                      v-model="devise">
                <option value="USD" style="color: #030125; font-weight: bold;border-width: 1px; text-align: center;">United State Dollar</option>
                <option value="EUR" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Euro</option>
                <option value="MGA" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Malagasy Ariary</option>
                <option value="GBP" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Livre Sterling</option>
                <option value="JPY" style="color: #030125; font-weight: bold; border-width: 1px; text-align: center;">Japan Yen</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="editBtn" @click="submitForm"
                  style="color: aliceblue; background-color: darkcyan; border-color: aliceblue; text-transform: uppercase;">UPDATE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your styling here */
</style>