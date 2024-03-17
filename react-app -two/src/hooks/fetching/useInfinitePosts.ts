import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";


interface Post{
    id: number,
    title: string
    body: string
    userId : number
}

interface PostQuery{
    pageSize:number,
}

const useInfinitePosts = (query: PostQuery) => useInfiniteQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (pageParam? - 1 : 0) * query.pageSize,
          _limit: query.pageSize
        }
      })
      .then(res => res.data),
    staleTime: 1 * 60 * 1000,
    getNextPageParam: (lastPage, allpages) => {
      return lastPage.length > 0 ? allpages.length + 1 : undefined;
    },
    initialPageParam: 1
});


export default useInfinitePosts

