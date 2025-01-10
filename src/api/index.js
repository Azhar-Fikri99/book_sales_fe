
import axios  from "axios";

const API = axios.create(
  {
    // baseURL: 'https://api.restful-api.dev'
    // kita mau pakai punya kita
    // karena kita pakai api, maka kita tambahkan api nya
    //
    baseURL: 'http://127.0.0.1:8000/api'
})

export default API