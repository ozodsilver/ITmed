import axios from "axios";
import { ref } from "vue";
import Store from '../store/store'

let users = ref([]);
let load = ref(true)
const zapros = () => {

  let getInfo = async ()=> {

    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

response.data.forEach(el => {

users.value.push(el)
load = false
})


if(response.data){
  
}
  };

  return {
    users,
    getInfo,
    load

  };
};

export default zapros;
