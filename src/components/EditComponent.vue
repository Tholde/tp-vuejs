<script setup>

</script>

<template>
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
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="editBtn"
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