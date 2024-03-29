import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post{
    id: number,
    title: string
    body: string
    userId : number
}

// returns query object
const useUserPosts = (userId: number | undefined) => useQuery<Post[], Error>({
    // users/1/posts
    queryKey: userId? ["users", userId, "posts"] : ["posts"],
    queryFn: ()=> axios
        .get("https://jsonplaceholder.typicode.com/posts", {
            params: {userId: userId}
        })
        .then(res => res.data),
    staleTime: 1*60 *1000 // 1min
})

export default useUserPosts


