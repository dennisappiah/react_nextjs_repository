import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // params: {
  //   key: ""
  // },
  // headers: {

  // }
})

export { CanceledError };  //export CanceledError object