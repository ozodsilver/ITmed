<template>
  <div id="post">
    <div class="container p-3">
      <h1 class="my-4 text-muted">bo'limni tanlang</h1>
      <Multiselect v-model="value" :options="options" placeholder="bo'limni tanlash" />
      <div class="row">
        <div class="col-6 mt-4">
          <label for="ism">Ism kiriting</label>
          <input
            type="text"
            name=""
            id="ism"
            class="form-control"
            placeholder="ism kiriting"
          />
        </div>
        <div class="col-6 mt-4">
          <label for="">familya</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="ism kiriting"
          />
        </div>

        <div class="col-6 mt-4">
          <label for="ism">Ism kiriting</label>
          <input
            type="text"
            name=""
            id="ism"
            class="form-control"
            placeholder="ism kiriting"
          />
        </div>
        <div class="col-6 mt-4">
          <label for="">familya</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="ism kiriting"
          />
        </div>

        <div class="col-6 mt-4">
          <label for="ism">Ism kiriting</label>
          <input
            type="text"
            name=""
            id="ism"
            class="form-control"
            placeholder="ism kiriting"
          />
        </div>
        <div class="col-6 mt-4">
          <label for="">familya</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="ism kiriting"
          />
        </div>

        <div class="col-6 mt-4">
          <label for="ism">Ism kiriting</label>
          <input
            type="text"
            name=""
            id="ism"
            class="form-control"
            placeholder="ism kiriting"
          />
        </div>
        <div class="col-6 mt-4">
          <label for="">familya</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="ism kiriting"
          />
        </div>
        <div class="col-6 mt-4">
          <label for="ism">Ism kiriting</label>
          <input
            type="text"
            name=""
            id="ism"
            class="form-control"
            placeholder="ism kiriting"
          />
        </div>
        <div class="col-6 mt-4">
          <label for="">familya</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="ism kiriting"
          />
        </div>

        <div class="col-6 mt-4">
          <label for="ism">Ism kiriting</label>
          <input
            type="text"
            name=""
            id="ism"
            class="form-control"
            placeholder="ism kiriting"
          />
        </div>
        <div class="col-6 mt-4">
          <label for="">familya</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder="ism kiriting"
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
          >
            joylash <i class="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      value: null,
      options: ["Batman", "Robin", "Joker"],
    };
  },

  methods:{
    back(){
      this.$router.go(-1)
    }
  } 
};
</script>



<style lang="scss">
#post {
background: rgb(255,255,255);
background: linear-gradient(184deg, rgba(255,255,255,0.9521185183057598) 0%, rgba(178,178,178,0.4227067535998774) 77%);

}

@import "@vueform/multiselect/themes/default.css";
</style>