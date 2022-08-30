<template>
  <div id="post">
    <div class="container p-3">
      <h1 class="my-4 text-muted">bo'limni tanlang</h1>
      <select class="form-control"  v-model="value" @change="val">
        <option value="pulmonologiya">
         pulmonologiya
        </option>
         <option value="allergologiya">
         allergologiya
        </option>
         <option value="gematologiya">
         gematologiya
        </option>

         <option value="nevrologiya">
         nevrologiya
        </option>

         <option value="kardiologiya">
         kardiologiya
        </option>

         <option value="gastrointerologiya">
         gastrointerologiya
        </option>

         <option value="chaqaloqlar">
         chaqaloqlar poltologiyasi bo'limi
        </option>
         <option value="chala">
         chala tug'ilgan chaqaloqlar bo'limi
        </option>
         <option value="neonotal">
         neonatal reanimatsiya
        </option>
         <option value="reanimatsiya">
         reanimatsiya
        </option>
         <option value="erta">
         erta yosh bolalar patologiyasi
        </option>
         <option value="otoloringologiya">
         otoloringologiya
        </option>

         <option value="neyroxirurgiya">
        neyroxirurgiya
        </option>


         <option value="yujj">
         YUJJ
        </option>



         <option value="yiringli">
         Yiringli xirurgiya
        </option>



         <option value="ginekologiya">
         ginekologiya
        </option>



         <option value="rejali">
         Rejali xirurgiya
        </option>




         <option value="urologiya">
         urologiya
        </option>

          <option value="neonotal">
         neonotal xirurgiya
        </option>

          <option value="ortopediya1">
         ortopediya - 1
        </option>

          <option value="ortopediya2">
         ortopediya - 2
        </option>
        
 <option value="kardioxirurgiya">
         kardioxirurgiya
        </option>

      </select>
      <div class="row">


   <div class="col-6 mt-4">
          <label for="ism">number:</label>
          <input
            type="text"
            name=""
            id="ism"
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
      
      
      
        <div class="col-12 d-flex justify-content-between ">
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

            @click="addPost"
          >
            joylash <i class="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>
    </div>



<Transition name="bounce">
<div class="badge bg-success d-block w-75 m-auto p-5" v-if="show">
<h4>Ushbu siz tanlagan bo'limga, ma'lumotlar muvaffaqiyatli qo'shildi.  <i class="far fa-check-circle fs-2 text-white"></i> </h4>
</div>
</Transition>


  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import axios  from "axios";
export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      value: null,
      number:'',
      ism:'',
      familiya:'',
      sharif:'',
      address:'',
      sana:'',
      doctor:'',
      diagnostica:'',


      show:false



      
    };
  },

mounted(){
console.log(this.value)
},
  methods:{

    back(){
      this.$router.go(-1)
    },
    
    val(){
    console.log(this.value)
    },

    async addPost(){

if(this.value !== null && this.number !== '' && this.ism !== '' && this.familiya !== '' && this.sharif !== '' && this.address !== '' && this.bulim !== '' && this.sana !== '' && this.doctor !== '' && this.diagnostica !== '' ){


  await axios.post('https://itmed.herokuapp.com/api/Discharges', {
        number:this.number,
        firstName:this.ism,
        lastName:this.familiya,
        fatherName:this.sharif,
        address:this.address,
        department:this.value,
        birthday:this.sana,
        doctor:this.doctor,
        diagnosis:this.diagnostica

      },
      {
 headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
  },

      }
      ).then(el => {
      
        // this.value = null
        // this.number = ''
        // this.ism = ''
        // this.familiya = ''
        // this.sharif = ''
        // this.address = ''
        // this.bulim = ''
        // this.sana = ''
        // this.doctor = ''
        // this.diagnostica = ''

        setTimeout(() => {
          this.show = true
        }, 10);


        setTimeout(() => {
              this.show = false
        }, 2000);
       
      })


}else{
  alert("bo'sh malumot maydoni mavjud, tekshiring!")
}


   

    }
  } 
};

</script>



<style lang="scss">
#post {
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(79,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(37,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='3.3'%3E%3Cpath transform='translate(-92.4 -2.4000000000000004) rotate(-7.800000000000001 1409 581) scale(0.905464)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='1.1' transform='translate(-141 78) rotate(2.4000000000000004 800 450) scale(0.996622)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(3 -45) rotate(3 401 736) scale(0.996622)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='1'%3E%3Cpath transform='translate(468 10.799999999999999) rotate(-2.6999999999999997 150 345) scale(1.004488)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='2.2' transform='translate(-81 -216) rotate(-21.599999999999994 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-232.8 55.2) rotate(-3.599999999999998 1400 132) scale(0.79)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
height: 100vh;

 h1{
  font-family: "Rubik Dirt", cursive;
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

@import "@vueform/multiselect/themes/default.css";
</style>