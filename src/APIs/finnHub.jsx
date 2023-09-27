import axios from "axios";

const TOKEN = 'cka334hr01qpia5gt9s0cka334hr01qpia5gt9sg'



//axios.create customized instance with default configuration settings
export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params:{
        token:TOKEN
    }
})