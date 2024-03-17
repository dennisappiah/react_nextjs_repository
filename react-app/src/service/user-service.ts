import httpService from "./http-service";


const userService = httpService("/users")


export default userService


export interface User {
    id: number;
    name: string;
}

 