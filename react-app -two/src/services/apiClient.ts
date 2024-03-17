import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/todos",
    // headers:{
    
    // },
    // params:{
    //     key: "xxxxxxxxxx"
    // }
})

class APIClient<T>{
    endpoint: string

    // constructor
    constructor(endPoint: string){
        this.endpoint = endPoint
    }

    getAll = () => {
        return axiosInstance.get<T[]>(this.endpoint).then(res => res.data)
    }

    post = (data:T) => {
        return axiosInstance.post<T>(this.endpoint, data).then(res => res.data)
    }
}

export default APIClient;