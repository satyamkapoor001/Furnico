<template>
<div class="modifyuserdetails">
    <h2>Modify User Details</h2>
    <div class="row gitters-sm card card-body">
      <div class="d-flex flex-column align-items-center text-center">
      <div class="mt-3">
          <button class="btn btn-outline-primary" @click="toggleEdit">Edit</button>
          <button v-if="edit" class="btn btn-outline-primary" @click="saveEdit">Save</button>
        </div>
      </div>
    </div>
    <div class="col-xl-8">
        <div class="mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-xl-3">
                <h6 class="mb-0">Full Name</h6>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{name}}</span>
                  <input v-if="edit" type="text" name="name" id="name" v-model="name">
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-xl-3">
                <h6 class="mb-0">Phone</h6>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{phone}}</span>
                  <input v-if="edit" type="text" name="phone" id="phone" v-model="phone">
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-xl-3">
                <h6 class="mb-0">Address</h6>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{address}}</span>
                  <input v-if="edit" type="text" name="address" id="address" v-model="address">
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ModifyUserDetails',
  data: () => ({
    email: 'abc@gmail.com',
    name: 'ABC',
    address: 'NA',
    phone: 9876543210,
    edit: false
  }),
  methods: {
    // authenticate () {
    //   fetch('base_url', { method: 'POST', body: JSON.stringify.data }).then(res => res.json()).then().catch(error => console.error('Error', error))
    // },
    toggleEdit () {
      this.edit = !this.edit
    },
    saveEdit () {
      const data = {
        name: this.name,
        // email: this.email,
        address: this.address,
        phone: this.phone
      }
      // send edit details
      console.log(data)
      this.toggleEdit()
    }
  }
}
</script>

<style>
.btn-outline-primary {
    color: burlywood;
    border-color: #800000;
}
.btn-outline-primary:hover{
  background-color:black;
  border-block-color: #800000;
}
</style>
