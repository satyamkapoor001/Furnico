<template>
  <div class="Loginform">
    <h1>{{ msg }}</h1>
    <div class="myaccount">
    <div class="imgcontainer">
    <img src="@/assets/loginuser.png" alt="Avatar" class="avatar">
    </div>
    <section class="Details">
      <div class="detailsdiv">
        <p>Name</p><p>{{name}}</p>
      </div>
      <div class="detailsdiv">
        <p>Email</p><p>{{email}}</p>
      </div>
      <div class="detailsdiv">
        <p>Phone number</p><p>{{phonenumber}}</p>
      </div>
      <div class="detailsdiv">
        <p>Address</p><p>{{address}}</p>
      </div>
      <div class="detailsdiv">
        <p><a @click="$router.push('MyOrders')">My Orders</a></p>
      </div>
      <!-- <div class="detailsdiv">
        <p><a @click="$router.push('MyOrders')">My Orders</a></p>
      </div> -->
      <div class="detailsdiv">
        <p><a @click="$router.push('ModifyUserDetails')">Modify Details</a></p>
      </div>
      <div class="detailsdiv">
        <p><a @click="$router.push('ChangePassword')">Change Password</a></p>
      </div>
    </section>
 </div>
 </div>
</template>

<script>
export default {
  name: 'MyAccount',
  data: () => ({
    name: 'ABC',
    email: 'abc@gmail.com',
    phonenumber: 9876543210,
    address: 'NA'
  }),
  props: {
    msg: String
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
  color: orange;
}
.detailsdiv a:hover {
  cursor: pointer;
}
.myaccount{
    border: 3px solid black;
    margin:0% 33%;
    align-content: left;
    align-items: left;
}
.myaccount * {
    padding: 3px 7px;
}
.detailsdiv * {
  display: inline-block;
  text-align: left;
  margin: 0%;
}
.imgcontainer{
    margin: 0% 3%;
    align-content: center;
}
</style>
