<template>
  <div id="edit">
    <div class="container-fluid p-3">
      <h1 class="my-4 text-muted">
        Tahrirlash <i class="fas fa-pencil-alt fs-4"></i>
      </h1>

   <div class="table-responsive">
    <table class="table table-dark align-middle rounded-9">
<thead >
  <tr >
  <th class="rounded-9">Nomer</th>
  <th>Ism</th>
  <th>Familiya</th>
  <th>Otasining ismi</th>
  <th>Address</th>
  <th>bo'lim</th>
  <th>Tug'ilgan sana</th>
  <th>Shifokor</th>
  <th>Diagnostika</th>
  <th>MKB10</th>
  <th><i class="fas fa-arrow-down"></i></th>
  <th><i class="fas fa-arrow-up"></i></th>

</tr>
</thead>

<tbody>
  <tr v-for="nat in natija" :key="nat.id">
 
 <td>{{ nat.number }}</td>
 <td>{{ nat.firstName }}</td>
 <td>{{ nat.lastName }}</td>
 <td>{{ nat.fatherName }}</td>
 <td>{{ nat.address }}</td>
 <td>{{ nat.department }}</td>
 <td>{{ nat.birthday }}</td>
 <td>{{ nat.doctor }}</td>
 <td>{{ nat.diagnosis }}</td>
 <td>{{ nat.mkB10 }}</td>
 <td >{{ nat.comeAt }}</td>
 <td>{{ nat.leavAt }}</td>
</tr>
</tbody>


      </table>
   </div>


  <div class="row">
        <div class="col-6 mt-4">
          <label for="ism">number:</label>
          <input
            type="text"
            name=""
            id="number"
            class="form-control"
            placeholder="number:"
            v-model="number"
       
          />
        </div>

        <div class="col-6 mt-4">
          <label for="ism">Ism:</label>
          <input
            type="text"
            name=""
            id="ism"
            class="form-control"
            placeholder="ism kiriting:"
            v-model="ism"
          />
        </div>
        <div class="col-6 mt-4">
          <label for="">familiya:</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="familiya"
            v-model="familiya"
          />
        </div>

        <div class="col-6 mt-4">
          <label for="ism">otasining ismi:</label>
          <input
            type="text"
            name=""
            id="ism"
            class="form-control"
            placeholder="sharif"
            v-model="sharif"
          />
        </div>
        <div class="col-6 mt-4">
          <label for="">address</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="address"
            v-model="address"
          />
        </div>


        <div class="col-6 mt-4">
          <label for="">bo'lim</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="bo'lim"
            v-model="bulim"
          />
        </div>


        <div class="col-6 mt-4">
          <label for="">tugilgan sana</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="example 03.05.1977"
            v-model="sana"
          />
        </div>

        <div class="col-6 mt-4">
          <label for="ism">doctor</label>
          <input
            type="text"
            name=""
            id="ism"
            class="form-control"
            placeholder="doctor"
            v-model="doctor"
          />
        </div>
        <div class="col-6 mt-4">
          <label for="">diagnostica</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="diagnostika"
            v-model="diagnostica"
          />
        </div>

     
        <div class="col-6 mt-4">
          <label for="">MKB10</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="MKB10"
            v-model="MKB10"
          />
        </div>


        <div class="col-6 mt-4">
          <label for="">Bemor kelgan vaqt</label>
          <input
            type="date"
            name=""
            id=""
            class="form-control"
            placeholder="Bemor kelgan vaqt"
            v-model="comeAt"
          />
        </div>



        <div class="col-6 mt-4">
          <label for="">Bemor ketgan vaqt</label>
          <input
            type="date"
            name=""
            id=""
            class="form-control"
            placeholder="Bemor ketgan vaqt"
            v-model="leavAt"
          />
        </div>

        <div class="col-12 d-flex justify-content-between">
          <button
            class="
              btn btn-warning
              float-start
              mt-4
              d-flex
              gap-2
              justify-content-center
              align-items-center
            "
            @click="back"
          >
            bo'limlar <i class="fas fa-angle-left"></i>
          </button>
          <button
            class="
              btn btn-success
              w-25
              float-end
              mt-4
              d-flex
              gap-2
              justify-content-center
              align-items-center
            "
            @click="editUser"
          >
            Tahrirlash <i class="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>


      
    </div>
    <div class="badge bg-success p-5 w-50 m-auto d-block" v-if="success">
<h3>Malumotlar tahrirlandi! <i class="fas fa-check-double"></i> </h3>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { defineProps } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";
const props = defineProps({
  id: String,
});

let success = ref(false)

let natija = ref([])
let id = +props.id;
let number = ref("");
let ism = ref("");
let familiya = ref("");
let sharif = ref("");
let address = ref("");
let sana = ref("");
let doctor = ref("");
let diagnostica = ref("");
let bulim = ref("");
let MKB10 = ref("");
let comeAt = ref("");
let leavAt = ref("");

onMounted(async () => {
  let inputs = document.querySelectorAll("input");
  let res = await axios.get(
    `https://itmed.herokuapp.com/api/Discharges/${props.id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(res);


 

  natija.value.push(res.data)


  natija.value.forEach((el,index) => {
    number.value = el.number 
    ism.value = el.firstName
    familiya.value = el.lastName
    sharif.value = el.fatherName
    address.value = el.address
    sana.value = el.birthday
    doctor.value = el.doctor
    diagnostica.value = el.diagnosis
    bulim.value = el.department
    MKB10.value = el.mkB10
    comeAt.value = el.comeAt
    leavAt.value = el.leavAt
  })
  
// setTimeout(() => {
//  inputs.forEach((el,index) => {
//   console.log(natija.value)
//   el.value = natija.value[index] 
//  })
// }, 1000);
  
});

console.log(number)




const router = useRouter();

let back = () => {
  router.go(-2);
};

let editUser = async () => {
  console.log(number.value)
  let response = await axios.patch(
    "https://itmed.herokuapp.com/api/Discharges",
    {
      id: id,
      number: number.value,
      firstName: ism.value,
      lastName: familiya.value,
      fatherName: sharif.value,
      address: address.value,
      birthday: sana.value,
      doctor: doctor.value,
      diagnosis: diagnostica.value,
      department: bulim.value,
      mkB10:MKB10.value,
      comeAt:comeAt.value,
      leavAt:leavAt.value
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }
  );


  setTimeout(() => {
    success.value = true
  }, 10);

  setTimeout(() => {
    success.value = false
  }, 3000);
  console.log(response);
};
</script>

<style lang="scss" scoped>
#edit {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(227,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(76,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='3.3'%3E%3Cpath transform='translate(-1.75 0.4) rotate(0.25 1409 581) scale(1.001)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='1.1' transform='translate(-1 1) rotate(0.3 800 450) scale(1.001)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0.9 -3) rotate(3 401 736) scale(1.001)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='1'%3E%3Cpath transform='translate(6 -0.4) rotate(0.1 150 345) scale(0.999)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='2.2' transform='translate(-4 -2.5) rotate(3.6 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-6 2) rotate(0.6 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  background-attachment: fixed;
  background-size: cover;
}
</style>