<template>
  <div id="auth">
    <div class="container">
      <Transition name="bounce">
      <div class="card text-center w-50 m-auto shadow-lg p-3 py-5" v-if="show">
        <img
          src="https://ssv.uz/assets/public/images/logo.svg"
          alt=""
          class="card-img-top w-25 m-auto d-block"
        />
        <div class="card-header ">
          O'zbekiston Respublikasi so'gliqni saqlash vazirligi
        </div>
        <div class="card-body">
          <form>
            <input
              type="text"
              class="form-control mb-3 w-75 m-auto d-block p-2"
              placeholder="login"
              id="login"
            />

            <input
              type="password"
              class="form-control w-75 m-auto d-block p-2"
              placeholder="password"
              id="password"
            />
            <button
              class="btn btn-primary mt-3 d-block w-75 m-auto d-flex justify-content-center align-items-center gap-2"
              @click="Login"
              @keyup.enter="Login"
              data-mdb-toggle=""
              data-mdb-target="#staticBackdrop"
              id="kirish"
            >
              kirish
              <i class="fas fa-sign-in-alt"></i>
            </button>
          </form>
        </div>
        <div class="card-footer text-muted p-2">tashrif buyurilgan vaqt</div>
      </div>
    </Transition>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
let show = ref(true)
const router = useRouter();
const isOpen = ref(true);
const Login = (e) => {
  e.preventDefault();

  let login = document.querySelector("#login");
  let password = document.querySelector("#password");
  let kirish = document.querySelector("#kirish");

  if (login.value == "admin" && password.value == "admin") {
    router.push({ name: "home" });
    console.log(router);
  } 
};
</script>

<style lang="scss" scoped>
#auth {
  display: flex;
  align-items: center;
  height: 100vh;

background-color: #330055;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23330055' cx='50' cy='0' r='50'/%3E%3Cg fill='%2337105d' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%233b1e65' cx='50' cy='100' r='50'/%3E%3Cg fill='%233f2a6d' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23423575' cx='50' cy='200' r='50'/%3E%3Cg fill='%2345407d' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23484b85' cx='50' cy='300' r='50'/%3E%3Cg fill='%234a568d' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%234b6196' cx='50' cy='400' r='50'/%3E%3Cg fill='%234c6d9e' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%234d78a7' cx='50' cy='500' r='50'/%3E%3Cg fill='%234d84af' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%234d8fb8' cx='50' cy='600' r='50'/%3E%3Cg fill='%234b9bc1' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%2349a7c9' cx='50' cy='700' r='50'/%3E%3Cg fill='%2346b3d2' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%2342bfdb' cx='50' cy='800' r='50'/%3E%3Cg fill='%233dcbe4' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%2335d7ed' cx='50' cy='900' r='50'/%3E%3Cg fill='%232ae4f6' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%2317F0FF' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: contain;

.card{
 
  background-position: center;

}
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
</style>