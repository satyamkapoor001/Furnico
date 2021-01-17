<template>
  <div class="Loginform">
    <h1>{{ msg }}</h1>
    <div class="login">
<form @submit="submitData" method="post">
    <div class="imgcontainer">
    <img src="@/assets/loginuser.png" alt="Avatar" class="avatar">
    </div>
<div class="container">
    <label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required v-model="user.email">

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required v-model="user.password">
    <label>
      <input type="checkbox" id="merchantcheck" v-model="merchant"> Merchant
    </label>
    <div class="centerdiv">
    <button type="submit" class="center" id="signin">Sign In</button>
    </div>
  </div>
</form>
<div class="centerdiv">
 <button id="Registerbtn" class="center" @click="$router.push('Register')">Create new account</button>
 </div>
 </div>
 </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data () {
    return {
      user: {
        email: null,
        password: null
      },
      merchant: false
    }
  },
  methods: {
    submitData (e) {
      if (this.merchant === false) {
        this.axios.post('http://10.177.68.56:8085/user/loginCustomer', this.user).then((resp) => {
          console.warn('response', resp.data.value)
          if (resp.data.value !== 'failure') {
            this.$router.push('/')
          } else {
            this.$alert('Invalid email/password')
          }
        })
      } else {
        this.axios.post('http://10.177.68.56:8085/user/loginMerchant', this.user).then((resp) => {
          console.warn('response', resp)
          if (resp.data.value !== 'failure') {
            this.$router.push('Home')
          } else {
            this.$alert('Failed to login')
          }
        })
      }
      e.preventDefault()
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login{
    border: 3px solid black;
    padding: 1% 1% 30% 1%;
    margin:1% 33%;
    display: block;
    align-content: center;
}
.login * {
    padding: 5px 10px;
}
.imgcontainer{
    margin: 0% 3%;
}
#emailtxt{
    display: inline-block;
    width : 40%;
    text-align: center;
}
#emailbar{
    width: 40%;
    display: inline-block;
}
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.center{
  top: 50%;
  left: 50%;
  margin: 1%;
}
.centerdiv{
    position: relative;
}
#signin{
    margin: 2% 0% 0% 0%;
    cursor: pointer;
  width: 35%;
  opacity: 0.9;
  background-color: grey;
}
#Registerbtn:hover, #signin:hover{
  opacity: 1;
}
#Registerbtn{
    cursor: pointer;
  width: 35%;
  opacity: 0.9;
  background-color: grey;
}
</style>
