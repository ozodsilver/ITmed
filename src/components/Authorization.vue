<template>
  <div id="auth">
    <div class="container">
      <div class="card text-center w-50 m-auto shadow-lg p-3 py-5">
        <img
          src="https://ssv.uz/assets/public/images/logo.svg"
          alt=""
          class="card-img-top w-25 m-auto d-block"
        />
        <div class="card-header ">
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
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1075%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M1275.2472451759736 392.36790818580243L1250.0200002339618 535.4387237844767 1393.090815832636 560.6659687264885 1418.3180607746478 417.5951531278142z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M80.362%2c552.479C110.085%2c551.059%2c136.389%2c535.356%2c152.029%2c510.04C168.607%2c483.206%2c177.352%2c449.074%2c160.85%2c422.193C144.866%2c396.155%2c110.915%2c393.452%2c80.362%2c393.294C49.419%2c393.134%2c15.841%2c395.78%2c-1.578%2c421.355C-20.923%2c449.758%2c-22.451%2c488.365%2c-4.239%2c517.508C13.093%2c545.244%2c47.693%2c554.04%2c80.362%2c552.479' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1205.3937682255903 164.5931373260503L1281.6712627032566 93.59901007226058 1195.0390781838985 65.45050699423766z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M910.99%2c66.568C927.238%2c67.002%2c945.044%2c63.275%2c952.997%2c49.099C960.838%2c35.123%2c954.319%2c18.31%2c945.611%2c4.857C937.784%2c-7.234%2c925.383%2c-15.267%2c910.99%2c-15.796C895.557%2c-16.363%2c879.703%2c-11.045%2c871.659%2c2.138C863.317%2c15.809%2c864.357%2c33.283%2c872.701%2c46.952C880.709%2c60.071%2c895.625%2c66.157%2c910.99%2c66.568' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M605.54 547.77 a128.36 128.36 0 1 0 256.72 0 a128.36 128.36 0 1 0 -256.72 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M291.72 39.83 a153.94 153.94 0 1 0 307.88 0 a153.94 153.94 0 1 0 -307.88 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M546.9167532214897 455.37380680560517L507.0156041558553 409.4727855086833 458.11464674328965 492.27501975559574z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M104.44911702791244 474.29919094833633L139.6158540995532 402.1966948345422 13.878741393041537 385.49783728397813z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M313.9930825594298 404.59653223935436L247.64813153366265 392.89812733972985 263.2729996971095 498.2647563281928z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M891.4660694930651 189.50810928348517L790.300125612942 232.45050471867162 833.2425210481284 333.6164485987947 934.4084649282515 290.6740531636083z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1287.745%2c352.275C1323.571%2c352.344%2c1352.087%2c327.649%2c1371.967%2c297.845C1395.059%2c263.226%2c1417.752%2c222.092%2c1399.538%2c184.676C1379.71%2c143.943%2c1332.96%2c121.997%2c1287.745%2c124.827C1246.564%2c127.405%2c1215.81%2c160.168%2c1197.82%2c197.302C1182.179%2c229.588%2c1186.078%2c266.492%2c1204.083%2c297.522C1222.011%2c328.419%2c1252.023%2c352.206%2c1287.745%2c352.275' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M293.43 251.76 a147.13 147.13 0 1 0 294.26 0 a147.13 147.13 0 1 0 -294.26 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M184.933%2c442.482C225.998%2c442.564%2c257.043%2c409.389%2c276.783%2c373.38C295.633%2c338.996%2c300.298%2c298.931%2c282.891%2c263.794C263.245%2c224.137%2c229.17%2c189.272%2c184.933%2c187.972C138.88%2c186.618%2c96.837%2c216.402%2c76.466%2c257.727C58.052%2c295.082%2c72.63%2c337.1%2c93.715%2c373.015C114.454%2c408.34%2c143.97%2c442.4%2c184.933%2c442.482' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1075'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
background-size: cover;

.card{
 
  background-position: center;

}
}
</style>