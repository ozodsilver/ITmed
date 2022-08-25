<template>
  <div id="first">
    <div class="container">
 

      <table class="table align-middle mb-0 bg-light shadow-lg rounded-6 ">
        <thead class="bg-light">
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>
              {{ user.id }}
            </td>
            <td>
              {{ user.title }}
            </td>
            <td>
              {{ user.body }}
            </td>
            <td class="d-flex gap-2">

<router-link :to="{name:'edit', params:{id:user.id}}" class="btn btn-warning d-flex justify-content-between align-items-center gap-2"> <i class="fas fa-pen"></i>edit</router-link>

              <button class="btn btn-danger" @click="deleteUser(user.id)">
                <i
                  class="far fa-trash-alt text-white rounded-5 bg-danger"
                  style="cursor: pointer"
                ></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import zapros from "../../reusableFunctions/getData";
import {  useStore } from "vuex";
const { users, getInfo } = zapros();

console.log(getInfo(), users);
let Store = useStore()
let deleteUser = (id)=>{
if(users.value[id].id-1 == id){
   users.value.splice(id,1)
   console.log(users.value[id].id-1)

}

}


</script>

<style lang="scss" scoped>
#first {
  height: 100vh;
}
</style> 