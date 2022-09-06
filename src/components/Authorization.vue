<template>
  <div id="auth">
    <div class="container">
    
      <div class="card border-0  text-center w-50  m-auto shadow-lg p-3 py-5 border" >
        <img
          src="../assets/logo.jpg"
          alt=""
          class="card-img-top w-25 mb-4 m-auto d-block"
        />
        <div class=" text-uppercase text-light fw-bold" >
        Samarqand viloyat, <br> bolalar ko'p tarmoqli tibbiyot markazi.
        </div>
        <div class="card-body">
          <form>
            <input
              type="text"
              class="form-control rounded-pill mb-3 w-75 m-auto d-block p-2"
              placeholder="login"
              id="login"
            />

            <input
              type="password"
              class="form-control rounded-pill w-75 m-auto d-block p-2"
              placeholder="password"
              id="password"
            />
            <button
              class="btn btn-primary rounded-pill my-4 d-block  w-75 m-auto "
              @click="Login"
              @keyup.enter="Login"
              data-mdb-toggle=""
              data-mdb-target="#staticBackdrop"
              id="kirish"
            >
              <span v-if="load" class="  fw-light opacity-75" >kirish</span>
              <div class="spinner-border  " style="font-size:10px !important" v-else-if="!load">

</div>
            </button>
          </form>
        </div>
       
      </div>
  
  <Transition name="bounce">
<div class="badge bg-danger p-5 w-75 m-auto d-block position-relative" v-if="show">
<i class="far fa-times-circle text-white fs-2" style="cursor:pointer; position:absolute; top:10px; right:20px" @click="show = !show"></i>
  <h4>Login yoki parol xato</h4>
</div>
</Transition>


    </div>

  </div>
</template>

<script setup>
  import axios from 'axios'
import { ref } from "vue";
import { useRouter } from "vue-router";
let show = ref(false)
const router = useRouter();
let load = ref(true)

const Login = async(e) => {
  e.preventDefault();


  let login = document.querySelector("#login").value;
  let password = document.querySelector("#password").value;

if(login !== 'AZIZOV' || password !== 'AZIZOV52'){
    show.value = true
    
}else if(login == 'AZIZOV' || password == 'AZIZOV52'){
  show.value = false
  load.value = false
}

  let response = await axios.post(
      `https://itmed.herokuapp.com/api/Auth?login=${login}&pass=${password}`)
     

if(response.data){
  load.value = true
  localStorage.setItem('jwt', response.data)
  router.push({name:'home'})


}


};



</script>

<style lang="scss" scoped>
#auth {
  display: flex;
  align-items: center;
  height: 100vh;

background: url('../assets/vec.jpg');
background-attachment: fixed;
background-size: cover;


.card{
 
  background-position: center;
  backdrop-filter: blur(17px) saturate(180%);
    -webkit-backdrop-filter: blur(17px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.2);
  
   box-shadow: outset 0 0 2px white !important;

 
}

.card-header{
  font-family: 'Palanquin Dark', sans-serif;
}

#kirish{
  transition: .5s linear;
  
}

.btn:hover #kirish{
  transform: translateX(20px) scale(1.5);
}
}

::placeholder{
  color: rgba(16, 78, 80, 0.5) !important;
  padding-left: 10px;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width:768px){
  .card{
    width: 100% !important;
  }
}
@import url('https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@600&display=swap');
</style>