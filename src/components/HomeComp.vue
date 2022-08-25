<template>
    <div id="home">
<div class="container d-flex p-5 align-items-center" style="height:100vh">

<div class="container p-4">
      <div class="w-50 m-auto shadow-lg bg-light h-75 p-5 rounded-8">
<h2 class="text-dark fw-bold text-center pb-4 opacity-70">BO'LIMLAR</h2>
<div class="w-100 layout">
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
<router-link :to="{name:'first'}" class="btn btn-success bg-gradient d-flex justify-content-center align-items-center">bo'lim1</router-link>
</div>

  <button @click="$router.go(-1)" class="btn btn-danger w-25 mt-3 d-flex justify-content-around align-items-center"><i class="fas fa-arrow-circle-left "></i>orqaga</button>
  </div>
</div>

</div>


    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#home{
    background: rgb(51,159,59);
background: linear-gradient(35deg, rgba(51,159,59,0.7420344846923144) 0%, rgba(78,238,255,0.924107313823967) 97%);
.layout{
 display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr; 
  gap: 30px 30px; 
  grid-template-areas: 
    ". ."
    ". ."
    ". ."
    ". .";
    position: relative;
    z-index: 2227;
}



}
</style>