<template>
    <div id="first" class="bg-light bg-gradient">
      <div class="container">
        <h1 class="pt-3">Bo'lim 2</h1>
  <button class="btn btn-success my-4 d-flex justify-content-center align-items-center gap-2" @click="back">bo'limlar <i class="fas fa-caret-left " style="font-size: 18px;"></i></button>
  <div class="d-flex justify-content-center" v-if="load">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    
  </div>
        <table class="table align-middle mb-0 bg-light shadow-lg"  >
          <thead class="bg-light">
            <tr class="bg-grayish text-white bg-gradient ">
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td scope="row">
                {{ user.id }}
              </td>
              <td>
                {{ user.title }}
              </td> 
              <td>
                {{ user.body }}
              </td>
              <td class="d-flex gap-2  align-items-center pt-5 border-0">
  
  <router-link :to="{name:'edit', params:{id:user.id}}" class="btn btn-warning d-flex justify-content-between align-items-center gap-2"> <i class="fas fa-pen"></i>edit</router-link>
  
                <button class="btn btn-danger">
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
  import axios from "axios";
  import { onMounted } from "vue";
  import {ref} from 'vue'
  import { useRouter } from "vue-router";
  
  let router = useRouter()
  let users = ref([]);
  
  
   onMounted( async()=>{
   
    let response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
  
      response.data.forEach(el => {
        users.value = response.data
      })
  
  
  
  })
  
  
  const back = ()=> {
    router.go(-1)
  }
  
  
  
  
  </script>
  
  <style lang="scss" scoped>
  #first {
  
  }
  </style> 