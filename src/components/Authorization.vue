<template>
  <div id="auth">
    <div class="container">
      <div class="card text-center w-50 m-auto shadow-lg p-3">
        <img
          src="https://ssv.uz/assets/public/images/logo.svg"
          alt=""
          class="card-img-top w-25 m-auto d-block"
        />
        <div class="card-header">
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
              class="btn btn-primary mt-3 d-block w-75 m-auto"
              @click="Login"
              @keyup.enter="Login"
              data-mdb-toggle=""
              data-mdb-target="#staticBackdrop"
              id="kirish"
            >
              kirish
            </button>
          </form>
        </div>
        <div class="card-footer text-muted p-2">tashrif buyurilgan vaqt</div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

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
}
</style>