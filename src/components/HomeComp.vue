<template>
  <div id="home">
    <div class="container d-flex p-2 align-items-center" style="height: 100vh">
      <div class="container p-4">
        <div class="w-100 m-auto shadow-lg h-75 p-5 rounded-8" id="glass">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="text-dark fw-bold text-center pt-0 pb-4 text-muted">
              BO'LIMLAR
            </h3>
          </div>

          <div class="w-100 layout">
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Pulmonologiya</router-link
            >
            <router-link
              :to="{ name: 'second' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Allergeologiya</router-link
            >
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Gematologiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Nevrologiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Kardiologiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Gastroenterologiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Chaqaloqlar patologiyasi bo'limi
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Chala tug'ilgan chaqaloqlar bo'limi
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Neonatal Reanimatsiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Reanimatsiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Erta yosh bolalar patologiyasi
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Otoloringologiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Neyroxirurgiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >YUJJ
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Yiringli xirurgiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >ginekologiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Rejali xirurgiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Urologiya
            </router-link>
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Neonotal xirurgiya</router-link
            >
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Ortopediya-1</router-link
            >
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Ortopediya-2</router-link
            >
            <router-link
              :to="{ name: 'first' }"
              class="
                btn btn-success
                bg-gradient
                d-flex
                justify-content-center
                align-items-center
              "
              >Kardioxirurgiya</router-link
            >
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <button
              @click="$router.go(-1)"
              class="
                btn btn-danger
                w-25
                d-flex
                justify-content-center
                align-items-center
                gap-2
              "
            >
              <i class="fas fa-arrow-circle-left"></i>log out
            </button>
            <router-link
              :to="{ name: 'addInfo' }"
              class="
                btn btn-primary
                bg-gradient
                d-flex
                justify-content-center
                gap-3
                align-items-center
                my-4
                w-25
                d-block
              "
            >
              ma'lumot qo'shish <i class="fas fa-plus-circle fs-5"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#home {
  background-color: #eeeeee;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='157' height='157' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23c6c6c6' fill-opacity='0.1'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 30px 21px;
    grid-template-areas:
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . ."
      ". . . .";
    position: relative;
    z-index: 2227;
    font-family: "Righteous", cursive;
    a {
      text-transform: capitalize;
      font-size: 0.8em;
      font-family: "Comfortaa", cursive;
    }
  }

  h3 {
    font-family: "Rubik Dirt", cursive;
  }

  #glass {
    backdrop-filter: blur(8px) saturate(200%);
    -webkit-backdrop-filter: blur(8px) saturate(200%);

    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }
}

@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap");
</style>