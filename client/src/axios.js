import axios from "axios"

let headers = new Headers()

headers.append("Access-Control-Allow-Origin", "http://localhost:3000")
headers.append("Access-Control-Allow-Credentials", "true")

const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: headers,
})
export default instance
