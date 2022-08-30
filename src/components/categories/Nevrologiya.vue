<template>
    <div id="first" class="bg-light bg-gradient">
      <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center">
          <button
            class="
              btn btn-success
              my-4
              d-flex
              justify-content-center
              align-items-center
              gap-2
            "
            @click="back"
          >
            bo'limlar <i class="fas fa-caret-left" style="font-size: 18px"></i>
          </button>
  
      
        <form class="w-75 d-flex justify-content-center gap-2">
   <input type="text" placeholder="Ism" class="p-1 form-control w-25"  v-model="searchText">
             <input type="text" placeholder="familiya" class="p-1 form-control w-25"  v-model="searchText2">
  
             <button class="btn btn-success" @click="Search" data-mdb-toggle="modal" data-mdb-target="#exampleModal"> <i class="fas fa-search fsz-3"></i> </button>
        </form>
    
   
          <h1 class=" badge bg-grayish p-3 d-flex align-items-center">Nevrologiya</h1>
          <div class="d-flex justify-content-center" v-if="load"></div>
        </div>
  
      
  
  
  <!-- Button trigger modal -->
  
  <!-- Modal -->
  <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen" >
      <div class="modal-content ">
        <div class="modal-header">
          <h4 class="modal-title text-muted" id="exampleModalLabel">Siz qidirgan ma'lumotlar bo'yicha, topilgan natijalar.</h4>
          <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
  
  
    <table class="table align-middle  w-100" v-if="searchShow"  style="table-layout: fixed; width: 100%">
         
    <thead>
      <tr class="bg-grayish text-white">
        <th scope="col">#</th>
       
        <th scope="col">Ism</th>
        <th scope="col">Familiya</th>
        <th scope="col">Sharif</th>
        <th scope="col">bulim</th>
        <th scope="col">Adress</th>
        <th scope="col">Tug'ilgan kun</th>
        <th scope="col">Doctor</th>
        <th scope="col">Diagnostika</th>
       
      </tr>
    </thead>
    <tbody>
      <tr v-for="list in searchList " :key="list.id" class="bg-success text-white">
       <td style="word-wrap: break-word">{{list.number}}</td>
        <td style="word-wrap: break-word">{{list.firstName}}</td>
        <td style="word-wrap: break-word">{{list.lastName}}</td>
        <td style="word-wrap: break-word">{{list.fatherName}}</td>
        <td style="word-wrap: break-word">{{list.department}}</td>
        <td style="word-wrap: break-word">{{list.address}}</td>
        <td style="word-wrap: break-word">{{list.birthday}}</td>
        <td style="word-wrap: break-word">{{list.doctor}}</td>
        <td style="word-wrap: break-word">{{list.diagnosis}}</td>
     
        
      </tr>
  
    </tbody>
  </table>
  
  
  
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal" @click="tozala">yopish</button>
        
        </div>
      </div>
    </div>
  </div>
  
  
        <table class="table table-striped table-responsive  mb-0 bg-light shadow-lg " style="table-layout: fixed; width: 100%">
  
  
  <!-- Button trigger modal -->
  
  
  <!-- Modal -->
  
  
  
          <thead class="bg-light">
            <tr class="bg-grayish text-white bg-gradient text-center">
              <th scope="col">#</th>
              <th scope="col">Ism</th>
              <th scope="col">Familiya</th>
              <th scope="col">Sharif</th>
               <th scope="col">Address</th>
                <th scope="col">Bo'lim</th>
                 <th scope="col">Tug'ilgan sanasi </th>
                  <th scope="col">Shifokor</th>
                   <th scope="col">tashxis</th>
                     <th scope="col"></th>
                    
            </tr>
          </thead>
          <div
            class="spinner-border d-block m-auto text-center"
            role="status"
            v-if="load"
            style="position:absolute; left:50%; transform(translate(-50%,-50%)); top:60%"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <tbody class="text-center">
            <tr v-for="user in users" :key="user.id">
              <div class="modal fade bg-white" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel2">Ogohlantirish!</h5>
          <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">Siz haqiqatdan ham ushbu foydalanuvchi ma'lumotlarini o'chirmoqchimisiz?</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal"  @click="deleteUser(user.id)">ha</button>
  
        </div>
      </div>
    </div>
  </div>
              <td class="border " style="word-wrap: break-word;" >
                {{ user.number}}
              </td>
              <td scope="row" class="px-1  border" style="word-wrap: break-word">
                {{ user.firstName }}
              </td>
              <td scope="row" class="px-1  border" style="word-wrap: break-word">
                {{ user.lastName }}
              </td>
  
              <td scope="row" class="px-1  border" style="word-wrap: break-word">
                {{ user.fatherName }}
              </td>
  
  
              <td scope="row" class="px-1  border" style="word-wrap: break-word">
                {{ user.address }}
              </td>
  
  
              <td scope="row" class="px-1  border" style="word-wrap: break-word">
                {{ user.department }}
              </td>
  
              <td scope="row"  class="px-1  border" style="word-wrap: break-word">
                {{ user.birthday }}
              </td>
  
              <td scope="row" class="px-1  border" style="word-wrap: break-word">
                {{ user.doctor }}
              </td>
              <td scope="row" class="px-1  border" style="word-wrap: break-word">
                {{ user.diagnosis }}
              </td>
            <td scope="row" class="d-flex gap-2 align-items-center  border-0">
                <router-link
                  :to="{ name: 'edit', params: { id: user.id } }"
                  class="
                    btn btn-warning
                    btn-sm
                    d-flex
                    justify-content-between
                    align-items-center
                    gap-2
                  "
                >
                  <i class="fas fa-pen"></i></router-link
                >
  
                <button class="btn btn-danger btn-sm" data-mdb-toggle="modal" data-mdb-target="#exampleModal2">
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
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  let router = useRouter();
  let users = ref([]);
  let searchList = ref([])
  
  let load = ref(true);
  let searchText = ref('')
  let searchText2 = ref('')
  
  let searchShow = ref(false)
  onMounted(async () => {
    let response = await axios.get("https://itmed.herokuapp.com/api/Discharges/nevrologiya/20/1", {
       headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
    });
  
    response.data.forEach((el) => {
      load.value = false;
      users.value = response.data;
    });
  });
  
  
  
  
  
  
  let Search = async(e)=>{
    e.preventDefault();
  
    let res = await axios.post('https://itmed.herokuapp.com/api/Discharges/Search/nevrologiya ',
    {
  number:'',
  firstName:searchText.value,
  lastName:searchText2.value,
  fatherName:'',
  address:'',
  department:'',
  birthday:'',
  doctor:'',
  diagnosis:''
  
    },
    
  
    {
       headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
    })
  
  res.data.forEach(el => {
   searchList.value.push(el)
   searchShow.value = true
  
  })
  
  
  
  }
  
  
  let tozala = ()=>{
    searchList.value = []
  }
  
  let deleteUser = async (id)=>{
  
  let response  =  await axios.delete(`https://itmed.herokuapp.com/api/Discharges/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })
  console.log(response)
  
  }
  
  
  
  const back = () => {
    router.go(-1);
  };
  </script>
  
  <style lang="scss" scoped>
  #first {
  
  
  }
  
  .modal-body{
      background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(60,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='3.3'%3E%3Cpath transform='translate(-82.25 18.8) rotate(11.75 1409 581) scale(1.047)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='1.1' transform='translate(-47 47) rotate(14.1 800 450) scale(1.024)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(42.3 -141) rotate(141 401 736) scale(1.024)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='1'%3E%3Cpath transform='translate(282 -18.8) rotate(4.7 150 345) scale(0.953)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='2.2' transform='translate(-188 -117.5) rotate(169.2 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-282 94) rotate(28.2 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;
  background-attachment: fixed !important;
  background-size: cover !important;
    }
  </style> 