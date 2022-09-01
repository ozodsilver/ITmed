<script setup>
import Authorization from './components/Authorization.vue';
import Home from './components/HomeComp.vue'
</script>



<template id ='app'>
<RouterView></RouterView>
</template>

<style lang="scss" >



// @media (max-width:880px) {
    
//     #app{
//         display:none !important;
//     }

// }


::-webkit-scrollbar {
  width: 5px;
  height: 9px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(164, 32, 32); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}

@import url('https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
</style>
