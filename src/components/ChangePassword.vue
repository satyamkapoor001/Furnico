<template>
<div class="changepassword">
    <h2>Change User Password</h2>
    <div class="row gitters-sm card card-body">
      <div class="d-flex flex-column align-items-center text-center">
      <div class="mt-3">
          <button class="btn btn-outline-primary" @click="toggleEdit">Edit</button>
          <button v-if="edit" class="btn btn-outline-primary" @click="isEqual();saveEdit();">Save</button>
        </div>
      </div>
    </div>
    <div class="col-xl-8">
        <div class="mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-xl-3">
                <h6 class="mb-0">Enter new Password</h6>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{password}}</span>
                  <input v-if="edit" type="password" name="name" id="password" v-model="password">
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-xl-3">
                <h6 class="mb-0">Enter New Password again</h6>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{passwordagain}}</span>
                  <input v-if="edit" type="password" name="phone" id="password" v-model="passwordagain">
                </div>
              </div>
            </div>
            <hr>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ChangePassword',
  data: () => ({
    password: '',
    passwordagain: '',
    edit: false
    // showPassword: false
  }),
  methods: {
    // authenticate () {
    //   fetch('base_url', { method: 'POST', body: JSON.stringify.data }).then(res => res.json()).then().catch(error => console.error('Error', error))
    // },
    isEqual () {
      if (this.password === this.passwordagain) {
        this.$alert('Sucessfully changed')
      } else {
        this.$alert('Check the input')
      }
    },
    toggleEdit () {
      this.edit = !this.edit
    },
    saveEdit () {
      const data = {
        password: this.password,
        passwordagain: this.passwordagain
        // showPassword: false
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
