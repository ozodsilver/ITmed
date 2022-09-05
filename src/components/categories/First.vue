<template>
  <div id="first" class="bg-light bg-gradient">
    <div class="container-fluid">
      <div class="d-flex d-inline-block justify-content-between gap-1 align-items-center ">
        <button
          class="
            btn btn-success
            btn-sm
            btn-rounded
            my-4
            d-flex
            justify-content-center
            align-items-center
            gap-2
          "
          @click="back" 
        >
          <span id="bulimlar">bo'limlar </span> <i class="fas fa-caret-left" style="font-size: 18px"></i>
        </button>

    
      <form class="w-100 d-flex justify-content-center gap-2">
        <input type="text" class="form-control" placeholder="number" v-model="number" style="width:80px">
 <input type="text" placeholder=" Ism" class="p-1 p-sm-0 form-control w-50"  v-model="searchText">
           <input type="text" placeholder="familiya" class="p-1 form-control w-50"  v-model="searchText2">

           <button class="btn btn-sm  btn-success" @click="Search" data-mdb-toggle="modal" data-mdb-target="#exampleModal"> <i class="fas fa-search fsz-3"></i> </button>
      </form>
  
 
        <h1 class=" badge bg-grayish py-2 mt-2   d-flex align-items-center" id="bulim">Pulmonologiya</h1>
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

<div class="table-responsive table-responsive-sm">
  <table class="table align-middle table-hover table-dark table-striped w-100 " v-if="searchShow"  style=" width: 100%; ">
       
       <thead>
         <tr class="bg-light text-white">
           <th scope="col">#</th>
           <th scope="col">Ism</th>
           <th scope="col">Familiya</th>
           <th scope="col">Sharif</th>
           <th scope="col">bulim</th>
           <th scope="col">Adress</th>
           <th scope="col">Tug'ilgan kun</th>
           <th scope="col">Doctor</th>
         
           <th scope="col">Diagnostika</th>
           <th scope="col">MKB 10</th>
          
         </tr>
       </thead>
       <tbody>
         <tr v-for="list in searchList " :key="list.id" class=" text-white">
          <td style="word-wrap: break-word" >{{list.number}}</td>
           <td style="word-wrap: break-word">{{list.firstName}}</td>
           <td style="word-wrap: break-word">{{list.lastName}}</td>
           <td style="word-wrap: break-word">{{list.fatherName}}</td>
           <td style="word-wrap: break-word">{{list.department}}</td>
           <td style="word-wrap: break-word">{{list.address}}</td>
           <td style="word-wrap: break-word">{{list.birthday}}</td>
           <td style="word-wrap: break-word">{{list.doctor}}</td>
           <td style="word-wrap: break-word">{{list.diagnosis}}</td>
           <td style="word-wrap: break-word">{{list.mkB10}}</td>
        
           
         </tr>
     
       </tbody>
     </table>
</div>
 



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal" @click="tozala">yopish</button>
      
      </div>
    </div>
  </div>
</div>

<div class=" table-responsive-sm table-responsive w-100 overflow-auto">
  <table class="table table-responsive table-striped table-hover  mb-0 bg-light shadow-lg" >


<thead class="bg-light" style="font-size:0.9em;  ">
  <tr class="bg-grayish text-white bg-gradient " style="text-align: justify">
    <th scope="col">#</th>
    <th scope="col">Ism</th>
    <th scope="col">Familiya</th>
    <th scope="col">Sharif</th>
     <th scope="col">Address</th>
      <th scope="col">Bo'lim</th>
       <th scope="col">Tug'ilgan sanasi </th>
        <th scope="col">Shifokor</th>
         <th scope="col"> Tashxis</th>
         <th>MKB 10</th>
           <th scope="col"></th>
          
  </tr>
</thead>
<!-- <div
  class="spinner-border d-block m-auto text-center "
  role="status"
  v-if="load"
  style="position:absolute; left:50%; transform(translate(-50%,-50%)); top:60%"
>
  <span class="visually-hidden">Loading...</span>
</div> -->

<div style="position:fixed; left:45%; transform(translate(-50%,-50%)); top:50%" class="bg-primary text-white rounded-3 border-3 d-flex justify-content-center align-items-center p-4" v-if="load2">
  <div class="spinner-border text-white " role="status" >
  <span class="visually-hidden">Loading...</span>
</div>

</div>




<tbody class="text-center" style="font-size: 0.9em;">
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
    <td class="border position-relative fw-bold" style="word-wrap: break-word; text-align: justify;" >
      {{ user.number}}
      <span style="position:absolute;bottom:0; right:5px; font-size:9px" class="text-muted opacity-60">{{user.time}}</span>
    </td>

   
    <td scope="row" class="px-1  border" style="word-wrap: break-word;  text-align: justify">
      {{ user.firstName }}

    </td>
    <td scope="row" class="px-1  border" style="word-wrap: break-word; text-align: justify">
      {{ user.lastName }}
    </td>

    <td scope="row" class="px-1  border" style="word-wrap: break-word; text-align: justify" >
      {{ user.fatherName }}
    </td>
    


    <td scope="row" class="px-1  border" style="word-wrap: break-word; text-align: justify">
      {{ user.address }}
    </td>


    <td scope="row" class="px-1  border" style="word-wrap: break-word; text-align: justify">
      {{ user.department }}
    </td>

    <td scope="row"  class="px-1  border" style="word-wrap: break-word; text-align: justify">
      {{ user.birthday }}
    </td>

    <td scope="row" class="px-1  border" style="word-wrap: break-word; text-align: justify">
      {{ user.doctor }}
    </td>
    <td scope="row" class="px-1 text-start border" style="word-wrap: break-word;  ">
      {{ user.diagnosis }}
    </td>

    <td scope="row" class="px-1  border" style="word-wrap: break-word; text-align: justify">
      {{ user.mkB10 }}
    </td>
  <td scope="row" class="d-flex gap-3 align-items-center  border-0 flex-sm-wrap flex-xl-nowrap">
      <router-link
        :to="{ name: 'edit', params: { id: user.id } }"
        class="
          btn 
          px-2
          btn-sm 
          d-flex
          justify-content-between
          align-items-center
          gap-2
        "
        id="pen"
      >
        <i class="fas fa-pen "></i></router-link
      >

      <button class="btn px-2 btn-danger btn-sm" data-mdb-toggle="modal" data-mdb-target="#exampleModal2">
        <i
          class="far fa-trash-alt text-white rounded-5 bg-danger"
          style="cursor: pointer"
        ></i>
      </button>
    </td>
  </tr>
</tbody>
</table>

<div class="badge p-1 p-sm-5 w-100 bg-danger  position-fixed m-auto" style="bottom:10px; right:10px; z-index:44" v-if="info">
<h3 class="text-wrap">Bu Sahifa mavjud emas! Iltimos ma'lumotlar to'ldirilganligini tekshiring  <i class="fas fa-exclamation-triangle text-warning  fs-3"></i></h3>
</div>

</div>
    
      <paginate
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'qaytish'"
    :next-text="'keyingisi'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    @click="clickCallback"
    style="cursor:pointer"
    v-if="!load"
    class="mt-3"
  >
  </paginate>
    </div>

   
  </div>
</template>


<script>
    import Paginate from 'vuejs-paginate-next';
  import axios from 'axios';

 export default {
  components:{
    Paginate
  },
  data(){
return{
users:[],
searchList:[],
load:true,
searchText:'',
searchText2:'',
searchShow:false,
nomer:1,
number:'',
load2:false,
info:false,


}
  },

  methods:{

Search(e){
  e.preventDefault();

  axios.post('https://itmed.herokuapp.com/api/Discharges/Search/pulmonologiya',
  {
number:this.number,
firstName:this.searchText,
lastName:this.searchText2,
fatherName:'',
address:'',
department:'',
birthday:'',
doctor:'',
diagnosis:'',
mkB10:''

  },
  

  {
     headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json'
  }
  }).then(res => {
    res.data.forEach(el => {
 this.searchList.push(el)
 this.searchShow = true

})
  })



},


tozala(){
  this.searchList = []
},

deleteUser(id){

let response  = axios.delete(`https://itmed.herokuapp.com/api/Discharges/${id}`, {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json'
  }
})
console.log(response)

},

back(){
  this.$router.go(-1)
},

async clickCallback (pageNum = 1) {

  console.log(pageNum)
  this.load2 = true
  await axios.get(`https://itmed.herokuapp.com/api/Discharges/pulmonologiya/20/${pageNum}`, {
     headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  }
  }).then(res => {
   console.log(res)
    this.load = false
    this.load2 = false
   this.users= res.data;
  }).catch(err => {
    console.log(err)
    if(err.name == 'AxiosError'){
      this.load2 = false

    }
  })


      }

  },

  async mounted(){
    

this.clickCallback()

}
  
 }
</script>



<style lang="scss" scoped>
#first {
  font-family: 'Thasadith', sans-serif;

}

@media (max-width:600px){
  #bulim{
    display: none !important;
  }

  #pen{
    display: none !important;
  }

  #bulimlar{
    display: none !important;
  }
}

.modal-body{
    background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(60,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='3.3'%3E%3Cpath transform='translate(-82.25 18.8) rotate(11.75 1409 581) scale(1.047)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='1.1' transform='translate(-47 47) rotate(14.1 800 450) scale(1.024)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(42.3 -141) rotate(141 401 736) scale(1.024)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='1'%3E%3Cpath transform='translate(282 -18.8) rotate(4.7 150 345) scale(0.953)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='2.2' transform='translate(-188 -117.5) rotate(169.2 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-282 94) rotate(28.2 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;
background-attachment: fixed !important;
background-size: cover !important;
  }

  @import url('https://fonts.googleapis.com/css2?family=Thasadith:wght@700&display=swap');
</style> 