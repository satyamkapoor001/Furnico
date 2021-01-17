<template>
  <div class="Registerform">
    <h1>{{ msg }}</h1>
    <div class="register">
<form @submit="submitData" method="post">
  <div class="container">
     <div><label>
      <input type="checkbox"  id="merchantcheck" v-model="merchant"> Merchant
    </label></div>
    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" id="name" required v-model="user.name">
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required v-model="user.email">
    <label for="phonenumber" v-if="!merchant"><b>Phone Number</b></label>
    <input v-if="!merchant" type="text" placeholder="Enter Phone Number" name="phonenumber" id="phonenumber" required v-model="user.phonenumber">
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required v-model="user.password">
    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required v-model="rpassword">
    <label v-if="!merchant" for="address"><b>Contact Address</b></label>
    <input v-if="!merchant" type="text" placeholder="Enter Address" name="address" id="address" required v-model="user.address">
    <button type="submit" class="registerbtn">Register</button>
  </div>
  <div class="container signin">
    <p>Already have an account? <a @click="$router.push('Login')" id="signin">Sign in</a>.</p>
  </div>
</form>
 </div>
 </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  name: 'Register',
  props: {
    msg: String
  },
  data () {
    return {
      user: {
        email: null,
        name: null,
        password: null,
        phonenumber: null,
        address: null
      },
      merch: {
        name: null,
        password: null,
        email: null
      },
      merchant: false,
      rpassword: null
    }
  },
  methods: {
    submitData (e) {
      if (this.user.password !== this.rpassword) {
        this.$alert('Password do not match')
      } else if (this.merchant === false) {
        this.axios.post('http://10.177.68.56:8085/user/registerCustomer', this.user).then((resp) => {
          console.warn('response', resp)
          this.$router.push('Login')
        })
      } else {
        this.merch.name = this.user.name
        this.merch.password = this.user.password
        this.merch.email = this.user.email
        this.axios.post('http://10.177.68.56:8085/user/registerMerchant', this.merch).then((resp) => {
          console.warn('response', resp)
          this.$router.push('Login')
        })
      }
      console.warn(this.user)
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
input[type=text], input[type=password] {
  width: 95%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
#signin:hover {
  cursor: pointer;
}
.register{
    border: 3px solid black;
    padding: 1% 1% 1% 1%;
    margin:1% 33%;
    display: block;
    align-content: center;
}
</style>
