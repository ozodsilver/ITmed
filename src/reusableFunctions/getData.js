import axios from "axios";
import { ref } from "vue";
let users = ref([]);
const zapros = () => {

  let getInfo = async ()=> {

    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
response.data.forEach(el => {
users.value.push(el)
})
  };

  return {
    users,
    getInfo,

  };
};

export default zapros;
