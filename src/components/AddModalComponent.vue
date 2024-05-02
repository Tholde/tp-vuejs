<script setup>

</script>

<template>
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
            <select class="form-select" id="devise" style="color: #030125; font-weight: bold; border-width: 1px; border-radius: 24.6px; text-align: center;" required>
              <option value="USD" style="color: #030125; font-weight: bold;border-width: 1px; border-radius: 24.6px; text-align: center;">USD</option>
              <option value="EUR" style="color: #030125; font-weight: bold; border-width: 1px; border-radius: 24.6px; text-align: center;">EUR</option>
              <option value="MGA" style="color: #030125; font-weight: bold; border-width: 1px; border-radius: 24.6px; text-align: center;">MGA</option>
            </select>
          </div>
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="submitBtn"
                  style="color: aliceblue; background-color: darkcyan; border-color: aliceblue; text-transform: uppercase;">
            SAVE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>