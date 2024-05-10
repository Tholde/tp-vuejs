<script>
import CardComponent from '@/components/CardComponent.vue';

export default {
  components: {CardComponent},
  props: {
    values: {type: Array, required: true}
  },
  data() {
    return {
      isEdit: false,
      btnContent: null,
      newValue: {
        id: '',
        name: '',
        email: '',
        devise: ''
      },
      searchQuery: ''
    };
  },
  computed: {
    filtered() {
      const query = this.searchQuery.toLowerCase().trim();
      return this.values.filter(val => {
        return (
            val.name.toLowerCase().includes(query) ||
            val.email.toLowerCase().includes(query) ||
            val.devise.toLowerCase().includes(query)
        );
      });
    }
  },
  methods: {
    edit(val) {
      this.isEdit = true;
      this.btnContent = true;
      this.newValue = {...val};
    },
    open(mode) {
      this.isEdit = true;
      if (mode === 'add') {
        this.btnContent = false;
        this.newValue = {
          id: '',
          name: '',
          email: '',
          devise: ''
        };
      }
    },
    close() {
      this.isEdit = false;
    },
    save() {
      if (this.btnContent) {
        const index = this.values.findIndex(val => val.id === this.newValue.id);
        if (index !== -1) {
          this.values[index] = {...this.newValue};
          localStorage.setItem("users", JSON.stringify(this.values));
          this.close();
        }
      } else {
        const vao = {...this.newValue};
        vao.id = this.values.length > 0 ? this.values[this.values.length - 1].id + 1 : 1;
        this.values.push(vao);
        localStorage.setItem("users", JSON.stringify(this.values));
        this.close();
      }
    },
    remove(val) {
      const index = this.values.findIndex(i => i.id === val.id);
      if (index !== -1) {
        this.values.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(this.values));
      } else {
        alert("Data not found!");
      }
    }
  }
};
</script>

<template>
  <div class="row">
    <div class="col-md-8 mb-3 p-2">
      <input type="text" class="form-control" v-model="searchQuery" placeholder="Tap here to search data ....">
    </div>
    <div class="col-md-4 p-2 text-end">
      <button class="btn btn-primary" style="background-color: darkcyan; color: aliceblue; width: 100px;"
              data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="open('add')">Add data
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div v-if="filtered.length === 0">
        <p class="text-center">Data not found.</p>
      </div>
      <div v-else>
        <ul class="list-group">
          <CardComponent v-for="val in filtered" :key="val.id" :value="val" @edit="edit" @delete="remove"/>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">{{ btnContent ? 'Edit' : 'Add' }} data</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                  @click="close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" v-model="newValue.name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="email" v-model="newValue.email" required>
            </div>
            <div class="mb-3">
              <label for="devise" class="form-label">Devise</label>
              <select class="form-select" id="devise" v-model="newValue.devise" required>
                <option value="USD">United State Dollar</option>
                <option value="EUR">Euro</option>
                <option value="MGA">Malagasy Ariary</option>
                <option value="GBP">Livre Sterling</option>
                <option value="JPY">Japan Yen</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close">Close</button>
          <button type="button" class="btn btn-primary" @click="save">{{
              btnContent ? 'Update' : 'Save'
            }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
